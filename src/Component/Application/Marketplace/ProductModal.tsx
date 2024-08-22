import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Modal,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  Table,
} from "reactstrap";
import {
  Btn,
  FeatherIcons,
  H3,
  H4,
  H5,
  Image,
  LI,
  P,
  UL,
} from "../../../AbstractElements";
import { ProductInterface } from "./Product";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";
import { dynamicImage } from "../../../Service";
import { ProductItemInterface } from "../../../Types/Application/Ecommerce/Product";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";
import { ServiceType } from "../../../Types/Application/Ecommerce/Ecommerce";
import { Href } from "../../../utils/Constant";

export const servicesData: ServiceType[] = [
  {
    icon: "Truck",
    title: "Free Shipping",
    subtitle: "Free Shipping World Wide",
  },
  {
    icon: "Clock",
    title: "24 X 7 Service",
    subtitle: "Online Service For New Customer",
  },
];

export const clothsDetailsData = ["Fabric", "Video", "Details", "Brand"];

export interface ProductModalInterface {
  value: boolean;
  setOpenModal: (value: boolean) => void;
  dataId: undefined | number;
}

const ProductModal = ({
  value,
  setOpenModal,
  dataId,
}: ProductModalInterface) => {
  const [open, setOpen] = useState(value);
  const [activeTab, setActiveTab] = useState(1);
  const { productItem } = useAppSelector((state) => state.product);
  const [singleProduct, setSingleProduct] = useState<
    ProductInterface | undefined | [] | any
  >([]);

  useEffect(() => {
    productItem.forEach((product: ProductItemInterface) => {
      if (product.id === dataId) setSingleProduct(product);
    });
  });

  const onCloseModal = () => {
    setOpen(false);
    setOpenModal(false);
  };

  const brandDetailsData = ["Clothing", "Bags", "Footwear"];
  const productSocial = [
    {
      link: "https://www.facebook.com/",
      iconName: "facebook",
    },
    {
      link: "https://accounts.google.com/",
      iconName: "google-plus",
    },
    {
      link: "https://twitter.com/",
      iconName: "twitter",
    },
    {
      link: "https://www.instagram.com/",
      iconName: "instagram",
    },
    {
      link: "https://rss.app/",
      iconName: "rss",
    },
  ];

  return (
    <Modal
      wrapClassName="product-box"
      fade
      centered
      size="xl"
      isOpen={open}
      toggle={onCloseModal}
    >
      <div className="modal-header" onClick={onCloseModal}>
        {singleProduct.name}
        <Btn className="py-0" close></Btn>
      </div>
      <div className="modal-body bg-light">
        <Row className="product-box">
          <Col lg="4" sm="12">
            <ProductDetails />
          </Col>
          <Col>
            <Card>
              <CardBody>
                <div className="product-page-details">
                  <H3>{singleProduct.name}</H3>
                </div>
                <div className="product-price">
                  $26.00
                  <del>$350.00 </del>
                </div>
                <UL className="product-color flex-row">
                  <LI className="bg-primary" />
                  <LI className="bg-secondary" />
                  <LI className="bg-success" />
                  <LI className="bg-info" />
                  <LI className="bg-warning" />
                </UL>
                <hr />
                <P>
                  {
                    "Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve."
                  }
                </P>
                <hr />
                <div>
                  <Table className="product-page-width">
                    <tbody>
                      <tr>
                        <td>
                          <b>Brand :</b>
                        </td>
                        <td>Pixelstrap</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Availability : </b>
                        </td>
                        <td className="txt-success">In stock</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Seller : </b>
                        </td>
                        <td>ABC</td>
                      </tr>
                      <tr>
                        <td>
                          <b>Fabric : </b>
                        </td>
                        <td>Cotton</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                <hr />
                <Row>
                  <Col md="4">
                    <H4 className="product-title">{`ShareIt`}</H4>
                  </Col>
                  <Col md="8">
                    <div className="product-icon">
                      <UL className="product-social simple-list flex-row justify-content-center">
                        {productSocial.map((data, index) => (
                          <LI className="d-inline-block" key={index}>
                            <Link to={data.link} target="_blank">
                              <i className={`fa fa-${data.iconName}`} />
                            </Link>
                          </LI>
                        ))}
                      </UL>
                    </div>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col md="4">
                    <H4 className="product-title f-w-600">{`RateNow`}</H4>
                  </Col>
                  <Col md="8">
                    <div className="d-flex">
                      <div className="rating">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                      </div>
                      <span>(250 review)</span>
                    </div>
                  </Col>
                </Row>
                <div className="m-t-15 btn-showcase">
                  <Btn
                    color="primary"
                    href={`${process.env.PUBLIC_URL}/ecommerce/cart`}
                  >
                    <i className="fa fa-shopping-basket me-1" />
                    {`AddToCart`}
                  </Btn>
                  <Btn
                    color="success"
                    href={`${process.env.PUBLIC_URL}/ecommerce/checkout`}
                  >
                    <i className="fa fa-shopping-cart me-1" />
                    {`BuyNow`}
                  </Btn>
                  <Btn
                    color="secondary"
                    href={`${process.env.PUBLIC_URL}/ecommerce/wishlist`}
                  >
                    <i className="fa fa-heart me-1" />
                    {`AddToWishList`}
                  </Btn>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xxl="3" md="6" className="box-col-6">
            <Card>
              <CardBody>
                <div className="filter-block">
                  <H3>{`Brand`}</H3>
                  <UL className="simple-list">
                    {brandDetailsData.map((data, i) => (
                      <LI key={i}>{data}</LI>
                    ))}
                  </UL>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                <div className="collection-filter-block">
                  <UL className="pro-services simple-list">
                    {servicesData.map((data, index) => (
                      <LI key={index}>
                        <div className="d-flex">
                          <FeatherIcons iconName={data.icon} />
                          <div className="flex-grow-1">
                            <H5>{data.title} </H5>
                            <P>{data.subtitle}</P>
                          </div>
                        </div>
                      </LI>
                    ))}
                  </UL>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="product-box">
          <Col sm="12">
            <Nav tabs className="border-tab mb-0 nav-primary">
              {clothsDetailsData.map((data, index) => (
                <NavItem key={index}>
                  <NavLink
                    href={Href}
                    className={activeTab === index + 1 ? "active" : ""}
                    onClick={() => setActiveTab(index + 1)}
                  >
                    {data}
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
            <TabContent activeTab={activeTab}>
              <TabPane tabId={1}>
                <P className="mb-0 m-t-20 text-dark">
                  {
                    "Refresh your wardrobe with this chic top. With an eye-catching square neck, this top also features pretty puff sleeves. Stunning pink color Classic solid pattern Square neck Elasticated puff sleeves Belt included, Polyester fabric, machine wash.."
                  }
                </P>
                <P className="mb-0 text-dark">
                  {
                    "Tee Stores is an Indian contemporary clothing brand. The product pages display a fine quality fabric with colorful description. We offer many vivid designs, art, styles that combine heritage with modernity, simplicity, playfulness and street style"
                  }
                </P>
              </TabPane>
              <TabPane tabId={2}>
                <P className="mb-0 m-t-20 text-dark">
                  {
                    "Lorate Solid Men's Fashion Full Sleeves Latest Jacket for Men With "
                  }
                </P>
                <P className="mb-0 text-dark">
                  {"Button Closure Long Sleeve Casual Torn Lycra Denim Jacket."}
                </P>
              </TabPane>
              <TabPane tabId={3}>
                <P className="mb-0 m-t-20 text-dark">
                  {" "}
                  {
                    "Rock Paper Scissors Various Dots Half Sleeves Girl’s Regular Fit"
                  }
                </P>
                <P className="mb-0 text-dark">
                  {
                    " T-Shirt I 100% Cotton T Shirt with Half Sleeve Round Neck I Regular Wear Solid Kids Tees and Black Sleeve."
                  }
                </P>
              </TabPane>
              <TabPane tabId={4}>
                <P className="mb-0 m-t-20 text-dark">
                  {"Product Dimensions : 18 x 18 x 4 cm"}
                </P>
                <P className="mb-0 text-dark">
                  {"Date First Available : 31 March 2024"}
                </P>
                <P className="mb-0 text-dark">{"Manufacturer : Tee Stores"}</P>
                <P className="mb-0 text-dark">
                  {"Item part number : TS-WT721-XS-WHITE"}
                </P>
              </TabPane>
            </TabContent>
          </Col>
        </Row>
      </div>
    </Modal>
  );
};

export default ProductModal;
