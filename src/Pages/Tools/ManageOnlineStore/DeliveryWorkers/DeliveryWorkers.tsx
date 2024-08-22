import {useState} from 'react'
import { DeliveryWorker, ManageAlbums } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import {  DeliveryFeesColumnData,  supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import {  DeliveryFeeAction, DeliveryFeeTableAction, DeliveryWorkerTableAction, ManageOnlineStore } from '../../../../Data/Tools/ManageContents/ManageContentButtons'


const DeliveryWorkers = () => {
    const [toggleDelete, setToggleDelete] = useState(false);
    const [data, setData] = useState(supportTicketData);    
    const handleRowSelected =() =>{}
    return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={DeliveryWorker} parent={`Manage Online Store`} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'> 
                <div>
                {ManageOnlineStore.map((item, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='border p-2 m-1'>{item.title} {item.total_contest >= 0 ? `(${item.total_contest})`:``}</span></Link>
                  </>)
                })}
                </div>
              </CardHeader>
              <CardBody>
                <>
                
               
                <div>
                {DeliveryFeeAction.map((action, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${action.path}`} key={index}><span className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                  </>)
                })}
                
                </div>

                <div className='p-2 border mt-2'>
                    <div className=''>
                    {DeliveryWorkerTableAction.map((action, index)=>{
                    return(
                    <>
                        <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                    </>)
                    })}
                    </div>
                
                   
                    <div className="table-responsive pt-2">
                    <DataTable className='custom-scrollbar' columns={DeliveryFeesColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                    </div>
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

export default DeliveryWorkers