import { Container } from 'reactstrap'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Home } from '../../../utils/Constant'
import CouponsData from '../../../Component/App/CouponsData/CouponsData'

const Coupons = () => {
  return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={`Coupons`} parent={Home} />
      <Container fluid className="search-page">
          <CouponsData/>
      </Container>
    </div>
  )
}

export default Coupons