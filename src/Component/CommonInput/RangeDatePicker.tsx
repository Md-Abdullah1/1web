import { useState, useEffect } from "react";
import { InputGroup } from "reactstrap";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { formatDate } from "./MultiDatePicker";
import { Field } from "formik";


// Props : name, setFieldValue, placeholder, className
function RangeDatePicker(props: any) {
  const [value, setValue] = useState<any>(formatDate(props.value));
  const { setFieldValue, name } = props;

  useEffect(() => {
    let updatedValue = "";
    if (value?.length) {
      updatedValue = value.map((item: any) => item.day).toString();
    }
    setFieldValue(name, updatedValue);
  }, [value]);

  return (
    <InputGroup className="flatpicker-calender">
      <DatePicker
        inputClass={`form-control ${props?.className || ''}`}
        range
        placeholder={props?.placeholder || "Select date range"}
        value={value} 
        onChange={setValue}
      />
      <Field type="hidden" name={name} />
    </InputGroup>
  );
}

export default RangeDatePicker;
