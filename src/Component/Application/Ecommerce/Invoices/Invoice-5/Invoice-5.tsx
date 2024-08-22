import { Container, Table } from "reactstrap";
import InvoiceFiveHeader from "./InvoiceFiveHeader";
import InvoiceNumber from "./InvoiceNumber";
import InvoiceTable from "./InvoiceTable";
import InvoiceFiveSign from "./InvoiceFiveSign";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Tools, InvoiceFive } from "../../../../../utils/Constant";
import InvoiceButtons from "../Common/InvoiceButtons";

const InvoiceFiveContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceFive} parent={Tools} />
      <Container className="invoice-5">
        <div ref={componentRef}>
          <Table borderless>
            <tbody>
              <tr>
                <td>
                  <InvoiceFiveHeader />
                </td>
              </tr>
              <tr>
                <InvoiceNumber />
              </tr>
              <tr>
                <InvoiceTable />
              </tr>
              <InvoiceFiveSign />
            </tbody>
          </Table>
        </div>
        <InvoiceButtons handlePrint={handlePrint} />
      </Container>
    </>
  );
};

export default InvoiceFiveContainer;
