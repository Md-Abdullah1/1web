import { Card, Col } from 'reactstrap'
import CommonCardHeader from '../../../../CommonElements/CommonCardHeader/CommonCardHeader'
import CommonCardEarning from '../../../Dashboard/Default/CommonCardEarning/CommonCardEarning'
import { Monthly, TotalEarningsHeading, Weekly, Yearly } from '../../../../utils/Constant'
import { earningsChartData } from '../../../../Data/Dashboard/DashboardChart/DashboardChart'

const TotalEarnings = () => {
  return (
    <Col xl="2" md="4" sm="6" className="col-xl-25 box-col-3">
      <Card className="earning-card">
        <CommonCardHeader title={TotalEarningsHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} mainTitle={true}/>
        <CommonCardEarning chart={earningsChartData} amount={"$ 12,463"} percentage={"+ 20.08%"} icon={"down-arrow"}/>
      </Card>
    </Col>
  )
}

export default TotalEarnings