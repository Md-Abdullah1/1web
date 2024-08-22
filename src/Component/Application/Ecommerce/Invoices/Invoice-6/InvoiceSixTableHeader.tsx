import { H3 } from "../../../../../AbstractElements";
import { invoiceSixTable } from "../../../../../Data/Application/Ecommerce/Invoice";

const InvoiceSixTableHeader = () => {
  return (
    <>
      {invoiceSixTable.map((data, i) => (
        <td className="item" key={i}>
          <H3 className="p-2 mb-0">{data}</H3>
        </td>
      ))}
    </>
  );
};

export default InvoiceSixTableHeader;
