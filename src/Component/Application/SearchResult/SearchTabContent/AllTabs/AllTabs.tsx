import { Col, Row } from 'reactstrap'
import { H5 } from '../../../../../AbstractElements'
import { SearchPixelStrap } from '../../../../../utils/Constant'
import { searchTabsData } from '../../../../../Data/Application/SearchResult/SearchResult'
import InformationCommon from './InformationCommon'
import SearchBanner from './SearchBanner'
import PagesSort from './PagesSort'

const AllTabs = () => {
  return (
    <Row>
      <Col xxl="8" xl="6" className="box-col-7">
        <H5 className="f-w-700 mb-2">{SearchPixelStrap}</H5>
        {searchTabsData.map((item, i) => (
          <InformationCommon item={item} key={i} />
        ))}
      </Col>
      <SearchBanner />
      <PagesSort />
    </Row>
  )
}

export default AllTabs