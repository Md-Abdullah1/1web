import { Card, CardBody, Col } from "reactstrap";
import { PaginationSizings } from "../../../../utils/Constant";
import { sizingPaginationData } from "../../../../Data/BonusUi/Pagination/Pagination";
import StaticPaginationSizing from "./StaticPaginationSizing/StaticPaginationSizing";
import DynamicPaginationSizing from "./DynamicPaginationSizing/DynamicPaginationSizing";
import CardHeaderCommon from "../../CardHeaderCommon/CardHeaderCommon";

const PaginationSizing = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon title={PaginationSizings} span={sizingPaginationData} headClass="pb-0"/>
        <CardBody>
          <StaticPaginationSizing />
          <DynamicPaginationSizing />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationSizing;
