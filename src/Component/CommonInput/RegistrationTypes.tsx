import { Field } from "formik";
import CustomSelect from "./CustomSelect";
import { useEffect, useState } from "react";
import { client } from "../../Api/client";
import { GET_REGISTRATION_TYPES } from "../../Api";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { setRegistrationType } from "../../ReduxToolkit/Reducers/RegistrationTypeSlice";

interface RegistrationTypeProps{
  name:string;
  options: any;
  isMulti?: boolean;
  className?: string;
  placeholder?: string;
}

const RegistrationTypes = (props: any) => {
    const { registrationTypes } = useAppSelector((state) => state.registrationTypes);
    const { name, className, isMulti, placeholder } = props;
    const [types, setTypes] = useState([]);
    const dispatch = useAppDispatch();
    

    useEffect(() => {
      if(registrationTypes === undefined || registrationTypes.length == 0){
        getRegistrationTypes();
      }else{
        setTypes(registrationTypes)
      }
        
    },[]);

    const getRegistrationTypes = () =>{
        const response = client.get(GET_REGISTRATION_TYPES).then(res =>{
            let resp_types = res.data.data
            
            let filter_tyes = Object.keys(resp_types).map((item) =>{
              return {label:resp_types[item], value:item};
            })
            
            setTypes(filter_tyes)
            dispatch(setRegistrationType(filter_tyes));
          }).catch(error =>{
             console.log(error);
          });
    }

    return (
        <Field
          className={`custom-select ${className}`}
          name={name} 
          options={types}
          component={CustomSelect}
          placeholder={placeholder}
          isMulti={isMulti}
        />
    )
}

export default RegistrationTypes