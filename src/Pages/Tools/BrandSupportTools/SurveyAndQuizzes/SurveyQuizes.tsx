import {useState} from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BrandTools, ManageQuizSurveySystem } from '../../../../utils/Constant'
import { ActionButtons, QuizzSurveyTableAction, StudyMaterialAction, links, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import Popup from '../../../../Component/MasterPopup/Popup'
import SurveyQuizEdit from '../../../../Component/Tools/BrandSupportTools/SurveyAndQuizzes/SurveyQuizEdit'
import SurveyQuizView from '../../../../Component/Tools/BrandSupportTools/SurveyAndQuizzes/SurveyQuizView'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'



const SurveyQuizes = () => {
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
    
    const QuizSurveyColumnData: TableColumn<SupportDataType>[] = [
      {
        name: <TableHeadColumn title={`S.No.`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: false,
      },
      {
        name: <TableHeadColumn title={`Form Type`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Title`}/>,
        selector: (row) => row["salary"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Recipient Type`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Skip & Jump to Other Questions`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },    
      {
        name: <TableHeadColumn title={`Show Bookmark`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Pause Timer`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: false,
      },
      {
        name: <TableHeadColumn title={`Keywords`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Image`}/>,
        selector: (row) => row["salary"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Start Date`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`End Date`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },    
      {
        name: <TableHeadColumn title={`Shuffle Question`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Font`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Text Size`}/>,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },    
      {
        name: <TableHeadColumn title={`Status`}/>,
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
        <Breadcrumbs mainTitle={ManageQuizSurveySystem} parent={BrandTools} />
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
                  <div className=' pb-2'>
                    <Row>
                      <Col md="12">
                      {StudyMaterialAction.map((material, index)=>{
                        return(
                            <Link to={`${process.env.PUBLIC_URL}/${material.path}`} key={index}><span className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{material.title}</span></Link>
                            )
                      })}
                    </Col>
                    </Row>
                  </div>
                 
                  <div className='p-2 border'>
                    <div className=''>
                    {QuizzSurveyTableAction.map((action, index)=>{
                      return(
                      <>
                        <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                      </>)
                    })}
                    </div>
                    
                    <div className="table-responsive pt-2">
                      <DataTable className='custom-scrollbar' columns={QuizSurveyColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                    </div>

                    <Popup title={`Quiz and Survey System`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                      {isEditOpen ? <SurveyQuizEdit/> : <SurveyQuizView /> }
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

export default SurveyQuizes