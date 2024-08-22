import { ProductItemInterface } from "../../Types/Application/Ecommerce/Product";

export interface HoverButtonsProp {
    item: ProductItemInterface;
    setDataId: (id: number) => void;
    setOpenModal: (key: boolean) => void;
  }