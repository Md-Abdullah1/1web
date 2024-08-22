import * as Yup from "yup";
import {
  RequiredFieldValidationText,
  EmailFieldValidationText,
  PhoneNumberFieldValidationText,
  NumbersFieldValidationText,
  URLFieldValidationText,
} from "../../../utils/Constant";
const onlyNumber = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

/* Start -- Manage Branch Form */
export interface ManageBranchFormValidationProp {
  branchname: string;
  fulladdress: string;
  branchcountry: string;
  branchcity: string;
  latitude: string;
  longitude: string;
  notificationtone: string;
  hoursday: boolean;
}

export const manageBranchFormInitialValue: ManageBranchFormValidationProp = {
  branchname: "",
  fulladdress: "",
  branchcountry: "",
  branchcity: "",
  latitude: "",
  longitude: "",
  notificationtone: "",
  hoursday: true,
};

export const manageBranchFormValidationSchema = Yup.object().shape({
  branchname: Yup.string().required(RequiredFieldValidationText),
  fulladdress: Yup.string().required(RequiredFieldValidationText),
  branchcountry: Yup.string().required(RequiredFieldValidationText),
  branchcity: Yup.string().required(RequiredFieldValidationText),
  latitude: Yup.string().required(RequiredFieldValidationText),
  longitude: Yup.string().required(RequiredFieldValidationText),
  notificationtone: Yup.string().required(RequiredFieldValidationText),
  hoursday: Yup.string().required(),
});

/* End -- Manage Branch Form */

/* Start -- Branch Public Contact Form */

export const phoneValue = {
  phone: "",
};

export const emailValue = {
  email: "",
};

export interface BranchPublicContactFormValidationProp {
  country: any;
  city: any;
  branches: any;
  phones: Array<any>;
  emails: Array<any>;
}

export const branchPublicContactFormInitialValue: BranchPublicContactFormValidationProp =
  {
    country: "",
    city: "",
    branches: "",
    phones: [phoneValue],
    emails: [emailValue],
  };

export const branchPublicContactFormValidationSchema = Yup.object().shape({
  country: Yup.array().min(1).required(RequiredFieldValidationText),
  city: Yup.array().min(1).required(RequiredFieldValidationText),
  branches: Yup.array().min(1).required(RequiredFieldValidationText),
  phones: Yup.array().of(
    Yup.object().shape({
      phone: Yup.number().typeError(PhoneNumberFieldValidationText),
    })
  ),
  emails: Yup.array().of(
    Yup.object().shape({
      email: Yup.string().optional().email(EmailFieldValidationText),
    })
  ),
});

/* End -- Branch Public Contact Form */


/* Start -- Coupon Form */

export const orderLimit = {
  minOrderTotal: "",
  maxOrderTotal: "",
  fixAmountDiscount: "",
};

export interface CouponFormValidationProp {
  couponName: string;
  couponCode: string;
  discountType: string;
  startDate: string;
  activationCondition: string;
  currency: string;
  orderlimits: Array<any>;
}

export const couponFormInitialValue: CouponFormValidationProp = {
  couponName: "",
  couponCode: "",
  discountType: "",
  startDate: "",
  activationCondition: "",
  currency: "",
  orderlimits: [orderLimit],
};

export const couponFormValidationSchema = Yup.object().shape({
  couponName: Yup.string().required(RequiredFieldValidationText),
  couponCode: Yup.string().required(RequiredFieldValidationText),
  discountType: Yup.string().required(RequiredFieldValidationText),
  startDate: Yup.string().required(RequiredFieldValidationText),
  activationCondition: Yup.string().required(RequiredFieldValidationText),
  currency: Yup.string().required(RequiredFieldValidationText),
  orderlimits: Yup.array().of(
    Yup.object().shape({
      minOrderTotal: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
      maxOrderTotal: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
      fixAmountDiscount: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
    })
  ),
});

/* End -- Coupon Form */

/* Start -- Delivery Fees Form */
export interface DeliveryFeesFormValidationProp {
  country: string;
  city: string;
  branch: any;
  deliveryGuysEarningFrom: string;
  minDeliveryFee: string;
  feePerDistance: string;
  feePerWeight: string;
  maxDistanceToDeliverTo: string;
  maxDeliveryWeightPerOrder: string;
  commissionRateToDeliveryWork: string;
  tipAmount: string;
  tipPercentage: string;
  deliveryWorkersTipShare: string;
}

export const deliveryFeesFormInitialValue: DeliveryFeesFormValidationProp = {
  country: "",
  city: "",
  branch: "",
  deliveryGuysEarningFrom: "",
  minDeliveryFee: "",
  feePerDistance: "",
  feePerWeight: "",
  maxDistanceToDeliverTo: "",
  maxDeliveryWeightPerOrder: "",
  commissionRateToDeliveryWork: "",
  tipAmount: "",
  tipPercentage: "",
  deliveryWorkersTipShare: "",
};

export const deliveryFeesFormValidationSchema = Yup.object().shape({
  country: Yup.string().required(RequiredFieldValidationText),
  city: Yup.string().required(RequiredFieldValidationText),
  branch: Yup.array().min(1).required(RequiredFieldValidationText),
  deliveryGuysEarningFrom: Yup.string().required(RequiredFieldValidationText),
  minDeliveryFee: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  feePerDistance: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  feePerWeight: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  maxDistanceToDeliverTo: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  maxDeliveryWeightPerOrder: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  commissionRateToDeliveryWork: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  tipAmount: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  tipPercentage: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  deliveryWorkersTipShare: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
});

/* End -- Delivery Fees Form */

/* Start -- Delivery Workers Form */
export interface DeliveryWorkerFormValidationProp {
  deliveryWorkerUsername: string;
  confirmUserEmail: string;
  vehicleTypes: string;
  country: string;
  city: string;
}

export const deliveryWorkerFormInitialValue: DeliveryWorkerFormValidationProp =
  {
    deliveryWorkerUsername: "",
    confirmUserEmail: "",
    vehicleTypes: "",
    country: "",
    city: "",
  };

export const deliveryWorkerFormValidationSchema = Yup.object().shape({
  deliveryWorkerUsername: Yup.string().required(RequiredFieldValidationText),
  confirmUserEmail: Yup.string()
    .email(EmailFieldValidationText)
    .required(RequiredFieldValidationText),
  vehicleTypes: Yup.string().required(RequiredFieldValidationText),
  country: Yup.string().required(RequiredFieldValidationText),
  city: Yup.string().required(RequiredFieldValidationText),
});

/* End -- Delivery Workers Form */

/* Start -- Addon Categories Form */

export const addonValues = {
  addOnOption: "",
  addOnExtraPrice: "",
  addOnQuantity: "",
};
export interface AddonCategoriesFormValidationProp {
  country: string;
  branch: string;
  products: string;
  addonCategory: string;
  requiredSelection: string;
  multipleSelection: string;
  addons: Array<any>;
}

export const addonCategoriesFormInitialValue: AddonCategoriesFormValidationProp =
  {
    country: "",
    branch: "",
    products: "",
    addonCategory: "",
    requiredSelection: "",
    multipleSelection: "",
    addons: [addonValues],
  };

export const addonCategoriesFormValidationSchema = Yup.object().shape({
  country: Yup.string().required(RequiredFieldValidationText),
  branch: Yup.string().required(RequiredFieldValidationText),
  products: Yup.string().required(RequiredFieldValidationText),
  addonCategory: Yup.string().required(RequiredFieldValidationText),
  requiredSelection: Yup.string().required(RequiredFieldValidationText),
  multipleSelection: Yup.string().required(RequiredFieldValidationText),
  addons: Yup.array().of(
    Yup.object().shape({
      addOnOption: Yup.string().required(RequiredFieldValidationText),
      addOnExtraPrice: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
      addOnQuantity: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
    })
  ),
});

/* End -- Addon Categories Form */

/* Start -- Schedule Form */

export const timeSlotValues = {
  openingTime: "",
  closingTime: "",
};

export interface SchedulesFormValidationProp {
  country: string;
  finalBranchList: string;
  monday: Array<any>;
  tuesday: Array<any>;
  wednesday: Array<any>;
  thursday: Array<any>;
  friday: Array<any>;
  saturday: Array<any>;
  sunday: Array<any>;
}

export const scheduleFormInitialValue: SchedulesFormValidationProp = {
  country: "",
  finalBranchList: "",
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

export const scheduleFormValidationSchema = Yup.object().shape({
  country: Yup.string().required(RequiredFieldValidationText),
  finalBranchList: Yup.string().required(RequiredFieldValidationText),
  monday: Yup.array().of(
    Yup.object().shape({
      openingTime: Yup.string().required(RequiredFieldValidationText),
      closingTime: Yup.string().required(RequiredFieldValidationText),
    })
  ),
  tuesday: Yup.array().of(
    Yup.object().shape({
      openingTime: Yup.string().required(RequiredFieldValidationText),
      closingTime: Yup.string().required(RequiredFieldValidationText),
    })
  ),
  wednesday: Yup.array().of(
    Yup.object().shape({
      openingTime: Yup.string().required(RequiredFieldValidationText),
      closingTime: Yup.string().required(RequiredFieldValidationText),
    })
  ),
  thursday: Yup.array().of(
    Yup.object().shape({
      openingTime: Yup.string().required(RequiredFieldValidationText),
      closingTime: Yup.string().required(RequiredFieldValidationText),
    })
  ),
  friday: Yup.array().of(
    Yup.object().shape({
      openingTime: Yup.string().required(RequiredFieldValidationText),
      closingTime: Yup.string().required(RequiredFieldValidationText),
    })
  ),
  saturday: Yup.array().of(
    Yup.object().shape({
      openingTime: Yup.string().required(RequiredFieldValidationText),
      closingTime: Yup.string().required(RequiredFieldValidationText),
    })
  ),
  sunday: Yup.array().of(
    Yup.object().shape({
      openingTime: Yup.string().required(RequiredFieldValidationText),
      closingTime: Yup.string().required(RequiredFieldValidationText),
    })
  ),
});

/* End -- Schedule Form */
