import * as Yup from "yup";

/* Start -- Start C-Chat Form */
export interface StartCChatFormValidationProp {
  converstionType: string;
  subject: string;
  to: string;
  from: string;
  converstionDescription: string;
  keyword: string;
}

export const startCChatFormInitialValue: StartCChatFormValidationProp = {
  converstionType: "",
  subject: "",
  to: "",
  from: "",
  converstionDescription: "",
  keyword: "",
};

export const startCChatFormValidationSchema = Yup.object().shape({
  converstionType: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  to: Yup.string().required("Required"),
  from: Yup.string().required("Required"),
  converstionDescription: Yup.string().required("Required"),
  keyword: Yup.string().required("Required"),
});
/* End -- Start C-Chat Form */

/* Start -- Invite A Contact Form */
export interface InviteAContactFormValidationProp {
  userName: string;
  invitationMessage: string;
}

export const inviteAContactFormInitialValue: InviteAContactFormValidationProp =
  {
    userName: "",
    invitationMessage: "",
  };

export const inviteAContactFormValidationSchema = Yup.object().shape({
  userName: Yup.string().required("Required"),
  invitationMessage: Yup.string().required("Required"),
});
/* End -- Invite A Contact Form */

/* Start -- Group Form */
export interface GroupFormValidationProp {
  groupName: string;
  groupDescription: string;
  members: string;
}

export const groupFormInitialValue: GroupFormValidationProp = {
  groupName: "",
  groupDescription: "",
  members: "",
};

export const groupFormValidationSchema = Yup.object().shape({
  groupName: Yup.string().required("Required"),
  groupDescription: Yup.string().required("Required"),
  members: Yup.string().required("Required"),
});
/* End -- Group Form */

/* Start -- Group Member Form */
export interface GroupMemberFormValidationProp {
  group: string;
  members: string;
}

export const groupMemberFormInitialValue: GroupMemberFormValidationProp = {
  group: "",
  members: "",
};

export const groupMemberFormValidationSchema = Yup.object().shape({
  group: Yup.string().required("Required"),
  members: Yup.string().required("Required"),
});
/* End -- Group Member  Form */
