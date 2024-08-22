import { Card, CardBody, Col, Row } from "reactstrap";
import { H4, H5, H6 } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { saleChartData } from "../../../../Data/Widgets/ChartsData";

const TotalSaleWidgets = () => {
  return (
    <>
      {saleChartData.map((data, index) => (
        <Col xl="4" md="12" className="box-col-4" key={index}>
          <Card className="o-hidden"> 
            <div className="chart-widget-top">
              <CardBody>
                <Row className="pb-0 m-0">
                  <Col xl="9" lg="8" xs="9" className="p-0">
                    <H5 className="f-w-600 mb-2">{data.title}</H5>
                    <H4>{data.amount}</H4>
                    <span>{data.description}</span>
                  </Col>
                  <Col xl="3" lg="4" xs="3" className="text-end p-0">
                    <H6 className="txt-success">{data.percentage}</H6>
                  </Col>
                </Row>
              </CardBody>
              <div>
                <div className="flot-chart-placeholder"  id="chart-widget-top-second">
                  <ReactApexChart options={data.chart} series={data.chart.series} type={data.chart.chart?.type} height={200}/>
                </div>
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </> 
  );
};

export default TotalSaleWidgets;
