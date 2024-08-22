import { Image, LI, UL } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import {
  ProjectSummeryTableBodyType,
} from "../../../Types/Dashborad/Project";
import {
  memberChartData,
  memberChartDataFour,
  memberChartDataThree,
  memberChartDataTwo,
} from "../DashboardChart/DashboardChart";
import { TableColumn } from "react-data-table-component";

export const websiteDesignData = [
  {
    color: "primary",
    title: "Website Design",
    completeValue: 8,
    progressValue: 70,
    userName: "Brave Wings",
    date: "25 April 2024",
    svgIcon: "website-design",
  },
  {
    color: "secondary",
    title: "NFT App Design",
    completeValue: 4,
    progressValue: 50,
    userName: "Brave Wings",
    date: "25 April 2024",
    svgIcon: "nft-app",
  },
];

export const todayTaskTabContentData = [
  {
    detail: "Create a Userflow. Social Application Design",
    status: "Done",
    color: "success",
    date: "Nov 03,2024",
  },
  {
    detail: "Slimmuch Product Design Main Page",
    status: "Pending",
    color: "secondary",
    date: "Aug 06,2024",
  },
  {
    detail: "Design of Interactive Prototypes",
    status: "In Progress",
    color: "primary",
    date: "Nov 03,2024",
  },
  {
    detail: "Create Userflow Social Application Design",
    status: "Done",
    color: "success",
    date: "Dec 20,2024",
  },
  {
    detail: "Create Userflow Social Application Design",
    status: "In Progress",
    color: "primary",
    date: "Sep 20,2024",
  },
];

export const teamMembersBodyData = [
  {
    image: "33.png",
    name: "David",
    designation: "Designer",
    hours: "10h",
    chart: memberChartData,
  },
  {
    image: "34.png",
    name: "Nasuha",
    designation: "Developer",
    hours: "65h",
    chart: memberChartDataTwo,
  },
  {
    image: "35.png",
    name: "Induan",
    designation: "Designer",
    hours: "25h",
    chart: memberChartDataThree,
  },
  {
    image: "36.png",
    name: "Wonkyu",
    designation: "Tester",
    hours: "38h",
    chart: memberChartDataFour,
  },
];

export const upcomingDeadlinesBodyData = [
  {
    image: "29.png",
    name: "Kyuwon",
    task: "Mobile",
    deadLine: "10 Aug",
    color: "primary",
    value: "70",
  },
  {
    image: "30.png",
    name: "Junsung",
    task: "Landing",
    deadLine: "3 Oct",
    color: "secondary",
    value: "20",
  },
  {
    image: "31.png",
    name: "Joohe",
    task: "NFT",
    deadLine: "26 Dec",
    color: "success",
    value: "70",
  },
  {
    image: "32.png",
    name: "Wonkyu",
    task: "Hire",
    deadLine: "10 Jun",
    color: "danger",
    value: "30",
  },
];

export const mobileAppData = [
  {
    svgIcon: "mobile-app",
    title: "Mobile App",
    color: "primary",
    email: "joohe.lee@gmail.com",
    clientDetails: [
      {
        color: "primary",
        title: "Due Date",
        date: "25-10-2024",
      },
      {
        color: "primary",
        title: "Budget",
        date: "$36,000.00",
      },
      {
        title: "Client",
        date: "Joohee Lee",
      },
    ],
    userDetail: ["20.png", "21.png", "22.png"],
    buttonName: "Pending",
    btnColor: "secondary",
  },
  {
    class: "banking-web",
    svgIcon: "banking-web",
    color: "secondary",
    title: "Banking Web",
    email: "wonkyu@gmail.com",
    clientDetails: [
      {
        color: "secondary",
        title: "Due Date",
        date: "12-04-2024",
      },
      {
        title: "Budget",
        date: "$42,500.00",
      },
      {
        color: "secondary",
        title: "Client",
        date: "Wonkyu Min",
      },
    ],
    userDetail: ["23.png", "24.png", "25.png"],
    buttonName: "Done",
    btnColor: "success",
  },
  {
    class: "finance-app",
    svgIcon: "finance-app",
    color: "success",
    title: "Finance App",
    email: "yongjae@gmail.com",
    clientDetails: [
      {
        color: "success",
        title: "Due Date",
        date: "10-09-2024",
      },
      {
        color: "success",
        title: "Budget",
        date: "$15,600.00",
      },
      {
        title: "Client",
        date: "Yongjae Choi",
      },
    ],
    userDetail: ["26.png", "27.png"],
    buttonName: "Inprogress",
    btnColor: "primary",
  },
];

const ScrollImage: any = ({ image }: any) => (
  <div className="user-details customers">
    <UL className="simple-list flex-row">
      {image.map((data:string,i:number)=>(
        <LI className="d-inline-block" key={i}>
          <Image src={dynamicImage(`dashboard-3/user/${data}`)} alt="user" />
        </LI>
      ))}
    </UL>
  </div>
);

export const projectSummeryTableHeaderData: TableColumn<ProjectSummeryTableBodyType>[] =
  [
    {
      name: "Name",
      selector: (row) => `${row.projectName}`,
      sortable: true,
    },
    {
      name: "Project Type",
      selector: (row) => `${row.projectType}`,
      sortable: true,
    },
    {
      name: "Teams",
      cell: (row) => <ScrollImage image={row.teams} />,
      sortable: true,
    },
    {
      name: "Start Date",
      selector: (row) => `${row.startDate}`,
      sortable: true,
    },
    {
      name: "Location",
      selector: (row) => `${row.location}`,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row) => `${row.status}`,
      sortable: true,
    }
  ];

export const projectSummeryTableBodyData = [
  {
    projectName: "Landing page",
    projectType: "Website",
    teams: ["14.png", "15.png", "16.png"],
    startDate: "Oct 26,2024",
    location: "UK-John Peter",
    status: "Active",
  },
  {
    projectName: "NFT Website Page",
    projectType: "Campaign",
    teams: ["17.png", "3.png", "7.png"],
    startDate: "Nov 10,2024",
    location: "Srinsoft technology",
    status: "Pending",
  },
  {
    projectName: "Email Design",
    projectType: "Design",
    teams: ["12.png", "18.png", "19.png"],
    startDate: "Feb 26,2024",
    location: "CA William sck",
    status: "Active",
  },
  {
    projectName: "Banner Design",
    projectType: "Banner",
    teams: ["14.png", "15.png", "16.png"],
    startDate: "Nov 10,2024",
    location: "USA",
    status: "Pending",
  },
  {
    projectName: "Redesign Layout",
    projectType: "Landing",
    teams: ["17.png", "3.png", "7.png"],
    startDate: "Jan 10,2024",
    location: "Design technology",
    status: "Active",
  },
  {
    projectName: "Login & Sign Up Ui",
    projectType: "Ui Design",
    teams: ["12.png", "18.png", "19.png"],
    startDate: "Feb 26,2024",
    location: "CA William sck",
    status: "Active",
  },
  {
    projectName: "Front-End Website",
    projectType: "Website",
    teams: ["14.png", "15.png", "16.png"],
    startDate: "Nov 26,2024",
    location: "New zealand",
    status: "Active",
  },
  {
    projectName: "NFT Website Page",
    projectType: "Campaign",
    teams: ["17.png", "3.png", "7.png"],
    startDate: "Nov 10,2024",
    location: "Srinsoft technology",
    status: "Pending",
  },
  {
    projectName: "Social Design",
    projectType: "Product Design",
    teams: ["12.png", "18.png", "19.png"],
    startDate: "Feb 19,2024",
    location: "CA William",
    status: "Active",
  },
];
