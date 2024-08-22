import { createSlice } from "@reduxjs/toolkit";
import { InitialStateType } from "../../Types/Application/Email/LetterBox/LetterBox";
import { inboxEmailData } from "../../Data/Application/Email/LetterBox/LetterBox";

const initialState: InitialStateType = {
  navId: "inboxPillTab",
  modal: false,
  composeEmail: false,
  interviewEmail: false,
  page: false,
  inboxEmail: [...inboxEmailData],
  emailValidation: false,
  emailOpen: [],
  searchWord: "",
  starredValue : []
};

const LetterBoxSlice = createSlice({
  name: "LetterBox",
  initialState,
  reducers: {
    setNavId: (state, action) => {
      state.navId = action.payload;
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    },
    setComposeEmail: (state, action) => {
      state.composeEmail = action.payload;
    },
    setSearchWord: (state, action) => {
        state.searchWord = action.payload;
        if (!state.searchWord) {
          state.inboxEmail = inboxEmailData;
        }else{
          state.inboxEmail = state.inboxEmail?.filter((data) => data.name.toLocaleLowerCase().includes(action.payload));
        } 
    },
    handleEnvelope: (state, action) => {
      if (state.emailOpen?.includes(action.payload)) {
        let filterMenu = state.emailOpen?.filter(
          (item: any) => item !== action.payload
        );
        state.emailOpen = filterMenu;
      } else {
        state.emailOpen = [...state.emailOpen, action.payload];
      }
    },
    handleInterview: (state, action) => {
      state.interviewEmail = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
    removeItems: (state, action) => {
      state.inboxEmail = state.inboxEmail?.filter(
        (data) => data.id !== action.payload
      );
    },
    addToFavorites: (state, action) => {
      if (action.payload.star === false) {
        state.inboxEmail = state.inboxEmail.map((item) =>
          item.id === action.payload.id ? { ...item, star: true } : item
        );
        state.starredValue = state.inboxEmail;
      } else {
        state.inboxEmail = state.inboxEmail.map((item) =>
          item.id === action.payload.id ? { ...item, star: false } : item
        );
        state.starredValue = state.inboxEmail;
      }
    },
    removeFromFavorite: (state, action) => {
      state.inboxEmail = state.starredValue.map((data) =>
        data.id === action.payload.id ? { ...data, star: false } : data
      );
      state.starredValue = state.inboxEmail;
    },
    setEmailValidation: (state, action) => {
      state.emailValidation = action.payload;
    },
    addNewEmail: (state, action) => {
      const emailTemp = {
        id: state.inboxEmail.length + 1,
        star: false,
        image: "14.png",
        color: "primary",
        name: action.payload.userEmail,
        message: action.payload.subject,
        subMessage:
          "craft beer labore wes anderson cred nesciunt sapiente ea proident...",
        time: "7:50 AM",
      };
      state.inboxEmail = [...state.inboxEmail, emailTemp];
    },
}});

export const {
  setNavId,
  setModal,
  setComposeEmail,
  handleEnvelope,
  handleInterview,
  setPage,
  removeItems,
  addToFavorites,
  removeFromFavorite,
  setEmailValidation,
  addNewEmail,
  setSearchWord,
} = LetterBoxSlice.actions;

export default LetterBoxSlice.reducer;
