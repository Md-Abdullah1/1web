import { Card, CardBody, CardHeader, Col, Container, Row } from 'reactstrap'
import TicketList from './TicketList/TicketList'
import TicketTable from './TicketTable/TicketTable'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Apps, SupportTicket, SupportTicketList } from '../../../utils/Constant'
import { H3 } from '../../../AbstractElements'
import { Link } from 'react-router-dom'
import { links } from '../../../Data/Tools/BrandSupportTools/ButtonActions'
import SubMenu from '../../Application/SubMenu/SubMenu'

const SupportTicketContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={SupportTicket} parent={Apps} />
      <SubMenu />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card> 
              <CardHeader className='pb-0'> 
                <H3>{SupportTicketList}</H3>
                <span>List of ticket opend by customers</span>
              </CardHeader>
              <CardBody>
                <TicketList />
                <TicketTable />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default SupportTicketContainer