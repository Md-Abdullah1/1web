import { CardHeader, Form, Input, InputGroup, InputGroupText } from 'reactstrap'
import { Search, SearchWithinPage } from '../../../../utils/Constant'

const SearchInput = () => {
  return (
    <CardHeader className='pb-0 px-2'>
      <Form className="theme-form">
        <InputGroup className=" m-0 flex-nowrap">
          <Input className="form-control-plaintext" type="search" placeholder={SearchWithinPage} />
          <InputGroupText className="btn bg-primary">{Search}</InputGroupText>
        </InputGroup>
      </Form>
    </CardHeader>
  )
}

export default SearchInput