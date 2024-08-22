import { useEffect, useState } from "react";
import { InputGroup } from "reactstrap";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Field } from "formik";

export function formatDate(values: string){ 
    if(values !== '' && values !== undefined){
        const updatedValue = values.split(',').map((item: any) => {
            return new DateObject().set({ day: item })
        }); 
        return updatedValue;
    }
    return null;
}

// Props : name, setFieldValue, placeholder, className
function MultiDatePicker(props: any) {
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
        monthYearSeparator="::"
        multiple
        value={value}
        placeholder={props?.placeholder || 'Select multi date'} 
        onChange={setValue}
      />
      <Field type="hidden" name={name} />
    </InputGroup>
  );
}

export default MultiDatePicker;
