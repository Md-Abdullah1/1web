import React ,{useState} from 'react'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { BrandTools, ManageQuizSurveySystem } from '../../../../utils/Constant'
import { ActionButtons, QuestionTableAction, QuestionsColumnData, StudyMaterialAction, links, supportColumnData, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import Popup from '../../../../Component/MasterPopup/Popup'
import QuestionEdit from '../../../../Component/Tools/BrandSupportTools/Questions/QuestionEdit'
import QuestionView from '../../../../Component/Tools/BrandSupportTools/Questions/QuestionView'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'

const Questions = () => {
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

    const QuestionsColumnData: TableColumn<SupportDataType>[] = [    
      {
        name: <TableHeadColumn title={`S. No.`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Question`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Image`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: false,
      },
      {
        name: <TableHeadColumn title={`Audio`}/>,
        selector: (row) => row["salary"],
        sortable: true,
        center: true,
      },
      {
        name:<TableHeadColumn title={`Duration`}/> ,
        selector: (row) => row["office"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Mark`}/>,
        selector: (row) => row["position"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Compulsory`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Subcategories`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name:<TableHeadColumn title={`Study Material & Lesson`}/> ,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name:<TableHeadColumn title={`Quiz Material`}/> ,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Calculator`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Translator`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Dictionary`}/>,
        selector: (row: SupportDataType) => row["email"],
        sortable: true,
        center: true,
      },
      {
        name: <TableHeadColumn title={`Search`}/>,
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
                  <div className='d-flex pb-2'>
                  {StudyMaterialAction.map((material, index)=>{
                        return(
                        <Link to={`${process.env.PUBLIC_URL}/${material.path}`} key={index}><span className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{material.title}</span></Link>
                        )
                    })}
                  </div>
                 
                  <div className='p-2 border'>
                    <div className=''>
                    {QuestionTableAction.map((action, index)=>{
                      return(
                      <>
                        <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                      </>)
                    })}
                    </div>
                    
                    <div className="table-responsive pt-2">
                    <DataTable className='custom-scrollbar' columns={QuestionsColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                    </div>

                    <Popup title={`Questions`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                      {isEditOpen ? <QuestionEdit/> : <QuestionView /> }
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

export default Questions