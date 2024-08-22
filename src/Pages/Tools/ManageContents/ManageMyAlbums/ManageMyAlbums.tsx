import {useState} from 'react'
import { BrandTools, ManageAlbums, ManageUploadedContents } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ActionButtons, MyAbumsColumnData, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import { ManageContents, MyAlbumTableAction } from '../../../../Data/Tools/ManageContents/ManageContentButtons'
import Popup from '../../../../Component/MasterPopup/Popup'
import ManageMyAlbumsEdit from '../../../../Component/Tools/ManageContents/ManageMyAlbums/ManageMyAlbumsEdit'
import ManageMyAlbumsView from '../../../../Component/Tools/ManageContents/ManageMyAlbums/ManageMyAlbumsView'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'

const ManageMyAlbums = () => {
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
  const MyAbumsColumnData: TableColumn<SupportDataType>[] = [    
    {
      name: <TableHeadColumn title={`ID`}/>,
      selector: (row) => row["id"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Album Name`}/> ,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    
    {
      name:<TableHeadColumn title={`Album Description`}/> ,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Album Keywords`}/>,
      selector: (row) => row["office"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Photos`}/> ,
      selector: (row) => row["office"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Date`}/>,
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
      <Breadcrumbs mainTitle={`${ManageAlbums} (Manage Content)`} parent={`Manage Content`} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'> 
                <div>
                {ManageContents.map((item, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${item.path}`}><span className='border p-2 m-1'>{item.title} {item.total_contest >= 0 ? `(${item.total_contest})`:``}</span></Link>
                  </>)
                })}
                </div>
              </CardHeader>
              <CardBody>
                <>
                
               
                <div>
                {MyAlbumTableAction.map((action, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                  </>)
                })}
                </div>
                {/* </Col></Row> */}
                <div className="table-responsive pt-2">
                  <DataTable className='custom-scrollbar' columns={MyAbumsColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                </div>
                
                <Popup title={ManageAlbums} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                  {isEditOpen ? <ManageMyAlbumsEdit/> : <ManageMyAlbumsView /> }
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

export default ManageMyAlbums