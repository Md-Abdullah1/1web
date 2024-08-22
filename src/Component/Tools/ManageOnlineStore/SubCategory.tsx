import { Label } from "reactstrap";
import "./SubCategory.css";
import { ErrorMessage, Field } from "formik";

const SubCategory = (props: any) => {
  return (
    <>
      <Label check>
        Subcategory <span className="txt-danger">*</span>
      </Label>
      <Field as="select" name="subcategory" className={props.className}>
        <option value={""}>Please select country</option>
        <option value={1}>
          yvonne myers [arts | fireworks | boats | flags | containers]
        </option>
      </Field>
      <ErrorMessage
        name="subcategory"
        component="span"
        className="invalid-feedback"
      />
    </>
  );
};

export default SubCategory;
