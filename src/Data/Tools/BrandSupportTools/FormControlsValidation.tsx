import * as Yup from "yup";
import {
  RequiredFieldValidationText,
  URLFieldValidationText,
  NumbersFieldValidationText,
} from "../../../utils/Constant";
const onlyNumber = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

/* Start -- Branch Public Contact Form */
export interface ManageExternalLinkFormValidationProp {
  title: string;
  description: string;
  externallink: string;
}

export const manageExternalLinkFormInitialValue: ManageExternalLinkFormValidationProp =
  { title: "", description: "", externallink: "" };

export const manageExternalLinkFormValidationSchema = Yup.object().shape({
  title: Yup.string().required(RequiredFieldValidationText),
  description: Yup.string().required(RequiredFieldValidationText),
  externallink: Yup.string()
    .url(URLFieldValidationText)
    .required(RequiredFieldValidationText),
});
/* End -- Manage Branch Form */

/* Start -- Branch Public Contact Form */
export interface StudyMaterialLessonFormValidationProp {
  subcategory: string;
  specialParameter: string;
  title: string;
  materialText: string;
  dateHours: string;
  url: string;
}

export const studyMaterialLessonFormInitialValue: StudyMaterialLessonFormValidationProp =
  {
    subcategory: "",
    specialParameter: "",
    title: "",
    materialText: "",
    dateHours: "",
    url: "",
  };

export const studyMaterialLessonFormValidationSchema = Yup.object().shape({
  subcategory: Yup.string().required(RequiredFieldValidationText),
  specialParameter: Yup.string().required(RequiredFieldValidationText),
  title: Yup.string().required(RequiredFieldValidationText),
  materialText: Yup.string().required(RequiredFieldValidationText),
  dateHours: Yup.string().required(RequiredFieldValidationText),
  url: Yup.string().optional().url(URLFieldValidationText),
});
/* End -- Manage Branch Form */

/* Start -- Quiz Material Form */

export interface QuizMaterialFormValidationProp {
  subcategory: string;
  title: string;
  materialText: string;
}

export const quizMaterialFormInitialValue: QuizMaterialFormValidationProp = {
  subcategory: "",
  title: "",
  materialText: "",
};

export const quizMaterialLessonFormValidationSchema = Yup.object().shape({
  subcategory: Yup.string().required(RequiredFieldValidationText),
  title: Yup.string().required(RequiredFieldValidationText),
  materialText: Yup.string().required(RequiredFieldValidationText),
});

/* End -- Quiz Material Form */

/* Start -- Questions Form */

export interface QuestionFormValidationProp {
  subcategory: string;
  questionText: string;
  durationInMinutes: string;
  pointGrade: string;
  obligationQuestion: boolean;
  answerInput: string;
}

export const questionFormInitialValue: QuestionFormValidationProp = {
  subcategory: "",
  questionText: "",
  durationInMinutes: "",
  pointGrade: "",
  obligationQuestion: false,
  answerInput: "",
};

export const questionFormValidationSchema = Yup.object().shape({
  subcategory: Yup.string().required(RequiredFieldValidationText),
  questionText: Yup.string().required(RequiredFieldValidationText),
  durationInMinutes: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  pointGrade: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  obligationQuestion: Yup.string().required(RequiredFieldValidationText),
  answerInput: Yup.string().required(RequiredFieldValidationText),
});

/* End -- Questions Form */

/* Start -- Survey and Quizzes Form */

export interface SurveyAndQuizzesFormValidationProp {
  formType: string;
  specialParameters: string;
  quizMaterial: string;
  title: string;
  description: string;
  recipientType: string;
  timezone: string;
  questionsCount: string;
  showFinalScore: string;
  allowRetaking: string;
  dateHours: string;
  playerType: string;
}

export const surveyAndQuizzesFormInitialValue: SurveyAndQuizzesFormValidationProp =
  {
    formType: "1",
    specialParameters: "",
    quizMaterial: "",
    title: "",
    description: "",
    recipientType: "Any",
    timezone: "",
    questionsCount: "",
    showFinalScore: "",
    allowRetaking: "",
    dateHours: "",
    playerType: "",
  };

export const surveyAndQuizzesFormValidationSchema = Yup.object().shape({
  formType: Yup.string().required(RequiredFieldValidationText),
  specialParameters: Yup.string().required(RequiredFieldValidationText),
  quizMaterial: Yup.string().required(RequiredFieldValidationText),
  title: Yup.string().required(RequiredFieldValidationText),
  description: Yup.string().required(RequiredFieldValidationText),
  recipientType: Yup.string().required(RequiredFieldValidationText),
  timezone: Yup.string().required(RequiredFieldValidationText),
  questionsCount: Yup.string().required(RequiredFieldValidationText),
  showFinalScore: Yup.string().required(RequiredFieldValidationText),
  allowRetaking: Yup.string().required(RequiredFieldValidationText),
  dateHours: Yup.string().required(RequiredFieldValidationText),
  playerType: Yup.string().required(RequiredFieldValidationText),
});

/* End -- Survey and Quizzes Form */

/* Start -- Attendance System Add new event form */

export interface AttendanceFormValidationProp {
  referenceid: string;
  activitytype: string;
  activitytitle: string;
  description: string;
  activitylocation: boolean;
  country: Array<String>;
  state: Array<String>;
  city: Array<String>;
  fulladdress: string;
  category: string;
  keywords: Array<string>;
  duration: string;
  instructions:string;
  startdates: Date;
  expirydate: Date;
  leavingactivity:boolean;
  breakinactivity:boolean;
  publicactivity:string;
  latearrival:number;
  supervisorconfirm:boolean;
  supervisorname:string;
  manualcheck:boolean;
  inviteusers:Array<string>;
  image:File | null;
  activityschedule: Array<any>;
  // offline: boolean;
  // online: boolean;
  meetingurl: string;
  phonenumber: string;
  meetingplatform: string;
  activityfrequency:boolean;
  multidate:string;
}



export const AddAttendanceNewEventInitialValues: AttendanceFormValidationProp =
  {
    referenceid: "",
    activitytype: "",
    activitytitle: "",
    description: "",
    activitylocation: false,
    country: [],
    state: [],
    city: [],
    fulladdress: "",
    category: "",
    keywords: [],
    duration: '',
    instructions:"",
    startdates: new Date(),
    expirydate: new Date(),
    leavingactivity:true,
    breakinactivity:true,
    publicactivity:'',
    latearrival:10,
    supervisorconfirm:true,
    supervisorname:'',
    manualcheck:true,
    inviteusers:[],
    image:null,
    activityschedule: [],
    // offline: false,
    // online: false,
    meetingurl: "",
    phonenumber: "",
    meetingplatform: "",
    activityfrequency:false,
    multidate:"",
  };

export const AttendanceNewEventFormValidationSchema = Yup.object().shape({
  // genereal fields
  referenceid: Yup.string().required(RequiredFieldValidationText),
  activitytype: Yup.string().required(RequiredFieldValidationText),
  activitytitle: Yup.string().required(RequiredFieldValidationText),
  description: Yup.string().required(RequiredFieldValidationText),
  category: Yup.string().required(RequiredFieldValidationText),
  keywords: Yup.array(),
  duration: Yup.string(),
  image:Yup.mixed().nullable(),
  publicactivity: Yup.string(),
  
  // requirements and instruction fields
  instructions: Yup.string(),
  leavingactivity:Yup.boolean().required(RequiredFieldValidationText),
  breakinactivity:Yup.boolean(),
 
//  management feilds
latearrival:Yup.number(),
supervisorconfirm:Yup.boolean(),
supervisorname:Yup.string(),
manualcheck:Yup.boolean(),
inviteusers:Yup.array(),

// location realted fields
  activitylocation: Yup.boolean().when("activitytype", {
    is: "appointment",
    then: (schema) => schema.required(RequiredFieldValidationText),
    otherwise: (schema) => schema.notRequired(),
  }),
  country: Yup.array().when(["activitytype", "activitylocation"], {
    is: (activitytype: string, activitylocation: boolean) =>
      activitytype !== "appointment" ||
      (activitytype === "appointment" && activitylocation === true),
    then: (schema) =>
      schema.min(1, RequiredFieldValidationText).required(RequiredFieldValidationText),
    otherwise: (schema) => schema.notRequired(),
  }),
  state: Yup.array().notRequired(),
  city: Yup.array().when(["activitytype", "activitylocation"], {
    is: (activitytype: string, activitylocation: boolean) =>
      activitytype !== "appointment" ||
      (activitytype === "appointment" && activitylocation === true),
    then: (schema) =>
      schema.min(1, RequiredFieldValidationText).required(RequiredFieldValidationText),
    otherwise: (schema) => schema.notRequired(),
  }),
  fulladdress: Yup.string().when(["activitytype", "activitylocation"], {
    is: (activitytype: string, activitylocation: boolean) =>
      activitytype !== "appointment" ||
      (activitytype === "appointment" && activitylocation === true),
    then: (schema) => schema.required(RequiredFieldValidationText),
    otherwise: (schema) => schema.notRequired(),
  }),
  meetingurl: Yup.string().url(URLFieldValidationText),
  phonenumber: Yup.string(),
  meetingplatform: Yup.string(),

// Dates and Time feilds
activityfrequency:Yup.boolean().required(RequiredFieldValidationText),
   startdates: Yup.date(),
  expirydate: Yup.date(),
   activityschedule: Yup.array(),
   multidate:Yup.string(),
  
  
   // offline: Yup.boolean().when("activitytype", {
  //   is: "appointment",
  //   then: (schema) => schema.required(RequiredFieldValidationText),
  //   otherwise: (schema) => schema.notRequired(),
  // }),
  // online: Yup.boolean().when("activitytype", {
  //   is: "appointment",
  //   then: (schema) => schema.required(RequiredFieldValidationText),
  //   otherwise: (schema) => schema.notRequired(),
  // }),
});
/* End -- Attendance System Add new event form */


/* Start -- Special Parameters Form */
export interface SpecialParametersFormValidationProp {
  title: string;
}

export const specialParametersFormInitialValue: SpecialParametersFormValidationProp =
  {
    title: "",
  };

export const specialParametersFormValidationSchema = Yup.object().shape({
  title: Yup.string().required(RequiredFieldValidationText),
});

/* End -- Survey and Quizzes Form */

/* Start -- Photo Contest Form */
export interface PhotoContestsFormValidationProp {
  photoContestTitle: string;
  description: string;
  image: string;
  submissionStartDate: string;
  submissionEndDate: string;
  photoContestEndDate: string;
  minNumberOfFiles: string;
  maxNumberOfFiles: string;
  mediaType: string;
  minSharesPerContent: string;
  minLikesPerContent: string;
  minVotesPerContent: string;
  mediaCenter: string;
  onlineStore: string;
  prizes: Array<any>;
}

export const prizesValue = {
  rank: "",
  prizeName: "",
  prizeImage: "",
  prizeDescription: "",
  prizeValueInUsd: "",
  numberOfPrize: "",
  numberOfShares: "",
  numberOfLikes: "",
  numberOfVotes: "",
  excatNumber: "",
};

export const photoContestsFormInitialValue: PhotoContestsFormValidationProp = {
  photoContestTitle: "",
  description: "",
  image: "",
  submissionStartDate: "",
  submissionEndDate: "",
  photoContestEndDate: "",
  minNumberOfFiles: "",
  maxNumberOfFiles: "",
  mediaType: "",
  minSharesPerContent: "",
  minLikesPerContent: "",
  minVotesPerContent: "",
  mediaCenter: "",
  onlineStore: "",
  prizes: [prizesValue],
};

export const photoContestsFormValidationSchema = Yup.object().shape({
  photoContestTitle: Yup.string().required(RequiredFieldValidationText),
  description: Yup.string().required(RequiredFieldValidationText),
  image: Yup.string().required(RequiredFieldValidationText),
  submissionStartDate: Yup.string().required(RequiredFieldValidationText),
  submissionEndDate: Yup.string().required(RequiredFieldValidationText),
  photoContestEndDate: Yup.string().required(RequiredFieldValidationText),
  minNumberOfFiles: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  maxNumberOfFiles: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  mediaType: Yup.string().required(RequiredFieldValidationText),
  minSharesPerContent: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  minLikesPerContent: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  minVotesPerContent: Yup.string()
    .required(RequiredFieldValidationText)
    .matches(onlyNumber,NumbersFieldValidationText),
  mediaCenter: Yup.string().required(RequiredFieldValidationText),
  onlineStore: Yup.string().required(RequiredFieldValidationText),
  prizes: Yup.array().of(
    Yup.object().shape({
      rank: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
      prizeName: Yup.string().required(RequiredFieldValidationText),
      prizeImage: Yup.string().required(RequiredFieldValidationText),
      prizeDescription: Yup.string().required(RequiredFieldValidationText),
      prizeValueInUsd: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
      numberOfPrize: Yup.string()
        .required(RequiredFieldValidationText)
        .matches(onlyNumber,NumbersFieldValidationText),
      numberOfShares: Yup.string().required(RequiredFieldValidationText),
      numberOfLikes: Yup.string().required(RequiredFieldValidationText),
      numberOfVotes: Yup.string().required(RequiredFieldValidationText),
      excatNumber: Yup.string().required(RequiredFieldValidationText),
    })
  ),
});

/* End -- Photo Contest Form */
