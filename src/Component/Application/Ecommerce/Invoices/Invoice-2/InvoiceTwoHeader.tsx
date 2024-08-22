import { Table } from "reactstrap";
import { Image } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { ContactNo, Email, Website } from "../../../../../utils/Constant";

const InvoiceTwoHeader = () => {
  return (
    <td>
      <Table style={{ width: "100%" }} borderless>
        <tbody>
          <tr>
            <td>
              <Image className="for-light" src={dynamicImage("logo/logo-1.png")} alt="logo" />
              <Image className="for-dark" src={dynamicImage("logo/logo.png")} alt="logo"/>
              <address style={{ opacity: "0.8", width: "40%", marginTop: 10, fontStyle: "normal"}}>
                <span style={{ fontSize: 18, lineHeight: "1.5", fontWeight: 500 }} >
                  1982 Harvest Lane New York, NY12210 United State
                </span>
              </address>
            </td>
            <td style={{ opacity: "0.8", textAlign: "end" }}>
              <span
                style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 500}}>
                {Email} : crocs@themesforest.com
              </span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 500 }}>
                {Website}: www.Crocsthemes.com
              </span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 18, fontWeight: 500 }} >
                {ContactNo} : (316) 555-0116
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTwoHeader;
