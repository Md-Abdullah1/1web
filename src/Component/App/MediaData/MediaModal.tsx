import { useState } from "react";
import { Card, CardBody, Col, Modal, Row } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { Carousel } from "react-responsive-carousel";

export interface MediaModalInterface {
    value: boolean;
    setOpenModal: (value: boolean) => void;
    dataId: undefined | number;
}

const MediaModal = ({value , setOpenModal , dataId}:MediaModalInterface) => {
    const [open, setOpen] = useState(value);
    const onCloseModal = () => {
        setOpen(false);
        setOpenModal(false);
    };
    return (
        <Modal wrapClassName='product-box'  fade centered size="xl" isOpen={open} toggle={onCloseModal}>
            <div className='modal-header' onClick={onCloseModal}>
                {`Media Name`}
                <Btn className="py-0" close></Btn>
            </div>
            <div className='modal-body bg-light'>
                <Row className="product-box">
                    <Col lg="4" sm="12">
                        <Card>
                            <CardBody>
                            <Carousel
                                className="owl-carousel owl-theme"
                                showStatus={false}
                                showIndicators={false}
                                showArrows={true}
                                swipeable={true}
                                autoPlay={true}
                                infiniteLoop={true}
                                showThumbs={true}
                            >
                                <div className="item">
                                <img src="../assets/images/ecommerce/01.jpg" alt="" />
                                </div>
                                <div className="item">
                                <img src="../assets/images/ecommerce/02.jpg" alt=""/>
                                </div>
                                <div className="item">
                                <img src="../assets/images/ecommerce/03.jpg" alt=""/>
                                </div>
                                <div className="item">
                                <img src="../assets/images/ecommerce/04.jpg" alt=""/>
                                </div>
                                <div className="item">
                                <img src="../assets/images/ecommerce/05.jpg" alt=""/>
                                </div>
                                <div className="item">
                                <img src="../assets/images/ecommerce/06.jpg" alt=""/>
                                </div>
                                <div className="item">
                                <img src="../assets/images/ecommerce/07.jpg" alt=""/>
                                </div>
                                <div className="item">
                                <img src="../assets/images/ecommerce/08.jpg" alt=""/>
                                </div>
                            </Carousel>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </div>
        </Modal>
    )
}

export default MediaModal