import { H3 } from "../../../../../AbstractElements";
import { Total } from "../../../../../utils/Constant";

const InvoiceTotal = () => {
  return (
    <>
      <td />
      <td />
      <td className="Rate">
        <H3 className="mb-0 p-2">{Total}</H3>
      </td>
      <td className="payment">
        <H3 className="mb-0 p-2">$3,644.25</H3>
      </td>
    </>
  );
};

export default InvoiceTotal;
