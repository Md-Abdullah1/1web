import { Table } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";

const InvoiceHeader = () => {
  return (
    <td>
      <Table className="logo-wrappper w-100" borderless>
        <tbody>
          <tr>
            <td>
              <Image className="for-light" src={dynamicImage("logo/logo-1.png")} alt="logo" />
              <Image className="for-dark" src={dynamicImage("logo/logo.png")} alt="logo"/>
              <span style={{ opacity: "0.8", display: "block", marginTop: 10 }} >
                202-555-0258
              </span>
            </td>
            <td className="address" style={{ textAlign: "right", opacity: "0.8", width: "16%"}} >
              <span>1982 Harvest Lane New York, NY12   State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceHeader;
