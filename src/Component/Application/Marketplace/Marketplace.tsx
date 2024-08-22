import { useEffect, useState } from "react";
import { useAppDispatch} from "../../../ReduxToolkit/Hooks";
import { Container } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { MarketplaceText, Parent1Web } from "../../../utils/Constant";
import { productsData } from "../../../Data/Application/Ecommerce/Product";
import { setProductItem } from "../../../ReduxToolkit/Reducers/ProductSlice";
import ProductFeatures from "../Ecommerce/Products/ProductFeatures/ProductFeatures";
import ProductGrid from "../Ecommerce/Products/ProductGrid/ProductGrid";
import ProductList from "./ProductList";
import DefaultFilter from "../Ecommerce/Products/ProductFeatures/DefaultFilter";
import DeliveryService from "../../App/Marketplace/DeliveryService";
import { client } from "../../../Api/client";
import { GET_COUNTRY } from "../../../Api";

export const productst= [
  { id:1, src:"faq/1.jpg", name:"", fillStar:true},
  { id:2, src:"faq/1.jpg", name:"", fillStar:true},
  { id:3, src:"faq/1.jpg", name:"", fillStar:true},
  { id:4, src:"faq/1.jpg", name:"", fillStar:true},
  { id:5, src:"faq/1.jpg", name:"", fillStar:true},
  { id:6, src:"faq/1.jpg", name:"", fillStar:true},
  { id:7, src:"faq/1.jpg", name:"", fillStar:true},
  { id:8, src:"faq/1.jpg", name:"", fillStar:true},
  { id:9, src:"faq/1.jpg", name:"", fillStar:true},
  { id:10, src:"faq/1.jpg", name:"", fillStar:true},    
];


const MarketplaceContainer = () => {
  const [sideBarOn, setSideBarOn] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProductItem(productsData));
  }, []);

  return (
    <>
      <Breadcrumbs mainTitle={MarketplaceText} parent={Parent1Web} />
      <Container
        fluid
        className={`product-wrapper ${sideBarOn ? "sidebaron" : ""}`}
      >       
        <DeliveryService/>
        <DefaultFilter/>      
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
          {/* <ProductList/> */}
        </div>
      </Container>
    </>
  );
};

export default MarketplaceContainer;
