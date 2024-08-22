import CustomSelect from "./CustomSelect";
import { Field } from "formik";

const branchesOptions = [
    {
      label: "Branch 1",
      value: "branch1",
    },
    {
      label: "Branch 2",
      value: "branch2",
    },
    {
      label: "Branch 3",
      value: "branch3",
    }, 
  ];

function Branches(props: any) {

    const { name, className, isMulti, placeholder } = props;

  return (
    <Field
      className={`custom-select ${className}`}
      name={name} 
      options={branchesOptions}
      component={CustomSelect}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  )
}

export default Branches;