import { TableColumn } from "react-data-table-component";
import { Btn, Image, Progressbar } from "../../../AbstractElements";
import { dynamicImage } from "../../../Service";
import { TableHeadColumn } from "../../../Pages/App/AccountSettings/MyRegistrationPlan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

interface ExternalButtonsProp {
  openPopup :(type: boolean) => void;
}

export const ActionButtons: React.FC<ExternalButtonsProp> = ({openPopup}) =>{
  return(
    <div className="d-flex">
       <Btn size='sm' color='primary' className='mx-1 px-2' onClick={() => openPopup(true)}><FontAwesomeIcon icon={fas.faPencil} size={`sm`} /></Btn>
       <Btn size='sm' color='warning' className='mx-1 px-2' onClick={() => openPopup(false)}><FontAwesomeIcon icon={fas.faEye} size={`sm`} /></Btn>
       <Btn size='sm' color='danger' className='mx-1 px-2' onClick={openPopup}><FontAwesomeIcon icon={fas.faTrash} size={`sm`} /></Btn>
    </div>
  );
}



export const links = [
    {title:"Attendance System" , total_contest:0 , path:'tools/brand-support-tools/attendance-system' },
    {title:"Manage External Links", total_contest:0, path:'tools/brand-support-tools/manage-my-external-links'},
    {title:"Photo Contest System", total_contest:0, path:'tools/brand-support-tools/manage-my-photo-contests'},
    {title:"Knowledge  System", total_contest:0, path:'tools/brand-support-tools/knowledge'},
    {title:"Manage Projects", total_contest:0, path:'tools/brand-support-tools/project-list'},
    {title:"Support Ticket System", total_contest:0, path:'tools/brand-support-tools/support-ticket-system'},
    {title:"Ready Templates", total_contest:0, path:'tools/brand-support/ready-templates'}
  ];


  export const ExternalLinkTableAction = [
    {actionName:"Add an external link", path:'tools/brand-support-tools/manage-my-external-links/add-new'},
    {actionName:"Delete", path:'' },
    {actionName:"CSV",  path:''},
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
  ];

  export const MyPhotoContestTableAction = [
    {actionName:"Add Photo Contest", path:'tools/brand-support-tools/manage-my-photo-contests/add-new'},
    {actionName:"Delete", path:'' },
    {actionName:"CSV",  path:''},
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
  ];

  export const QuizzSurveyTableAction = [
    {actionName:"Add Quizz & Survey", path:'tools/brand-support-tools/survey-and-quizzes/add-new'},
    {actionName:"Delete", path:'' },
    {actionName:"CSV",  path:''},
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
  ];

  export const StudyMaterialTableAction = [
    {actionName:"Add a Lesson", path:'tools/brand-support-tools/lessons/add-new'},
    {actionName:"Delete", path:'' },
    {actionName:"CSV",  path:''},
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
  ];

  export const QuizMaterialTableAction = [
    {actionName:"Add a Quiz Material", path:'tools/brand-support-tools/quiz-materials/add-new'},
    {actionName:"Delete", path:'' },
    {actionName:"CSV",  path:''},
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
  ];

  export const QuestionTableAction = [
    {actionName:"Add a Question", path:'tools/brand-support-tools/questions/add-new'},
    {actionName:"Delete", path:'' },
    {actionName:"CSV",  path:''},
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
  ];

  export const SpecialParameterTableAction = [
    {actionName:"Add a Special Parameter", path:'tools/brand-support-tools/special-parameters/add-new'},
    {actionName:"Delete", path:'' },
    {actionName:"CSV",  path:''},
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
  ];






// Attendance system table dummy values,type,ActionButtons 

export const AttendanceSystemData = [
  {
    referenceid: "REF123",
    activitytype: "appointment",
    activitytitle: "Meeting with Client",
    description: "Discuss project details with the client.",
    activitylocation: true,
    country: ["USA"],
    state: ["California"],
    city: ["San Francisco"],
    fulladdress: "123 Market St, San Francisco, CA 94103",
    category: "Business",
    keywords: ["meeting", "client", "project"],
    duration: "2",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: false,
    breakinactivity: false,
    publicactivity: "Private",
    latearrival: 10,
    supervisorconfirm: true,
    supervisorname: "John Doe",
    manualcheck: false,
    inviteusers: ["user1@example.com", "user2@example.com"],
    meetingurl: "https://example.com/meeting",
    phonenumber: "123-456-7890",
    meetingplatform: "Zoom",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  },
  {
    referenceid: "REF124",
    activitytype: "training",
    activitytitle: "Team Building Workshop",
    description: "A workshop for improving team collaboration.",
    activitylocation: false,
    country: ["India", "USA", "China"],
    state: [],
    city: [],
    fulladdress: "",
    category: "Training",
    keywords: ["workshop", "team", "collaboration"],
    duration: "4",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: true,
    breakinactivity: true,
    publicactivity: "Public",
    latearrival: 5,
    supervisorconfirm: false,
    supervisorname: "",
    manualcheck: true,
    inviteusers: ["user3@example.com"],
    meetingurl: "",
    phonenumber: "",
    meetingplatform: "",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  },
  {
    referenceid: "REF125",
    activitytype: "appointment",
    activitytitle: "Doctor Appointment",
    description: "Regular check-up with Dr. Smith.",
    activitylocation: true,
    country: ["USA"],
    state: ["New York"],
    city: ["New York City"],
    fulladdress: "456 Park Ave, New York, NY 10022",
    category: "Health",
    keywords: ["doctor", "check-up"],
    duration: "1",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: false,
    breakinactivity: false,
    publicactivity: "Private",
    latearrival: 15,
    supervisorconfirm: true,
    supervisorname: "Jane Smith",
    manualcheck: false,
    inviteusers: [],
    meetingurl: "",
    phonenumber: "987-654-3210",
    meetingplatform: "",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  },
  {
    referenceid: "REF126",
    activitytype: "appointment",
    activitytitle: "Lunch with Partner",
    description: "Discuss partnership opportunities over lunch.",
    activitylocation: true,
    country: ["USA"],
    state: ["Texas"],
    city: ["Houston"],
    fulladdress: "789 Main St, Houston, TX 77002",
    category: "Networking",
    keywords: ["lunch", "partner", "networking"],
    duration: "1.5",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: false,
    breakinactivity: true,
    publicactivity: "Private",
    latearrival: 5,
    supervisorconfirm: false,
    supervisorname: "",
    manualcheck: true,
    inviteusers: ["user4@example.com", "user5@example.com"],
    meetingurl: "",
    phonenumber: "",
    meetingplatform: "",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  },
  {
    referenceid: "REF127",
    activitytype: "conference",
    activitytitle: "Tech Conference 2024",
    description: "Annual technology conference.",
    activitylocation: true,
    country: ["USA"],
    state: ["Nevada"],
    city: ["Las Vegas"],
    fulladdress: "123 Las Vegas Blvd, Las Vegas, NV 89101",
    category: "Conference",
    keywords: ["tech", "conference"],
    duration: "8",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: true,
    breakinactivity: true,
    publicactivity: "Public",
    latearrival: 0,
    supervisorconfirm: false,
    supervisorname: "",
    manualcheck: false,
    inviteusers: ["user6@example.com", "user7@example.com"],
    meetingurl: "https://example.com/conference",
    phonenumber: "555-123-4567",
    meetingplatform: "WebEx",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  },
  {
    referenceid: "REF128",
    activitytype: "appointment",
    activitytitle: "Interview with Candidate",
    description: "Interview for the open developer position.",
    activitylocation: true,
    country: ["USA"],
    state: ["Washington"],
    city: ["Seattle"],
    fulladdress: "456 Pike St, Seattle, WA 98101",
    category: "Hiring",
    keywords: ["interview", "candidate", "developer"],
    duration: "1",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: false,
    breakinactivity: false,
    publicactivity: "Private",
    latearrival: 5,
    supervisorconfirm: true,
    supervisorname: "Michael Brown",
    manualcheck: false,
    inviteusers: [],
    meetingurl: "",
    phonenumber: "555-987-6543",
    meetingplatform: "",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  },
  {
    referenceid: "REF129",
    activitytype: "webinar",
    activitytitle: "ReactJS Best Practices",
    description: "Webinar on best practices for using ReactJS.",
    activitylocation: false,
    country: [],
    state: [],
    city: [],
    fulladdress: "",
    category: "Education",
    keywords: ["webinar", "ReactJS", "best practices"],
    duration: "2",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: false,
    breakinactivity: true,
    publicactivity: "Public",
    latearrival: 0,
    supervisorconfirm: false,
    supervisorname: "",
    manualcheck: false,
    inviteusers: ["user8@example.com", "user9@example.com"],
    meetingurl: "https://example.com/webinar",
    phonenumber: "",
    meetingplatform: "Google Meet",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  },
  {
    referenceid: "REF130",
    activitytype: "appointment",
    activitytitle: "Board Meeting",
    description: "Quarterly board meeting.",
    activitylocation: true,
    country: ["USA"],
    state: ["Illinois"],
    city: ["Chicago"],
    fulladdress: "789 Wacker Dr, Chicago, IL 60601",
    category: "Business",
    keywords: ["meeting", "board", "quarterly"],
    duration: "3",
    startdates: new Date("2024-08-15").toISOString(),
    expirydate: new Date("2024-08-16").toISOString(),
    leavingactivity: false,
    breakinactivity: false,
    publicactivity: "Private",
    latearrival: 10,
    supervisorconfirm: true,
    supervisorname: "Alice Johnson",
    manualcheck: true,
    inviteusers: ["user10@example.com"],
    meetingurl: "",
    phonenumber: "555-321-0987",
    meetingplatform: "",
    image: null,
    instructions: "",
    activityfrequency: false,
    dateranges: ""
  }
];

export interface AttendanceSystemDataType {
  referenceid: string;
  activitytype: string;
  activitytitle: string;
  description: string;
  activitylocation: boolean;
  country: string[];
  state: string[];
  city: string[];
  fulladdress: string;
  category: string;
  keywords: string[];
  duration: string;
  startdates: string;
  expirydate: string;
  leavingactivity: boolean;
  breakinactivity: boolean;
  publicactivity: string;
  supervisorconfirm: boolean;
  supervisorname: string;
  manualcheck: boolean;
  inviteusers: string[];
  meetingurl: string;
  phonenumber: string;
  meetingplatform: string;
  image:any;
  instructions:string;
  latearrival:number;
  activityfrequency:boolean;
  dateranges:string;
}

export const AttendanceActionButtons: React.FC<AttendanceButtonsProp> = ({handleActivityAction,rowData}) =>{
  return(
    <div className="d-flex">
       <Btn size='sm' color='primary' className='mx-1 px-2' onClick={() => handleActivityAction("edit",rowData)}><FontAwesomeIcon icon={fas.faPencil} size={`sm`} /></Btn>
       <Btn size='sm' color='warning' className='mx-1 px-2' onClick={() => handleActivityAction("view",rowData)}><FontAwesomeIcon icon={fas.faEye} size={`sm`} /></Btn>
       <Btn size='sm' color='danger' className='mx-1 px-2' onClick={()=>handleActivityAction("delete",rowData)}><FontAwesomeIcon icon={fas.faTrash} size={`sm`} /></Btn>
    </div>
  );
}
interface AttendanceButtonsProp {
  handleActivityAction :(type: string,rowData:AttendanceSystemDataType) => void;
  rowData:AttendanceSystemDataType
}


  
  export const supportTicketData = [
    {
      id: 1,
      image: "user/5.jpg",
      name: "Airi Satou",
      position: "Accountant",
      salary: "$162,700",
      office: "Tokyo",
      skill: 100,
      skillColor: "info",
      extn: 5407,
      email: "a.satou@datatables.net",
      experience: "1 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 2,
      image: "user/7.jpg",
      name: "Ashton Cox",
      position: "Junior Technical Author",
      salary: "$86,000",
      office: "San Francisco",
      skill: 60,
      skillColor: "danger",
      extn: 1562,
      email: "a.cox@datatables.net",
      experience: "1 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 3,
      image: "user/6.jpg",
      name: "Bradley Greer",
      position: "Software Engineer",
      salary: "$132,000",
      office: "London",
      skill: 30,
      skillColor: "primary",
      extn: 2558,
      email: "b.greer@datatables.net",
      experience: "4 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 4,
      image: "user/11.png",
      name: "Brielle Williamson",
      position: "Integration Specialist",
      salary: "$372,000",
      office: "New York",
      skill: 55,
      skillColor: "info",
      extn: 4804,
      email: "b.williamson@datatables.net",
      experience: "2 Months",
      date:"24 Jul, 2024",
    },
    {
      id: 5,
      image: "user/4.jpg",
      name: "Caesar Vance",
      position: "Pre-Sales Support",
      salary: "$106,450",
      office: "New York",
      skill: 20,
      skillColor: "success",
      extn: 8330,
      email: "c.vance@datatables.net",
      experience: "5 Years",
      date:"24 Jul, 2024",
    },
    {
      id: 6,
      image: "user/1.jpg",
      name: "Cedric Kelly",
      position: "Senior Javascript Developer",
      salary: "$433,060",
      office: "Edinburgh",
      skill: 50,
      skillColor: "success",
      extn: 6224,
      email: "c.kelly@datatables.net",
      experience: "1 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 7,
      image: "user/9.jpg",
      name: "Charde Marshall",
      position: "Regional Director	",
      salary: "$470,600",
      office: "San Francisco",
      skill: 80,
      skillColor: "secondary",
      extn: 6741,
      email: "c.marshall@datatables.net",
      experience: "3 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 8,
      image: "user/8.jpg",
      name: "Colleen Hurst",
      position: "Javascript Developer",
      salary: "$205,500",
      office: "San Francisco",
      skill: 100,
      skillColor: "info",
      extn: 6224,
      email: "c.hurst@datatables.net",
      experience: "2 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 9,
      image: "user/2.jpg",
      name: "Dai Rios",
      position: "Personnel Lead",
      salary: "$217,500",
      office: "Edinburgh",
      skill: 24,
      skillColor: "success",
      extn: 2290,
      email: "d.rios@datatables.net",
      experience: "4 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 10,
      image: "user/11.png",
      name: "Garrett Winters",
      position: "Accountant",
      salary: "$170,750",
      office: "Tokyo",
      skill: 40,
      skillColor: "warning",
      extn: 8422,
      email: "g.winters@datatables.net",
      experience: "1 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 11,
      image: "user/6.jpg",
      name: "Gloria Little",
      position: "Systems Administrator",
      salary: "$237,500",
      office: "New York",
      skill: 40,
      skillColor: "secondary",
      extn: 1721,
      email: "g.little@datatables.net",
      experience: "4 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 12,
      image: "user/2.jpg",
      name: "Haley Kennedy",
      position: "Senior Marketing Designer",
      salary: "$313,500",
      office: "London",
      skill: 15,
      skillColor: "success",
      extn: 3597,
      email: "h.kennedy@datatables.net",
      experience: "3 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 13,
      image: "user/7.jpg",
      name: "Herrod Chandler",
      position: "Sales Assistant",
      salary: "$137,500",
      office: "San Francisco",
      skill: 50,
      skillColor: "success",
      extn: 9608,
      email: "h.chandler@datatables.net",
      experience: "2 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 14,
      image: "user/11.png",
      name: "Jena Gaines",
      position: "Office Manager",
      salary: "$90,560",
      office: "London",
      skill: 80,
      skillColor: "warning",
      extn: 3814,
      email: "j.gaines@datatables.net",
      experience: "2 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 15,
      image: "user/9.jpg",
      name: "Jenette Caldwell",
      position: "Development Lead",
      salary: "$345,000",
      office: "New York",
      skill: 80,
      skillColor: "warning",
      extn: 1937,
      email: "j.caldwell@datatables.net",
      experience: "4 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 16,
      image: "user/4.jpg",
      name: "Michael Silva",
      position: "Marketing Designer",
      salary: "$198,500",
      office: "London",
      skill: 20,
      skillColor: "primary",
      extn: 1581,
      email: "m.silva@datatables.net",
      experience: "3 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 17,
      image: "user/5.jpg",
      name: "Paul Byrd",
      position: "Chief Financial Officer (CFO)",
      salary: "$725,000",
      office: "New York",
      skill: 20,
      skillColor: "primary",
      extn: 3059,
      email: "p.byrd@datatables.net",
      experience: "4 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 18,
      image: "user/12.png",
      name: "Quinn Flynn",
      position: "Support Lead",
      salary: "$342,000",
      office: "Edinburgh",
      skill: 10,
      skillColor: "success",
      extn: 9497,
      email: "q.flynn@datatables.net",
      experience: "3 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 19,
      image: "user/8.jpg",
      name: "Rhona Davidson",
      position: "Integration Specialist",
      salary: "$327,900",
      office: "Tokyo",
      skill: 10,
      skillColor: "success",
      extn: 6200,
      email: "r.davidson@datatables.net",
      experience: "2 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 20,
      image: "user/10.jpg",
      name: "Sonya Frost",
      position: "Software Engineer",
      salary: "$103,600",
      office: "Edinburgh",
      skill: 10,
      skillColor: "primary",
      extn: 1667,
      email: "s.frost@datatables.net",
      experience: "2 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 21,
      image: "user/7.jpg",
      name: "Tatyana Dens",
      position: "Regional Director",
      salary: "$385,750",
      office: "London",
      skill: 80,
      skillColor: "primary",
      extn: 1667,
      email: "t.fitzpatrick@datatables.net",
      experience: "3 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 22,
      image: "user/1.jpg",
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      office: "Edinburgh",
      skill: 30,
      skillColor: "primary",
      extn: 5421,
      email: "t.nixon@datatables.net",
      experience: "1 Year",
      date:"24 Jul, 2024",
    },
    {
      id: 23,
      image: "user/10.jpg",
      name: "Yuri Berry",
      position: "Chief Marketing Officer (CMO)",
      salary: "$675,000",
      office: "New York",
      skill: 60,
      skillColor: "danger",
      extn: 6154,
      email: "y.berry@datatables.net",
      experience: "5 Year",
      date:"24 Jul, 2024",
    },
  ];


  


  export interface SkillsDataProp{
    value: number;
    skillColor:string
  }
  
  const SkillsData: React.FC<SkillsDataProp> = ({ value, skillColor }) => {
    return (
      <div className="progress-showcase" style={{ width: "86px" }}>
        <Progressbar value={value} color={skillColor} style={{ height: "8px" }} />
      </div>
    );
  };

  export interface SupportDataType {
    id: number;
    image: string;
    position: string;
    salary: string;
    office: string;
    skill: number;
    extn: number;
    email: string;
    name: string;
    skillColor:string
  }

  export interface ImageDataProp{
    image:string;
    title:string
  }

  
  const ImageData: React.FC<ImageDataProp> = ({ image, title }) => {
    return (
      <div className="d-flex">
        <Image
          className="rounded-circle img-30 me-3"
          src={dynamicImage(`${image}`)}
          alt="Generic placeholder image"
        />
        <div className="flex-grow-1 align-self-center">
          <div>{title}</div>
        </div>
      </div>
    );
  };



  export const StudyMaterialAction =[
    {title:"Lessons", count:0, path:'tools/brand-support-tools/lessons'},
    {title:"Quiz Materials", count:0, path:'brand-support-tools/quiz-materials'},
    {title:"Questions", count:0, path:'brand-support-tools/questions'},
    {title:"Surveys & Quizzes", count:0, path:'brand-support-tools/survey-and-quizzes'},
    {title:"Special Parameters", count:0, path:'brand-support-tools/special-parameters'},
  ]



  //table columns with ref of page - manage external links
  export const supportColumnData: TableColumn<SupportDataType>[] = [
    {
      name: <TableHeadColumn title={`Title`}/>,
      cell: (row) => <ImageData image={row.image} title={row.name} />,
      sortable: true,
      center: false,
    },
    {
      name: <TableHeadColumn title={`Number of Links`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Description`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Keywords`}/>,
      selector: (row) => row["office"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Date`}/>,
      cell: (row) => <SkillsData value={row.skill} skillColor={row.skillColor} />,
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
    
  ];



  //Manage Content Table Columns Names


  //Table - Addon Category
  export const AddonCategoryColumnData:TableColumn<SupportDataType>[] = [
    {
      name: <TableHeadColumn title={`S. No.`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Name`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },    
    {
      name:<TableHeadColumn title={`Branches`}/> ,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Products`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Addons`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Description`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Required Selection`}/> ,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Multiple Selection`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Is Active`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]

   //Table - Addon Category
   export const DeliveryFeesColumnData:TableColumn<SupportDataType>[] = [
    {
      name: <TableHeadColumn title={`S. No.`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Country`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    }, 
    {
      name: <TableHeadColumn title={`City`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },    
    {
      name: <TableHeadColumn title={`Branches`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Delivery Guy's Earning`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Delivery Guy's Earning From`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Show Delivery Guy's COD Collection`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Minimum Delivery Fee`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Fee Per Distance`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Fee Per Weight`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Maximum Distance to Deliver`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Maximum Delivery weight per order`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Maximum Delivery weight per order`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Default Commission Rate to Delivery Worker (from delivery’s fee)`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Enable Delivery Tip Amount`}/> ,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Tip Amount`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Enable Delivery Tip Percentage`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Tip Percentage`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Delivery Worker’s Tip Share`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]

  //Table - Branches
  export const BranchesColumnData:TableColumn<SupportDataType>[] = [
    {
      name: <TableHeadColumn title={`SR. No`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Branch Name`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    }, 
    {
      name: <TableHeadColumn title={`Thumbnail`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },    
    {
      name: <TableHeadColumn title={`Country`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`State`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`City`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Branch Address`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Pincode`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Auto Accept Orders`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Schedule ID`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`24 hours/7 Days (Online Store)`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Ship to Other States`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Ship to Other Counteries`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]

  //Table - Branches public whatsapp contact
  export const BranchesContactWhatsAppColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "ID",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: "Whatsapp No",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    }, 
    {
      name: "Countries",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "States",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Cities",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Branches",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]

  //Table - Branches public whatsapp contact
  export const BranchesContactColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "ID",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: "Contact No",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    }, 
    {
      name: "Countries",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "States",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Cities",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Branches",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]

  //Table - Branches public whatsapp contact
  export const BranchesEmailColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "ID",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: "Email",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    }, 
    {
      name: "Countries",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "States",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Cities",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Branches",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]

   //Table - Branches
   export const SchedulingColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "SR. No",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: "Monday",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    }, 
    {
      name: "Tuesday",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },    
    {
      name: "Wednesday",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Thursday",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Friday",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Saturday",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Sunday",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "City/Branches",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]


   //Table - content of Product Service
   export const ContentProductServicesColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "ID",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: "Thumbnail",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    }, 
    {
      name: "Title",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },    
    {
      name: "Product Title",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Description",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Bulk Id",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Albums",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Collections",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Assigned Product and Service",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Type",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Free images and photos",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Product or Service",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "External Weblink",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Likes",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Downloads",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Dates",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Status",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]


  //Table - Product Service
  export const ProductServicesColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "ID",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    {
      name: "Inventory Number",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },     
    {
      name: "Product or Service Name",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    
    {
      name: "Date",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
   
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]

  //Table - referral
  export const ReferralsColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "Type",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
   
    {
      name: "Date",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Earning",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
   
  ]


  //Table - referral
  export const WithdrawlColumnData:TableColumn<SupportDataType>[] = [
    {
      name: "Amount",
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
   
    {
      name: "Method",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Date",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: "Status",
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons action={1}/>,
      center: false,
    },
  ]
  