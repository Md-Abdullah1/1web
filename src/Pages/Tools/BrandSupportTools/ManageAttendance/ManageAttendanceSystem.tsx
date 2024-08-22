import { useState } from "react";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { ManageAttendance } from "../../../../utils/Constant";
import { CardBody,Card, Col, Container, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  AttendanceManagement,
  MyAtttendanceSystemTableAction,
} from "../../../../Data/Tools/ManageContents/ManageContentButtons";
import DataTable, { TableColumn } from "react-data-table-component";
import { TableHeadColumn } from "../../../App/AccountSettings/MyRegistrationPlan";
import {
  AttendanceActionButtons,
  AttendanceSystemData,
  AttendanceSystemDataType,
  links,
} from "../../../../Data/Tools/BrandSupportTools/ButtonActions";
import Popup from "../../../../Component/MasterPopup/Popup";
import SubMenu from "../../../../Component/Application/SubMenu/SubMenu";
// import ManageAttendanceEdit from "./ManageAttendanceEdit";
// import ManageAttendanceView from "../../../../Component/Tools/BrandSupportTools/AttendanceSystem/ManageAttendanceView";
import ManageActivityView from "../../../../Component/Tools/BrandSupportTools/AttendanceSystem/ManageActivityView";
import ManageActivityEdit from "../../../../Component/Tools/BrandSupportTools/AttendanceSystem/ManageActivityEdit";

const ManageAttendanceSystem = () => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState(AttendanceSystemData);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] =
    useState<AttendanceSystemDataType | null>(null);
  const [clickedRow, setClickedRow] = useState<AttendanceSystemDataType | null>(
    null
  );
  // const navigate = useNavigate();

  const handleRowSelected = (state: any) => {
    const rowValue = state.selectedRows;
    setSelectedRow(rowValue);
    // setData(state.selectedRows[0])
    console.log(`selelcteed row`, selectedRow);
    console.log(`selelcteed data`, state);
  };

  const openModalToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleActivityAction = (
    type: string,
    rowData: AttendanceSystemDataType
  ) => {
    // const data = rowData;
    setClickedRow(rowData);
    if (type == "edit") {
      setIsEditOpen(true);
      setIsOpen(!isOpen);
      // navigate(
      //   `${process.env.PUBLIC_URL}/tools/brand-support-tools/attendance-system/edit-activity`,
      //   { state: data }
      // );
    } else if (type == "view") {
      // navigate(
      //   `${process.env.PUBLIC_URL}/tools/brand-support-tools/attendance-system/view-activity`,
      //   { state: data }
      // );
      setIsEditOpen(false);
      setIsOpen(!isOpen);
    }
    else{
      // api call to delete the row 
    }

    // setIsEditOpen(type);
  };

  const MyAttendanceColumnData: TableColumn<AttendanceSystemDataType>[] = [
    {
      name: <TableHeadColumn title={`ID`} />,
      selector: (row) => row["referenceid"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Activity Type`} />,
      selector: (row) => row["activitytype"],
      sortable: true,
      center: true,
    },

    {
      name: <TableHeadColumn title={`Activity Title`} />,
      selector: (row) => row["activitytitle"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Description`} />,
      selector: (row) => row["description"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Category`} />,
      selector: (row) => row["subcategory"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Activity Location`} />,
      selector: (row) =>
        row["activitylocation"] ? "Physical Address" : "Online",
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Country`} />,
      selector: (row) => row["country"].join(","),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`State`} />,
      selector: (row) => row["state"].join(","),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`City`} />,
      selector: (row) => row["city"].join(","),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Full Address`} />,
      selector: (row) => row["fulladdress"],
      sortable: true,
      center: true,
    },
    
    {
      name: <TableHeadColumn title={`Keywords`} />,
      selector: (row) => row["keywords"].join(","),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Duration`} />,
      selector: (row) => row["duration"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Start Date`} />,
      selector: (row) => row["startdates"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Expiry Date`} />,
      selector: (row) => row["expirydate"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Leaving Activity`} />,
      selector: (row) => (row["leavingactivity"] ? "Yes" : "No"),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Break in Activity`} />,
      selector: (row) => (row["breakinactivity"] ? "Yes" : "No"),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Public Activity`} />,
      selector: (row) => row["publicactivity"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Supervisor Confirmirmation`} />,
      selector: (row) => (row["supervisorconfirm"] ? "Yes" : "No"),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Supervisor Name`} />,
      selector: (row) => row["supervisorname"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Manual Check`} />,
      selector: (row) => (row["manualcheck"] ? "Yes" : "No"),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Invite Users`} />,
      selector: (row) => row["inviteusers"].join(","),
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Meeting URL`} />,
      selector: (row) => row["meetingurl"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Phone Number`} />,
      selector: (row) => row["phonenumber"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Meeting Platform`} />,
      selector: (row) => row["meetingplatform"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Activity's Frequency`} />,
      selector: (row) => row["activityfrequency"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Rate Ranges`} />,
      selector: (row) => row["dateranges"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Thumbnail`} />,
      selector: (row) => row["image"],
      sortable: true,
      center: true,
    },

    {
      name: <TableHeadColumn title={`Actions`} />,
      cell: (row) => (
        <AttendanceActionButtons
          handleActivityAction={handleActivityAction}
          rowData={row}
        />
      ),
      center: false,
    },
  ];

  return (
    <div className="page-body">
      <Breadcrumbs
        mainTitle={`${ManageAttendance}`}
        parent="brand-support-tools"
      />
           <SubMenu />
      <Container fluid>
        <Row>
          <Col sm="12"> 
          <Card> 
            <CardBody>
              <>
                <div>
                  {MyAtttendanceSystemTableAction?.map((action, index) => {
                    return (
                      <>
                        <Link to={`${process.env.PUBLIC_URL}/${action.path}`}>
                          <span
                            key={index}
                            className="border rounded p-2 m-1 text-white bg-dark ps-2 pe-2"
                          >
                            {action.actionName}{" "}
                          </span>
                        </Link>
                      </>
                    );
                  })}
                </div>
                <div className="table-responsive pt-2">
                  <DataTable
                    className="custom-scrollbar"
                    columns={MyAttendanceColumnData}
                    data={data}
                    striped={true}
                    pagination
                    selectableRows
                    onSelectedRowsChange={handleRowSelected}
                    clearSelectedRows={toggleDelete}
                    onRowClicked={handleRowSelected}
                  />
                </div>
                <Popup
                  title={isEditOpen ? "Edit Activity" : "View Activity"}
                  openModalToggle={openModalToggle}
                  isOpen={isOpen}
                  size={`xl`}
                >
                  {isEditOpen ? (
                    <ManageActivityEdit rowData={clickedRow} />
                  ) : (
                    <ManageActivityView rowData={clickedRow} />
                  )}
                </Popup>
              </>
            </CardBody>
            </Card> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManageAttendanceSystem;
