import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import ReactApexChart from 'react-apexcharts'
import { Uses } from '../../../../utils/Constant'
import { usesChart } from '../../../../Data/Widgets/WidgetsChartData'

const UsesWidgets = () => {
  return (
    <Col xl="7" lg="12" className="xl-50 box-col-7">
      <div className="small-chart-widget">
        <Card>
          <CardHeader className='pb-0'>
            <H3>{Uses}</H3>
          </CardHeader>
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <ReactApexChart options={usesChart} series={usesChart.series} type="bubble" height={320} />
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  )
}

export default UsesWidgets