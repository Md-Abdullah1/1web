import { Link } from 'react-router-dom'
import {useState} from 'react';
import { useAppSelector } from '../../../../../ReduxToolkit/Hooks'
import { H4, H6, Image, LI, P, UL } from '../../../../../AbstractElements'
import { starData } from '../../../../../Data/Application/Ecommerce/Product'
import { ProductDetailsProp } from '../../../../../Types/Application/Ecommerce/Product'
import { dynamicImage } from '../../../../../Service'
import { Collapse, FormGroup, Label } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { stateOfUsa } from '../../../../App/AccountSettings/MyCurrentRegistrationPlan/MyCurrentRegistrationPlan';

export const branchs =[
  {branchName:"Branch 1"},
  {branchName:"Branch 2"}
];

const ProductDetails = ({ item }: ProductDetailsProp) => {
  const {symbol}=useAppSelector((state)=>state.product);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="product-details">
      <div className='d-flex border-0 border-bottom mb-0' >
        <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/user.png`)} alt="user" />                                                                                                     
        <div className={`social-status social-online`} />
        <div className='flex-grow-1'>
          <span className="d-block" >{`Bucky Barnes`}</span>
          <FormGroup>
              <Label>{`Branch`}: </Label>
              <Typeahead options={stateOfUsa} placeholder="States of USA" id="Basic TypeAhead"/>
          </FormGroup>
        </div>                 
      </div>
      <div className="blog-box blog-grid text-center product-box border-0 border-bottom mb-1">
          <div className="blog-details-main simple-list flex-row">
          <UL className="blog-social justify-content-center flex-row mt-0 mb-0">
              <LI>9 April 2024</LI>
              <LI>by: Admin</LI>
              <LI>0 Hits</LI>
          </UL>
          </div>
      </div>
      {starData}
      <Link to={`${process.env.PUBLIC_URL}/ecommerce/productpage`}>
        <H4>{item.name}</H4>
      </Link>
      <P>{item.note}</P>
      <div className="product-price">
        {symbol}{item.price} <del>{symbol}{item.discountPrice}</del>
      </div>
    </div>
  )
}

export default ProductDetails