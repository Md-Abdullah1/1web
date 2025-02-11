import React from "react";
import { Link } from "react-router-dom";
import { Cancel, Href, PrintInvoice } from "../../../../../utils/Constant";
import { InvoicePrintType } from "../../../../../Types/Application/Ecommerce/Ecommerce";

const InvoiceButtons: React.FC<InvoicePrintType> = ({ handlePrint }) => {

  return (
    <span style={{display: "flex",justifyContent: "center",gap: 15,}} className="mb-3">
      <Link onClick={handlePrint} style={{background: "#5C61F2",color: "rgba(255, 255, 255, 1)",borderRadius: 10,padding: "18px 27px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} to={Href}>
        {PrintInvoice}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10}}/>
      </Link>
      <Link style={{background: "rgba(92, 97, 242, 0.1)",color: "#5C61F2",borderRadius: 10,padding: "18px 27px",fontSize: 16,fontWeight: 600,outline: 0,border: 0,textDecoration: "none",}} to={Href} download>
        {Cancel}
        <i className="icon-arrow-right" style={{fontSize: 13,fontWeight: "bold",marginLeft: 10}}/>
      </Link>
    </span>
  );
};

export default InvoiceButtons;
