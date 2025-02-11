import { Card, CardBody, Col, Row } from "reactstrap";
import { H4, H5, H6, SVG } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { totalRevenueData } from "../../../../Data/Dashboard/Ecommerce/Ecommerce";

const TotalRevenue = () => {
  return (
    <>
      {totalRevenueData.slice(0,3).map((data, i) => (
        <Col lg="4" sm="6" key={i} className={i === 2 ? "customer-total" :""}>
          <Card className="total-sales">
            <CardBody>
              <Row>
                <Col xxl="8" xl="12" sm="12" className="box-col-12">
                  <div className={`d-flex ${data.classExtra}`}>
                    <span>
                      <SVG iconId={data.icon} />
                    </span>
                    <div className="flex-shrink-0">
                      <H4>{data.amount}</H4>
                      <H6>{data.title} </H6>
                      <div className="arrow-chart">
                        <SVG iconId={data.arrowIcon} />
                        <H5 className={data.arrowIcon === "arrow-chart-up" ? "font-success" : "font-danger"}>{data.percentage}</H5>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xl="4" md="4" xs="4" className="p-0 revenue-card">
                  <div className={data.chartClass} id={data.id}>
                    <ReactApexChart
                      options={data.chart}
                      series={data.chart.series}
                      height={data.chart.chart?.height}
                      type={data.chart.chart?.type}
                    />
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TotalRevenue;
