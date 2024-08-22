import { Card, CardBody, Col, Row } from 'reactstrap'
import { VariationOfAddon } from '../../../../../utils/Constant'
import VariationAddonsFormContent from './VariationAddonsFormContent'
import VariationOfAddonsCardFooter from './VariationOfAddonsCardFooter'
import { variationOfAddonData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'
import CardHeaderCommon from '../../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const VariationOfAddons = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={VariationOfAddon} span={variationOfAddonData} />
        <CardBody className="card-wrapper input-radius">
          <Row>
            <Col>
              <VariationAddonsFormContent />
            </Col>
          </Row>
        </CardBody>
        <VariationOfAddonsCardFooter />
      </Card>
    </Col>
  )
}

export default VariationOfAddons