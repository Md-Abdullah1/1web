import { SideBartList, TodoDataType } from "../../../Types/Application/Todo/Todo";
import {
  AllTask,
  Completed,
  InProcess,
  Pending,
  TrashHeading,
} from "../../../utils/Constant";

export const sideBartList:SideBartList[] = [
  { color: "primary", icon:"FilePlus", tittle: AllTask },
  { color: "success", icon:"CheckCircle", tittle: Completed, badge: 3 },
  { color: "danger", icon:"Cast", tittle: Pending, badge: 2 },
  { color: "info", icon: "Activity", tittle: InProcess, badge: 2 },
  { color: "danger", icon:"Trash", tittle: TrashHeading },
];

export const todoListData: TodoDataType[] = [
  {
    id: 0,
    title: "Check validation involves making sure all your tags are properly closed and nested.",
    status: "pending",
    badge: "In Progress",
    badgeClass: "bg-light-primary font-primary",
    timeLimit: "10 Nov",
  },
  {
    id: 1,
    title: "Test the outgoing links from all the pages to the specific domain under test.",
    status: "pending",
    badge: "Pending",
    badgeClass: "bg-light-danger font-danger",
    timeLimit: "04 Aug",
  },
  {
    id: 2,
    title: "Test links are used to send emails to admin or other users from web pages.",
    status: "completed",
    badge: "Done",
    badgeClass: "bg-light-success font-success",
    timeLimit: "25 Feb",
  },
  {
    id: 3,
    title: "Options to create forms, if any, form deletes a view or modify the forms.",
    status: "pending",
    badge: "In Progress",
    badgeClass: "bg-light-primary font-primary",
    timeLimit: "15 Dec",
  },
  {
    id: 4,
    title: "Wrong inputs in the forms to the fields in the forms.",
    status: "pending",
    badge: "Pending",
    badgeClass: "bg-light-danger font-danger",
    timeLimit: "11 Nov",
  },
  {
    id: 5,
    title: "Check if the instructions provided are perfect to satisfy its purpose.",
    status: "completed",
    badge: "Done",
    badgeClass: "bg-light-success font-success",
    timeLimit: "08 July",
  },
  {
    id: 6,
    title: "Application server and Database server interface.",
    status: "completed",
    badge: "Done",
    badgeClass: "bg-light-success font-success",
    timeLimit: "08 Sep",
  }
];
