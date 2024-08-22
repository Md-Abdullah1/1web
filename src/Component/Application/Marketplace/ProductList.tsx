import { useState, useEffect } from 'react'
import { useAppSelector , useAppDispatch} from '../../../ReduxToolkit/Hooks';
import { Card, Col, Row } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import { dynamicImage } from '../../../Service';
import { ProductItemInterface } from '../../../Types/Application/Ecommerce/Product';
import { getVisibleProducts } from '../../../Service/Ecommerce.service';
import ProductProfile from './ProductProfile';
import { setProductItem } from '../../../ReduxToolkit/Reducers/ProductSlice';
import ProductModal from './ProductModal';



const ProductList = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const { listView, colClass } = useAppSelector((state) => state.filterData);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [dataId, setDataId] = useState<undefined | number>();
  const { filter } = useAppSelector((state) => state.filterData);
  const products = getVisibleProducts(productItem, filter);
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setProductItem(productItem));
  }, []);

  return (
    <div className={`product-wrapper-grid ${listView ? "list-view" : ""}`}>
      
      <Row>
        {products &&
          products.map((item: ProductItemInterface, index: number) => {
            return (
              <Col md="12">
                <div className="default-according style-1 faq-accordion job-accordion">
                    <ProductProfile setDataId={setDataId} setOpenModal={setOpenModal} item={item}/>
                </div>
              </Col>
            );
          })}
        {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataId={dataId} />}
      </Row>
    </div>
  )
}

export default ProductList
