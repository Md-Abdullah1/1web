import CustomSelect from "./CustomSelect";
import { Field } from "formik";

const aletranativeQuestionsOptions = [
  {
    label: "Favourite color",
    value: "1",
  },
  {
    label: "Favourite cricket",
    value: "2",
  }, 
];

function AlternativeQuestions(props: any) {
  const { name, className, isMulti, placeholder } = props;

  return (
    <Field
      className={`custom-select ${className}`}
      name={name}
      options={aletranativeQuestionsOptions}
      component={CustomSelect}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  );
}

export default AlternativeQuestions;
