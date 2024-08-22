import {useState} from 'react'
import { BrandTools, ManageUploadedContents } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ActionButtons, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import { ManageContents } from '../../../../Data/Tools/ManageContents/ManageContentButtons'
import { SupportDataType } from '../../../App/AccountSettings/MyResumes'
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan'
import { Popup } from 'react-leaflet'
import TrashPhotoEdit from '../../../../Component/Tools/ManageContents/TrashPhotos/TrashPhotoEdit'
import TrashPhotoView from '../../../../Component/Tools/ManageContents/TrashPhotos/TrashPhotoView'

const TrashPhotos = () => {
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

    const TrashPhotoColumnData: TableColumn<SupportDataType>[] = [    
      {
        name: <TableHeadColumn title={`ID`}/>,
        selector: (row) => row["id"],
        sortable: true,
        center: true,
      },
      {
        name:<TableHeadColumn title={`Actions`}/>,
        cell: (row) => <ActionButtons openPopup={openPopup}/>,
        center: false,
      },
    ]
    return (
      <div className='page-body'>
        <Breadcrumbs mainTitle={`${ManageUploadedContents} (Manage Content)`} parent={BrandTools} />
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
                  <div className="table-responsive pt-2">
                    <DataTable className='custom-scrollbar' columns={TrashPhotoColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                  </div>  

                  <Popup title={`Trash Photos`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                    {isEditOpen ? <TrashPhotoEdit/> : <TrashPhotoView /> }
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

export default TrashPhotos