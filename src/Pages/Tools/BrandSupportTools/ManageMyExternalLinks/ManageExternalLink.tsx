import {useState} from 'react'
import { BrandTools, ManageExternalTitle } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ActionButtons, ExternalLinkTableAction, links, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'
import Popup from '../../../../Component/MasterPopup/Popup'
import ExternalLinkView from '../../../../Component/Tools/BrandSupportTools/ManageExternalLink/ExternalLinkView'
import ExternalLinkEdit from '../../../../Component/Tools/BrandSupportTools/ManageExternalLink/ExternalLinkEdit'
import SubMenu from '../../../../Component/Application/SubMenu/SubMenu'





const ManageExternalLink = () => {
  const [isOpen , setIsOpen] = useState(false);
  const [isEditOpen , setIsEditOpen] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState(supportTicketData);
  const [selectedData , setSelectedData] = useState();
  
  const handleRowSelected =() =>{}

  const openPopup = (type:boolean) =>{
    setIsOpen(!isOpen);
    setIsEditOpen(type);
  }

  const openModalToggle = () =>{
    setIsOpen(!isOpen);
  }

  const externalColumns: TableColumn<SupportDataType>[]= [
    {
      name: <TableHeadColumn title={`ID`}/>,
      selector: (row) => row["id"],
      sortable: true,
      center: false,
    },
    {
      name: <TableHeadColumn title={`Title`}/>,
      selector: (row) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: <TableHeadColumn title={`Number of Links`}/>,
      selector: (row) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: <TableHeadColumn title={`Description`}/>,
      selector: (row) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: <TableHeadColumn title={`Keywords`}/>,
      selector: (row) => row["name"],
      sortable: true,
      center: false,
    },
    {
      name: <TableHeadColumn title={`Date`}/>,
      selector: (row) => row["date"],
      sortable: true,
      center: false,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons openPopup={openPopup} />,
      center: false,
    },
  ]
  
  return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={`${ManageExternalTitle} (${BrandTools})`} parent={BrandTools} />
      <SubMenu />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card> 
              <CardBody>
                <>
                {/* <Row><Col md="2" className='d-flex'> */}
                <div className=''>
                {ExternalLinkTableAction.map((action, index)=>{
                  return(                  
                    <Link to={`${process.env.PUBLIC_URL}/${action.path}`} key={index}><span  className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                  )
                })}
                </div>
                {/* </Col></Row> */}
                <div className="table-responsive pt-2">
                  <DataTable className='custom-scrollbar' columns={externalColumns} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                </div>
                
                <Popup title={`External Links`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                  {isEditOpen ? <ExternalLinkEdit/> : <ExternalLinkView /> }
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

export default ManageExternalLink