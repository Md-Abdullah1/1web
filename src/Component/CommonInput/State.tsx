import CustomSelect from "./CustomSelect";
import { Field } from "formik";

const stateOptions = [
  {
    label: "Maharashtra",
    value: "maharashtra",
  },
  {
    label: "Bihar",
    value: "bihar",
  },
  {
    label: "Gujarat",
    value: "gujarat",
  },
  {
    label: "Karnataka",
    value: "karnataka",
  },
  {
    label: "Assam",
    value: "assam",
  },
  {
    label: "Punjab",
    value: "punjab",
  },
  {
    label: "Manipur",
    value: "manipur",
  },
  {
    label: "Goa",
    value: "goa",
  },
  {
    label: "Odisha",
    value: "odisha",
  },
];

function State(props: any) {
  const { name, className, isMulti, placeholder } = props;

  return (
    <Field
      className={`custom-select ${className}`}
      name={name} 
      options={stateOptions}
      component={CustomSelect}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  );
}

export default State;
