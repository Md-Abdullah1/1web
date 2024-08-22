import { FieldProps } from "formik";
import Select from "react-select";
import "./Validation.css";

export interface Option {
  label: string;
  value: string;
}

interface CustomSelectProps extends FieldProps {
  options: any;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
  formData:any;
  setFormData: (data:FormData) => void;
}

export const CustomSelect = ({
  className,
  placeholder,
  field,
  form,
  options,
  isMulti = false,
  formData,
  setFormData
}: CustomSelectProps) => {
  const onChange = (newValue: any, actionMeta: any) => { 
    const { action, option } = actionMeta; 
    if (action === "select-option" && option?.value === selectAllOption.value) { 
      form.setFieldValue(
        field.name,
        (options as Option[]).map((item: Option) => item.value)
      );
      let values:any[] = [1,2];
      // setFormData({...formData , [field.name]:values})
    } else { 
      form.setFieldValue(
        field.name,
        isMulti
          ? (newValue as Option[]).map((item: Option) => item.value)
          : (newValue as Option)?.value
      ); 
      let values:any[] =[1];
      // setFormData({...formData , ['registration_type']:values})
    } 
  };

  const getValue = () => { 
    if (options) {
      return isMulti
        ? options.filter(
            (option: any) => field?.value?.indexOf(option?.value) >= 0
          )
        : options.find((option: any) => option?.value === field?.value);
    } else {
      return isMulti ? [] : ("" as any);
    }
  };
 
  const selectAllOption = {
    label: `Select all`,
    value: "selectall",
  };


  

  const getOptions = () => isMulti ? [selectAllOption, ...options] : options;

  return (
    <Select
      className={className}
      name={field.name}
      value={getValue()}
      onChange={onChange}
      placeholder={placeholder}
      options={getOptions()}
      isMulti={isMulti}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          "&:focus": {
            outline: 0,
          },
          boxShadow: "none",
        }),
      }}
    />
  );
};

export default CustomSelect;
