import {useState} from 'react'
import { BrandTools, ManageExternalTitle, SpecialParameter } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ActionButtons, SpecialParameterColumnData, SpecialParameterTableAction, StudyMaterialAction, links, supportColumnData, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import Popup from '../../../../Component/MasterPopup/Popup'
import SpecialParameterEdit from '../../../../Component/Tools/BrandSupportTools/SpecialParameters/SpecialParameterEdit'
import SpecialParameterView from '../../../../Component/Tools/BrandSupportTools/SpecialParameters/SpecialParameterView'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'

const SpecialParameters = () => {
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

    const SpecialParameterColumnData: TableColumn<SupportDataType>[] = [
      {
        name: <TableHeadColumn title={`ID`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: false,
      },
      {
        name: <TableHeadColumn title={`Title`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Country`}/>,
        selector: (row) => row["salary"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Keywords`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`State`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Course`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Book`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Exam`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name:<TableHeadColumn title={`Actions`}/>,
        cell: (row) => <ActionButtons openPopup={openPopup}/>,
        center: false,
      },
      
    ];

    return (
      <div className='page-body'>
        <Breadcrumbs mainTitle={`${SpecialParameter} `} parent={BrandTools} />
        <Container fluid>
          <Row>
            <Col sm="12">
              <Card>
                <CardHeader className='pb-0'> 
                  <div>
                  {links.map((item, index)=>{
                    return(
                    <>
                      <Link to={`${process.env.PUBLIC_URL}/${item.path}`}><span className='border p-2 m-1'>{item.title} {item.total_contest >= 0 ? `(${item.total_contest})`:``}</span></Link>
                    </>)
                  })}
                  </div>
                </CardHeader>
                <CardBody>
                  <>
                  <div className='d-flex pb-2'>
                  {StudyMaterialAction.map((material, index)=>{
                        return(
                        <Link to={`${process.env.PUBLIC_URL}/${material.path}`} key={index}><span className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{material.title}</span></Link>
                        )
                    })}
                  </div>
                  {/* <Row><Col md="2" className='d-flex'> */}
                  <div className='border p-2'>
                  <div>
                  {SpecialParameterTableAction.map((action, index)=>{
                    return(
                    <>
                      <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                    </>)
                  })}
                  </div>
                  {/* </Col></Row> */}
                  <div className="table-responsive pt-2">
                    <DataTable className='custom-scrollbar' columns={SpecialParameterColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                  </div>

                  <Popup title={`Special Parameters`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                    {isEditOpen ? <SpecialParameterEdit/> : <SpecialParameterView /> }
                  </Popup>
                  </div>
                  </>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default SpecialParameters