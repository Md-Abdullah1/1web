import {useState} from 'react'
import { Card, CardBody, CardHeader, Col, Container, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import {BranchesContactColumnData, BranchesContactWhatsAppColumnData, BranchesEmailColumnData, supportTicketData } from '../../../../../Data/Tools/BrandSupportTools/ButtonActions'
import {ManageOnlineStore } from '../../../../../Data/Tools/ManageContents/ManageContentButtons'
import { ContactNoList, EmailList, Href, WhatsappNoList } from '../../../../../utils/Constant'
import { Btn } from '../../../../../AbstractElements'

const BranchPublicContact = () => {
    const [basicTab, setBasicTab] = useState<string>("1");
    const [toggleDelete, setToggleDelete] = useState(false);
    const [data, setData] = useState(supportTicketData);    
    const handleRowSelected =() =>{}
    return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={`New Branche public Contact `} parent={`Manage Store`} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card >
              <CardHeader className='pb-0'> 
                <div>
                {ManageOnlineStore.map((item, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='border p-2 m-1 '>{item.title} {item.total_contest >= 0 ? `(${item.total_contest})`:``}</span></Link>
                  </>)
                })}
                </div>
              </CardHeader>
              <CardBody>
                <>
                  <Card className='shadow-none'>
                  <Nav pills className="nav-warning ">
                    <NavItem>
                      <NavLink
                        href={Href}
                        className={basicTab === "1" ? "active" : ""}
                        onClick={() => setBasicTab("1")}
                      >
                        {WhatsappNoList}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href={Href}
                        className={basicTab === "2" ? "active" : ""}
                        onClick={() => setBasicTab("2")}
                      >
                        {ContactNoList}
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        href={Href}
                        className={basicTab === "3" ? "active" : ""}
                        onClick={() => setBasicTab("3")}
                      >
                        {EmailList}
                      </NavLink>
                    </NavItem>
                    <NavItem className='w-50'>
                      <Link to={`${process.env.PUBLIC_URL}/manage-online-store/manage-branches/branch-public-contacts/add-new`}><Btn className='bg-primary float-end'>{`Add a Branch Contact`}</Btn></Link>
                    </NavItem>
                  </Nav>

                  </Card>
                  <TabContent activeTab={basicTab}>
                    <TabPane tabId={"1"} >
                      <div className="table-responsive pt-2">
                        <DataTable className='custom-scrollbar' columns={BranchesContactWhatsAppColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                      </div>
                    </TabPane>
                    <TabPane tabId={`2`} >
                      <div className="table-responsive pt-2">
                        <DataTable className='custom-scrollbar' columns={BranchesContactColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                      </div>
                    </TabPane>
                    <TabPane tabId={`3`} >
                      <div className="table-responsive pt-2">
                        <DataTable className='custom-scrollbar' columns={BranchesEmailColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                      </div>
                    </TabPane>
                  </TabContent>
                  
                </>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BranchPublicContact