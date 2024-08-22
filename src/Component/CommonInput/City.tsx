import CustomSelect from "./CustomSelect";
import { Field } from "formik";

const cityOptions = [
  {
    label: "Surat",
    value: "surat",
  },
  {
    label: "Ahemedabad",
    value: "ahmedabad",
  },
  {
    label: "Rajkot",
    value: "rajkot",
  },
  {
    label: "Valsad",
    value: "valsad",
  },
  {
    label: "Navsari",
    value: "navsari",
  },
  {
    label: "Vapi",
    value: "vapi",
  },
  {
    label: "Vadodara",
    value: "vadodara",
  },
];

function City(props: any) {

  const { name, className, isMulti, placeholder } = props;

  return (
    <Field
      className={`custom-select ${className}`}
      name={name} 
      options={cityOptions}
      component={CustomSelect}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  )
}

export default City