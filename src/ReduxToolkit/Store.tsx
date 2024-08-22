import { configureStore } from "@reduxjs/toolkit";
import LayoutSlice from "./Reducers/LayoutSlice";
import BookmarkHeaderSlice from "./Reducers/BookmarkHeaderSlice";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";
import TwoFactorSlice from "./Reducers/TwoFactorSlice";
import FormWizardTwoSlice from "./Reducers/FormWizardTwoSlice";
import VerticalWizardSlice from "./Reducers/VerticalWizardSlice";
import StudentWizardSlice from "./Reducers/StudentWizardSlice";
import NumberingWizardSlice from "./Reducers/NumberingWizardSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import ToDoSlice from "./Reducers/ToDoSlice";
import TasksSlice from "./Reducers/TasksSlice";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import ContactSlice from "./Reducers/ContactSlice";
import ChatSlice from "./Reducers/ChatSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import ProductSlice from "./Reducers/ProductSlice";
import AddProductSlice from "./Reducers/AddProductSlice";
import FilterSlice from "./Reducers/FilterSlice";
import CartSlice from "./Reducers/CartSlice";
import CountrySlice from "./CountryReducer/CountrySlice";
import { apiSlice } from "./ApiSlice";
import { registrationApiSlice } from "./RegistrationReducer/RegistrationApiSlice";
import { tempApiSlice } from "./TempApiSlice";
import { registrationTypeApi } from "./RegistrationReducer/RegistrationTypeApi";
import RegistrationTypeSlice from "./Reducers/RegistrationTypeSlice";

const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    bookmarkHeader:BookmarkHeaderSlice,
    themeCustomizer: ThemeCustomizerSlice,
    twoFactor: TwoFactorSlice,
    formWizardTwo:FormWizardTwoSlice,
    verticalWizard: VerticalWizardSlice,
    studentWizard: StudentWizardSlice,
    numberingWizard: NumberingWizardSlice,
    project:ProjectSlice,
    todo:ToDoSlice,
    tasks:TasksSlice,
    bookmarkTab:BookmarkTabSlice,
    contact:ContactSlice,
    chat:ChatSlice,
    letterBox:LetterBoxSlice,
    product:ProductSlice,
    country:CountrySlice,
    registrationTypes:RegistrationTypeSlice,
    addProduct:AddProductSlice,
    filterData: FilterSlice,
    cartData: CartSlice,
    registrationPlanData: registrationApiSlice.reducer,
    [tempApiSlice.reducerPath]:tempApiSlice.reducer,
    [registrationTypeApi.reducerPath]:registrationTypeApi.reducer,
  },

  middleware:(getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false,}).concat(apiSlice.middleware),
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
