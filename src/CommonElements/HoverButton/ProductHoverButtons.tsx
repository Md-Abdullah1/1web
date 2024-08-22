import { Link } from "react-router-dom";
import { LI, UL } from "../../AbstractElements";
import { Href } from "../../utils/Constant";
import { HoverButtonsProp } from "./HoverButtonProp";





const ProductHoverButtons = ({item, setDataId, setOpenModal}:HoverButtonsProp) => {
    const AddToCarts = () =>{}
    const onClickHandle = () => {
        setOpenModal(true);
        setDataId(item.id);
    }
    return (
        <div className="product-hover">
        <UL className="simple-list flex-row">
            <LI>
            <Link
                onClick={() => AddToCarts()}
                to={`${process.env.PUBLIC_URL}/ecommerce/cart`}
            >
                <i className="icon-shopping-cart"></i>
            </Link>
            </LI>
            <LI>
            <Link onClick={() => onClickHandle()} to={Href}>
                <i className="icon-eye"></i>
            </Link>
            </LI>
        </UL>
        </div> 
    )
}

export default ProductHoverButtons