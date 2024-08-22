import React ,{useState} from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BrandTools, PhotoContestSystem } from '../../../../utils/Constant'
import { ActionButtons, MyPhotoContestTableAction, links, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'
import Popup from '../../../../Component/MasterPopup/Popup'
import PhotoContestEdit from '../../../../Component/Tools/BrandSupportTools/ManageMyPhotoContest/PhotoContestEdit'
import PhotoContestView from '../../../../Component/Tools/BrandSupportTools/ManageMyPhotoContest/PhotoContestView'
import SubMenu from '../../../../Component/Application/SubMenu/SubMenu'


  

const ManageMyPhotoContests = () => {
    const [toggleDelete, setToggleDelete] = useState(false);
    const [data, setData] = useState(supportTicketData);
    const [isEditOpen , setIsEditOpen] = useState(false);
    const [isOpen , setIsOpen] = useState(false);
    
    const handleRowSelected =() =>{}

    const openPopup = (type:boolean) =>{
      setIsOpen(!isOpen);
      setIsEditOpen(type);
    }

    const openModalToggle = () =>{
      setIsOpen(!isOpen);
    }

    const ManageMyPhotoContestColumnData: TableColumn<SupportDataType>[] = [
      {
        name:<TableHeadColumn title={`ID`}/> ,
        selector: (row) => row["id"],
        sortable: true,
        center: false,
      },
      {
        name:<TableHeadColumn title={`Photo Contest`}/> ,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Thumbnail`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Approval Status`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Photo Contest Description`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name:<TableHeadColumn title={`Keywords`}/> ,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Prizes`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Submission Start Date`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Submission End Date`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Photo Contest End Date`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Minimum Number of files`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Maximum Number of files`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Media Type`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Minimum Shares Per Contest`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Minimum Likes per Contest`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Must be a Customer?`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Minimum value of orders`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Created On`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name:<TableHeadColumn title={`Actions`}/>,
        cell: (row) => <ActionButtons openPopup={openPopup} />,
        center: false,
      },
    ];
    
    return (
      <div className='page-body'>
        <Breadcrumbs mainTitle={`${PhotoContestSystem} (${BrandTools})`} parent={BrandTools} />
        <SubMenu />
        <Container fluid>
          <Row>
            <Col sm="12">
              <Card>
                <CardBody>
                  <>
                  {/* <Row><Col md="2" className='d-flex'> */}
                  <div className=''>
                  {MyPhotoContestTableAction.map((action, index)=>{
                    return(
                    <>
                      <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                    </>)
                  })}
                  </div>
                  {/* </Col></Row> */}
                  <div className="table-responsive pt-2">
                    <DataTable className='custom-scrollbar' columns={ManageMyPhotoContestColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                  </div>

                  <Popup title={`Photo Contests`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                    {isEditOpen ? <PhotoContestEdit/> : <PhotoContestView /> }
                  </Popup>
                  </>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default ManageMyPhotoContests