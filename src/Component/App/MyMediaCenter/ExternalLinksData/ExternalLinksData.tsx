import SearchInput from '../../../Application/SearchResult/SearchInput/SearchInput'
import { Card, CardBody, Col, Row } from 'reactstrap'
import { H5 } from '../../../../AbstractElements'
import PagesSort from '../../../Application/SearchResult/SearchTabContent/AllTabs/PagesSort'
import InformationCommon from '../../../Application/SearchResult/SearchTabContent/AllTabs/InformationCommon'
import { SearchResultsWithin } from '../../../../utils/Constant'

export const searchTabsData = [
    {
      id: 1,
      title: "PixelStrap - Portfolio | ThemeForest",
      url: "https://themeforest.net/user/pixelstrap/portfolio/",
      detail:
        "2023's best selling creative wp themes. the #1 source of premium wp themes! themeforest 45,000+ wp themes & website templates from $2. check it out!",
      star: "3 stars",
      vote: "590 votes",
      news: "Theme",
      videoLink: "https://www.youtube.com/embed/CJnfAXlBRTE",
    },{
        id: 2,
        title: "PixelStrap - Portfolio | ThemeForest",
        url: "https://themeforest.net/user/pixelstrap/portfolio/",
        detail:
          "2023's best selling creative wp themes. the #1 source of premium wp themes! themeforest 45,000+ wp themes & website templates from $2. check it out!",
        star: "3 stars",
        vote: "590 votes",
        news: "Theme",
        videoLink: "https://www.youtube.com/embed/CJnfAXlBRTE",
      },{
        id: 3,
        title: "PixelStrap - Portfolio | ThemeForest",
        url: "https://themeforest.net/user/pixelstrap/portfolio/",
        detail:
          "2023's best selling creative wp themes. the #1 source of premium wp themes! themeforest 45,000+ wp themes & website templates from $2. check it out!",
        star: "3 stars",
        vote: "590 votes",
        news: "Theme",
        videoLink: "https://www.youtube.com/embed/CJnfAXlBRTE",
      },]
const ExternalLinksData = () => {
  return (
    <Card>
        <SearchInput />
        <CardBody >
            <H5 className="f-w-700 mb-2">{SearchResultsWithin}</H5>  
            <Row>
                {searchTabsData.map((item, i) => (
                <Col xxl="4" xl="4" className="">
                                      
                    <InformationCommon item={item} key={i} />                    
                </Col>
                ))}
            {/* <SearchBanner /> */}
            <PagesSort />
            </Row>
        </CardBody>
    </Card>
  )
}

export default ExternalLinksData