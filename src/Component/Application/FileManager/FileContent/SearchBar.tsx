import { ChangeEvent } from 'react';
import { Form, Input } from 'reactstrap'
import { SearchPlaceholder } from '../../../../utils/Constant';
import { SearchBarPropsType } from '../../../../Types/Application/FileManager/FileManager';

const SearchBar = ({setSearchTerm,searchTerm}:SearchBarPropsType) => {
  const handleChange = (event:ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };
  return (
    <Form className="form-inline">
      <div className="form-group d-flex mb-0 align-items-center">
        <i className="fa fa-search"></i>
        <Input
          className="form-control-plaintext"
          type="text"
          value={searchTerm}
          onChange={(e) => handleChange(e)}
          placeholder={SearchPlaceholder}
        />
      </div>
    </Form>
  )
}

export default SearchBar