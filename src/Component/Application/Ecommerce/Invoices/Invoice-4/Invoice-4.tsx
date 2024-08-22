import { Container, Table } from "reactstrap";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";
import InvoiceFiveSign from "../Invoice-5/InvoiceFiveSign";
import InvoiceButtons from "../Common/InvoiceButtons";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Breadcrumbs from "../../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Tools, InvoiceFour } from "../../../../../utils/Constant";

const InvoiceFourContainer = () => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <Breadcrumbs mainTitle={InvoiceFour} parent={Tools} />
      <Container className="invoice-4">
        <div ref={componentRef}>
          <Table borderless style={{ width: 1160, margin: "0 auto" }}>
            <tbody>
              <tr>
                <InvoiceFourHeader />
              </tr>
              <tr>
                <InvoiceFourDetail />
              </tr>
              <tr>
                <InvoiceFourTable />
              </tr>
              <tr>
                <td
                  style={{
                    height: 3,
                    width: "100%",
                    background:
                      "linear-gradient(90deg, #5C61F2 20.61%, #FF9766 103.6%)",
                    display: "block",
                  }}
                />
              </tr>
              <tr>
                <InvoiceTotal />
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

export default InvoiceFourContainer;
