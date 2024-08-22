import { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import { Field } from "formik";
import { useAppDispatch, useAppSelector } from "../../ReduxToolkit/Hooks";
import { setCounteries } from "../../ReduxToolkit/CountryReducer/CountrySlice"; 
import { useGetCountryDataQuery } from "../../ReduxToolkit/Reducers/Country/countryApiSlice";

interface CountryProps {
  label: string;
  value: string;
}

function Country(props: any) {
  const { countries } = useAppSelector((state: any) => state.country);
  const { data: fetchCountries, isLoading } = useGetCountryDataQuery(); 
  const { name, className, isMulti, placeholder } = props; 
  const dispatch = useAppDispatch();

  useEffect(() => {
    let filter_country = fetchCountries?.data.map((item: any) => {
      return { label: item.country_name, value: item.id };
    });
    if(filter_country?.length > 0){ 
      dispatch(setCounteries(filter_country));
    } 
  }, [fetchCountries?.data,dispatch]);

  if (isLoading) return <div>Loading...</div>;

  if(countries?.length < 0 || countries === undefined) return <div>Data not found!</div>

  return (
    <Field
      className={`custom-select ${className}`}
      name={name}
      options={countries}
      component={CustomSelect}
      placeholder={placeholder}
      isMulti={isMulti}
    />
  );
}

export default Country;
