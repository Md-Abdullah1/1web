import { Card, CardBody, Col, Table } from "reactstrap";
import CommonCardHeader from "../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { Monthly, TransactionHistoryHeading, Weekly, Yearly } from "../../../../utils/Constant";
import TransactionHistoryBody from "./TransactionHistoryBody";

const TransactionHistory = () => {
  return (
    <Col lg="4" md="5">
      <Card className="transaction-history">
        <CommonCardHeader headClass="pb-0" title={TransactionHistoryHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} mainTitle={true}/>
        <CardBody>
          <div className="custom-scrollbar">
            <Table responsive className="display" style={{ width: "100%" }}>
              <tbody>
                <TransactionHistoryBody />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TransactionHistory;
