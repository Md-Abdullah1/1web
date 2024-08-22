import ReactApexChart from "react-apexcharts";
import { CardBody } from "reactstrap";
import { H2, H6, SVG } from "../../../../AbstractElements";

const CommonCardEarning = ({chart,amount,percentage,icon}:any) => {
  return (
    <CardBody className="p-0">
      <ReactApexChart
        options={chart}
        series={chart.series}
        height={chart.chart.height}
        type={chart.chart.type}
      />
      <div className="d-flex p-3 pt-0">
        <H2 className="me-2">{amount}</H2>
        <span className={`bg-light-${icon === "down-arrow" ? "danger" : "success"}`}>
          <SVG iconId={icon} />
        </span>
        <H6 className={`font-${icon === "down-arrow" ? "danger" : "success"}`}>{percentage}</H6>
      </div>
    </CardBody>
  );
};

export default CommonCardEarning;
