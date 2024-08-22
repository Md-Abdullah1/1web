import { Card, Col } from 'reactstrap'
import { BasicInputGroup } from '../../../../../utils/Constant'
import BasicInputGroupsCardBody from './BasicInputGroupsCardBody'
import BasicInputGroupsCardFooter from './BasicInputGroupsCardFooter'
import { basicInputGroupData } from '../../../../../Data/Forms/FormsControl/InputGroup/InputGroup'
import CardHeaderCommon from '../../../../../CommonElements/CardHeaderCommon/CardHeaderCommon'

const BasicInputGroups = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={BasicInputGroup} span={basicInputGroupData} />
        <BasicInputGroupsCardBody/>
        <BasicInputGroupsCardFooter />
      </Card>
    </Col>
  )
}

export default BasicInputGroups