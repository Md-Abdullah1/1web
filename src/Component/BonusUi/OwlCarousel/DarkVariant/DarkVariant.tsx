import { Card, CardBody, Col } from 'reactstrap'
import { DarkVariants } from '../../../../utils/Constant'
import CommonCarousel from '../Common/CommonCarousel'
import CardHeaderCommon from '../../CardHeaderCommon/CardHeaderCommon'
import { darkVariantData, darkVariantDataList } from '../../../../Data/BonusUi/OwlCarousel/OwlCarousel'

const DarkVariant = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CardHeaderCommon title={DarkVariants} span={darkVariantData} headClass='pb-0' />
        <CardBody>
          <CommonCarousel dark data={darkVariantDataList} control caption lightCaption indecators />
        </CardBody>
      </Card>
    </Col>
  )
}

export default DarkVariant