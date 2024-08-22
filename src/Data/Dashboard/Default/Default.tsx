import {
  OnlineTimelineGroupType,
  OnlineTimelineItemsType,
} from "../../../Types/Dashborad/Default";
import moment from "moment";
export const onlineTimelineGroup: OnlineTimelineGroupType[] = [
  { id: 1, title: "12am" },
  { id: 2, title: "1am" },
  { id: 3, title: "2am" },
  { id: 4, title: "3am" },
  { id: 5, title: "4am" },
  { id: 6, title: "5am" },
  { id: 7, title: "6am" },
  { id: 8, title: "7am" },
  { id: 9, title: "8am" },
  { id: 10, title: "9am" },
  { id: 11, title: "10am" },
  { id: 12, title: "11am" },
  { id: 13, title: "12pm" },
  { id: 14, title: "1pm" },
  { id: 15, title: "2pm" },
  { id: 16, title: "3pm" },
  { id: 17, title: "4pm" },
  { id: 18, title: "5pm" },
  { id: 19, title: "6pm" },
  { id: 20, title: "7pm" },
  { id: 21, title: "8pm" },
  { id: 22, title: "9pm" },
  { id: 23, title: "10pm" },
  { id: 24, title: "11pm" },
];

export const onlineTimelineItems: OnlineTimelineItemsType[] = [
  {
    id: 1,
    group: 1,
    title: "NFT App Design",
    start_time: moment(),
    end_time: moment().add(1, "hour"),
  },
  {
    id: 2,
    group: 2,
    title: "Pet Care Website",
    start_time: moment().add(-0.5, "hour"),
    end_time: moment().add(0.5, "hour"),
  },
  {
    id: 3,
    group: 1,
    title: "Digital Marketing",
    start_time: moment().add(2, "hour"),
    end_time: moment().add(3, "hour"),
  },
  {
    id: 4,
    group: 2,
    title: "Computer Science",
    start_time: moment().add(3, "hour"),
    end_time: moment().add(3, "hour"),
  },
];

export const transactionHistoryBodyData = [
  {
    color: "primary",
    icon: "send",
    title: "Receipt from external Wallet",
    date: "Mar 21,2024, 4:45pm",
    status: "Completed",
    amount: "+ $248.00",
  },
  {
    color: "secondary",
    icon: "work",
    title: "Process refund to",
    date: "Feb 20,2024, 2:10pm",
    status: "Pending",
    amount: "+ $548.00",
  },
  {
    color: "success",
    icon: "graph",
    title: "Sending to Citizen",
    date: "Jun 17,2024, 12:45pm",
    status: "Verified",
    amount: "+ $953.00",
  },
  {
    color: "danger",
    icon: "bookmark",
    title: "Payment From #12345",
    date: "Oct 30,2024, 1:31pm",
    status: "Rejected",
    amount: "+ $349.00",
  },
];

export const topSellingProductBodyData = [
  {
    color: "primary",
    image: "1.png",
    productName: "Sneaker Shoes",
    id: "#A5647KB",
    couponCode: "PIX001",
    flagImage: "1.png",
    percentage: "-51",
    amount: "99.00",
  },
  {
    color: "primary",
    image: "2.png",
    productName: "Sweat Shirt",
    id: "#NB86H2E",
    couponCode: "PIX002",
    flagImage: "2.png",
    percentage: "-78",
    amount: "66.00",
  },
  {
    color: "primary",
    image: "3.png",
    productName: "Nike Travel Bag",
    id: "#UB654GH",
    couponCode: "PIX003",
    flagImage: "3.png",
    percentage: "-04",
    amount: "116.00",
  },
  {
    color: "primary",
    image: "4.png",
    productName: "Monster Cap",
    id: "#BAS4567",
    couponCode: "PIX004",
    flagImage: "4.png",
    percentage: "-60",
    amount: "99.00",
  },
];

export const recentOrderBodyBodyData = [
  {
    no: "1",
    image: "1.png",
    customerName: "Rocky Shoes",
    id: "8934",
    date: "01/12/2024",
    city: "Armenia",
    status: "Paid",
    color: "primary",
    amount: "238.80",
  },
  {
    no: "2",
    image: "2.png",
    customerName: "Nasuha Makusta",
    id: "6529",
    date: "12/10/2024",
    city: "Bhutan",
    status: "Pending",
    color: "secondary",
    amount: "654.95",
  },
  {
    no: "3",
    image: "3.png",
    customerName: "Induan Kastorika",
    id: "3659",
    date: "09/04/2024",
    city: "Ghana",
    status: "Done",
    color: "success",
    amount: "864.35",
  },
  {
    no: "4",
    image: "4.png",
    customerName: "Pogba Nehuntas",
    id: "2158",
    date: "10/05/2024",
    city: "Kenya",
    status: "Cancel",
    color: "danger",
    amount: "951.37",
  },
];

export const notificationsThreeTabContentData = [
  {
    image: "5.png",
    name: "Ralph Edwards Started Following you.",
    time: "35 min Ago",
    dot: true,
  },
  {
    image: "6.png",
    name: "Jenny Wilson Requested to Follow",
    time: "1w Ago",
    dot: false,
  },
  {
    image: "7.png",
    name: "Jenny Wilson Started Following you.",
    time: "3.10pm",
    dot: true,
  },
  {
    image: "2.png",
    name: "Nasuha Makusta Requested to Follow",
    time: "20 min Ago",
    dot: false,
  },
];

export const totalEarningsData = [
  {
    
  }
]
