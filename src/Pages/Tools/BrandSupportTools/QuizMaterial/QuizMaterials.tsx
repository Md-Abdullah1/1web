import {useState} from 'react'
import { BrandTools, ManageExternalTitle, QuizMaterial } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ActionButtons, QuizMaterialTableAction, StudyMaterialAction, links, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import Popup from '../../../../Component/MasterPopup/Popup'
import QuizMaterialEdit from '../../../../Component/Tools/BrandSupportTools/QuizMaterial/QuizMaterialEdit'
import QuizMaterialView from './QuizMaterialView'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'

const QuizMaterials = () => {
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

    const QuizMaterialColumnData: TableColumn<SupportDataType>[] = [
      {
        name: <TableHeadColumn title={`S. No.`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: false,
      },
      {
        name: <TableHeadColumn title={`Material Title`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`SubCategories`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Keywords`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Auto Publish Date`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      
      {
        name: <TableHeadColumn title={`Attachment`}/>,
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
        <Breadcrumbs mainTitle={`${QuizMaterial} `} parent={BrandTools} />
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
                        <Link key={index} to={`${process.env.PUBLIC_URL}/${material.path}`}><span className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{material.title}</span></Link>
                        )
                    })}
                  </div>
                  {/* <Row><Col md="2" className='d-flex'> */}
                  <div className='border p-2'>
                  <div>
                  {QuizMaterialTableAction.map((action, index)=>{
                    return(
                    <>
                      <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                    </>)
                  })}
                  </div>
                  {/* </Col></Row> */}
                    <div className="table-responsive pt-2">
                      <DataTable className='custom-scrollbar' columns={QuizMaterialColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                    </div>

                    <Popup title={`Quiz Material`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                      {isEditOpen ? <QuizMaterialEdit/> : <QuizMaterialView /> }
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

export default QuizMaterials