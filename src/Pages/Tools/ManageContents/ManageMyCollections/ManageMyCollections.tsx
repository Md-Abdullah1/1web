import {useState} from 'react'
import { ManageAlbums, ManageMyCollection } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ActionButtons, MyCollectionColumnData,   supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import { ManageContentTableAction, ManageContents } from '../../../../Data/Tools/ManageContents/ManageContentButtons'
import Popup from '../../../../Component/MasterPopup/Popup'
import ManageMyCollectionEdit from '../../../../Component/Tools/ManageContents/ManageMyCollections/ManageMyCollectionEdit'
import ManageMyCollectionView from '../../../../Component/Tools/ManageContents/ManageMyCollections/ManageMyCollectionView'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'

const ManageMyCollections = () => {
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

  const MyCollectionColumnData: TableColumn<SupportDataType>[] = [    
    {
      name: <TableHeadColumn title={`ID`}/>,
      selector: (row) => row["id"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Collection Name`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Collection Description`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Collection Keywords`}/> ,
      selector: (row) => row["office"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Type`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Photos`}/>,
      selector: (row: SupportDataType) => row["email"],
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
      <Breadcrumbs mainTitle={`${ManageMyCollection} `} parent={`Manage Content`} />
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
                {ManageContentTableAction.map((action, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                  </>)
                })}
                </div>
                {/* </Col></Row> */}
                <div className="table-responsive pt-2">
                  <DataTable className='custom-scrollbar' columns={MyCollectionColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                </div>
                
                <Popup title={ManageMyCollection} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                  {isEditOpen ? <ManageMyCollectionEdit/> : <ManageMyCollectionView /> }
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

export default ManageMyCollections