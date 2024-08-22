import CustomSelect from "./CustomSelect";
import { Field } from "formik";

const currencyOptions = [
  {
    label: "AED",
    value: "aed",
  },
  {
    label: "AFN",
    value: "afn",
  },
  {
    label: "ALL",
    value: "all",
  },
  {
    label: "AMD",
    value: "amd",
  },
  {
    label: "ANG",
    value: "ang",
  }, 
];

function Currency(props: any) {
  const { name, className, isMulti, placeholder } = props;

  return (
    <Field
      className={`custom-select ${className}`}
      name={name}
      options={currencyOptions}
      component={CustomSelect}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  );
}

export default Currency;
