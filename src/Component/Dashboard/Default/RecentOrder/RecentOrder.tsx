import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, RecentOrders, Weekly, Yearly } from "../../../../utils/Constant";
import RecentOrderBody from "./RecentOrderBody";

const RecentOrder = () => {
  return (
    <Col lg="7" className="box-col-7">
      <Card>
        <CommonCardHeader headClass="pb-0" title={RecentOrders} mainTitle={true} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="pt-0 recent">
          <div className="custom-scrollbar table-responsive">
            <Table className="display" style={{ width: "100%" }} >
              <thead>
                <tr>
                  <th>
                    <div className="form-check">
                      <Input type="checkbox" />
                      <Label />
                    </div>
                  </th>
                  <th>No.</th>
                  <th>Customer Name</th>
                  <th>ID</th>
                  <th>Date</th>
                  <th>City</th>
                  <th>Status</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <RecentOrderBody/>
              </tbody>
            </Table> 
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentOrder;
