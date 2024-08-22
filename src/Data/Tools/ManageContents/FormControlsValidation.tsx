import * as Yup from "yup";
import { RequiredFieldValidationText } from "../../../utils/Constant";
/* Start -- Manage Album Form */
export interface ManageAlbumFormValidationProp {
  albumName: string;
}

export const manageAlbumFormInitialValue: ManageAlbumFormValidationProp = {
  albumName: "",
};

export const manageAlbumFormValidationSchema = Yup.object().shape({
  albumName: Yup.string().required(RequiredFieldValidationText),
});

/* End -- Manage Album Form */
