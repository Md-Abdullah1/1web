import { Container, Table } from "reactstrap";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceBackImage from "./InvoiceBackImage";
import InvoiceContent from "./InvoiceContent";
import InvoiceOrder from "./InvoiceOrder";
import InvoiceSign from "./InvoiceSign";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Tools, InvoiceOne } from "../../../../../utils/Constant";
import InvoiceButtons from "../Common/InvoiceButtons";

const InvoiceOneContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceOne} parent={Tools} />
      <Container className="invoice-1">
        <div ref={componentRef}>
          <Table className="table-wrapper" borderless>
            <tbody>
              <tr>
                <InvoiceHeader />
              </tr>
              <tr>
                <InvoiceBackImage />
              </tr>
              <tr>
                <InvoiceContent />
              </tr>
              <tr>
                <InvoiceOrder />
              </tr>
            </tbody>
            <tfoot>
              <InvoiceSign />
            </tfoot>
          </Table>
        </div>
        <InvoiceButtons handlePrint={handlePrint} />
      </Container>
    </>
  );
};

export default InvoiceOneContainer;
