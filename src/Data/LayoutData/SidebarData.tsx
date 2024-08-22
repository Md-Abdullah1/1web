import { MenuItem } from "../../Types/Layout/SidebarType";
import { fas } from "@fortawesome/free-solid-svg-icons";

export const MenuList: MenuItem[] = [
  {
    title: "",
    lanClass: "lan-1",
    Items: [
      {
        path: `${process.env.PUBLIC_URL}/see-all-contents`,
        title: "Media",
        type: "link",
        id: 0,
        icon: fas.faEye,
      },
      {
        path: `${process.env.PUBLIC_URL}/knowledge`,
        title: "Knowledge",
        type: "link",
        id: 1,
        icon: fas.faBook,
      },
      {
        path: `${process.env.PUBLIC_URL}/contests`,
        title: "Contests",
        type: "link",
        id: 2,
        icon: fas.faTrophy,
      },
      {
        title: "Posts",
        id: 3,
        icon: fas.faSignsPost,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/post/events-and-activities`,
            title: "Activities and Events",
            type: "link",
            icon: fas.faPeopleRoof

          },
          {
            path: `${process.env.PUBLIC_URL}/post/customers-wishes`,
            title: "Customers’ Wishes",
            type: "link",
            icon: fas.faHandSparkles

          },
          {
            path: `${process.env.PUBLIC_URL}/post/job-opnings`,
            title: "Job Openings",
            type: "link",
            icon: fas.faBuildingCircleExclamation

          },
          {
            path: `${process.env.PUBLIC_URL}/posts/surveys`,
            title: "Surveys",
            type: "link",
            icon: fas.faCircleQuestion

          },
        ],
      },
      {
        title: "Communication",
        id: 8,
        icon: fas.faPodcast,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/communication/start-classified-chat`,
            title: "Start Classified Chat",
            type: "link",
            icon: fas.faCommentMedical

          },
          {
            path: `${process.env.PUBLIC_URL}/communication/message-threads-inbox`,
            type: "link",
            title: "Inbox",
            icon: fas.faEnvelope

          },
          {
            path: `${process.env.PUBLIC_URL}/communication/private-classified-chat`,
            type: "link",
            title: "Private C-Chat",
            icon: fas.faCommentDots
          },
          {
            path: `${process.env.PUBLIC_URL}/communication/marketplace-classified-chat`,
            type: "link",
            title: "Marketplace C-Chat",
            icon: fas.faCommentsDollar

          },
          {
            path: `${process.env.PUBLIC_URL}/communication/events-and-projects-classified-chat`,
            type: "link",
            title: "Project and Event C-Chat",
            icon: fas.faUsersRectangle

          },
          {
            path: `${process.env.PUBLIC_URL}/communication/applications-classified-chat`,
            type: "link",
            title: "Applications: for work and study",
            icon: fas.faEnvelopeOpenText

          },
          {
            path: `${process.env.PUBLIC_URL}/communication/contacts`,
            title: "Contacts",
            type: "link",
            active: false,
            icon: fas.faAddressBook

          },
        ],
      },
      {
        title: "Marketplace",
        id: 6,
        icon: fas.faStore,
        type: "sub",
        active: false,
        children: [
          {
            path: `${process.env.PUBLIC_URL}/services-and-products`,
            title: "Products",
            type: "link",
          },
          {
            path: `${process.env.PUBLIC_URL}/marketplace/checkout`,
            title: "Checkout",
            type: "link",
          },

        ],
      },
      {
        path: `${process.env.PUBLIC_URL}/coupons`,
        title: "Coupons",
        type: "link",
        icon: fas.faMoneyCheckDollar,
      },
      // {
      //   path: `${process.env.PUBLIC_URL}/upload`,
      //   title: "Upload",
      //   type: "link",
      //   icon: fas.faCloudArrowUp,
      // },

      {
        id: 11,
        title: "My Media Center",
        icon: fas.faArrowsToEye,
        type: "sub",
        active: false,
        children: [
          {
            title: "About",
            type: "link",
            path: `${process.env.PUBLIC_URL}/about`,
            icon: fas.faAddressCard,

          },
          {
            icon: fas.faCalendarDays, 
            path: `${process.env.PUBLIC_URL}/my-media-center/calendar`,
            type: "link",
            title: "Calendar", 
          },
          {
            icon: fas.faShop, 
            path: `${process.env.PUBLIC_URL}/online-store`,
            type: "link",
            title: "Online Store", 
          },
          {
            title: "Coupons",
            type: "link",
            icon: fas.faCloudArrowUp, 
            path: `${process.env.PUBLIC_URL}/my-coupons`,
          },
          {
            title: "Photos",
            type: "link",
            icon: fas.faImage, 
            path: `${process.env.PUBLIC_URL}/photos`,
          }, 
          {
            title: "Albums",
            type: "link",
            icon: fas.faImages, 
            path: `${process.env.PUBLIC_URL}/albums`,
          },
          {
            title: "Collections",
            type: "link",
            iconbi:'bi bi-journal-plus pe-2' ,
            path: `${process.env.PUBLIC_URL}/collections`,
          },
          {
            title: "Likes",
            type: "link",
            icon: fas.faHeart, 
            path: `${process.env.PUBLIC_URL}/likes`,
          },
          {
            title: "Reviews by Me",
            type: "link",
            icon: fas.faComment, 
            path: `${process.env.PUBLIC_URL}/reviews`,
          },
          {
            title: "Reviews About Me",
            type: "link",
            icon: fas.faComments, 
            path: `${process.env.PUBLIC_URL}/reviews-about-me`,
          },
          {
            title: "Activities and Meetings",
            type: "link",
            icon: fas.faPeopleRoof, 
            path: `${process.env.PUBLIC_URL}/activities-meetings`,
          },
          {
            title: "Quizzes and Surveys",
            type: "link",
            icon: fas.faCloudArrowUp, 
            path: `${process.env.PUBLIC_URL}/quizzes-surveys`,
          },
          {
            title: "Photo Contests",
            type: "link",
            icon: fas.faTrophy, 
            path: `${process.env.PUBLIC_URL}/quizzes-surveys`,
          },
          {
            title: "Followers",
            type: "link",
            icon: fas.faUsersRays, 
            path: `${process.env.PUBLIC_URL}/followers`,
          },
          {
            title: "I Follow",
            type: "link",
            icon: fas.faPersonWalkingArrowRight, 
            path: `${process.env.PUBLIC_URL}/i-follow`,
          }, 
          {
            title: "I Downloaded",
            type: "link",
            icon: fas.faCloudArrowDown,
            path: `${process.env.PUBLIC_URL}/i-downloaded`,
          }, 
          {
            title: "External Links",
            type: "link",
            icon: fas.faLink, 
            path: `${process.env.PUBLIC_URL}/external-links`,
          },
          {
            title: "From My Media Masters",
            type: "link",
            iconbi:'bi bi-postage-heart' , 
            path: `${process.env.PUBLIC_URL}/external-links`,
          }, 
          {
            title: "Pending Approval",
            type: "link",
            icon: fas.faCircleHalfStroke, 
            path: `${process.env.PUBLIC_URL}/pending-photos`,
          }, 
        ],
      },

      {
        title: "Tools",
        id: 11,
        icon: fas.faWandMagicSparkles,
        type: "sub",
        active: false,
        HeadingDrop:"Tools",
        children: [ 
          {
            title: "Brand Support Tools",
            Items: [
              {
                icon: fas.faPersonShelter,
                subtitle: "Attendance System",
                description:
                  "manage attendance, registration data, appointments, events, classes, work shifts.",
                path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/attendance-system`,
              },
              {
                icon: fas.faLink,
                subtitle: "Manage External Links",
                description:
                  "group you favourite and recommended web pages in one place to help followers and customers find them easily.",
                path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-external-links`,
              },
              {
                icon: fas.faTrophy,
                subtitle: "Photo Contest System",
                description:
                  "create and manage photo contests to reward and interact with followers and customers.",
                path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/manage-my-photo-contests`,
              }, 
              {
                icon:fas.faBook,
                subtitle: "Knowledge  System",
                description:
                  "add and manage educational games, exams, tests, surveys, lessons, tutorials, training materials…",
                path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/knowledge`,
              },
              {
                icon : fas.faBriefcase,
                subtitle: "Manage Projects",
                description: "Manage your work with your team and clients",
                path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list`,
              },
              {
                icon: fas.faHeadset,
                subtitle: "Support Ticket System",
                description: "Manage customer service and satisfaction effectively",
                path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/support-ticket-system`,
              },
              {
                icon: fas.faFileInvoice,
                subtitle: "Ready Templates",
                description: "Save time and use high quality templates",
                path: `${process.env.PUBLIC_URL}/tools/brand-support/ready-templates`,
              },
              {
                title: "Attendance System",
                id: 786,
                type: "sub",
                children: [
                  {
                    path: `${process.env.PUBLIC_URL}/tools/brand-support-tools/attendance-system/add-new-activity`,
                    title: "Add  New Activity",
                    type: "link",
                  },
                 
                ],
              },
            ],
          },
          {
            title: "Manage Contents",
            Items: [
              {
                icon: fas.faImages,
                subtitle: "Manage Albums",
                description:
                  "group  your contents under a specific idea or album name.",
                path: `${process.env.PUBLIC_URL}/tools/manage-contents/manage-my-albums`,
              },
              {
                icon: fas.faBoxesStacked,
                subtitle: "Manage Collections",
                description:
                  "Collect any contents from other users and group them under a specific idea or collection name.",
                path: `${process.env.PUBLIC_URL}/tools/manage-contents/manage-my-collections`,
              },
              {
                icon: fas.faImage,
                subtitle: "Manage Uploaded Contests",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, consectetur?",
                path: `${process.env.PUBLIC_URL}/tools/manage-contents/my-uploaded-contents`,
              },
            ],
          },
          {
            title: "Manage Store",
            Items: [
              {
                icon: fas.faBuildingFlag,
                subtitle: "Manage Branches",
                description: "add, edit and manage your branches",
                path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-branches`,
              },
              {
                icon: fas.faGifts,
                subtitle: "Manage Products Services",
                description: "add, edit and manage your products and services",
                path: `${process.env.PUBLIC_URL}/tools/manage-store/product-and-service-list`,
              },
              {
                icon: fas.faArrowsDownToLine,
                subtitle: "Addon Categories",
                description:
                  "add, edit and manage add-on with your products and services",
                path: `${process.env.PUBLIC_URL}/tools/manage-online-store/addon-categories`,
              },
              {
                icon: fas.faMoneyCheckDollar,
                subtitle: "Coupon System",
                description: "offer discounts and manage coupons.",
                path: `${process.env.PUBLIC_URL}/tools/manage-online-store/manage-my-coupons`,
              },
              {
                icon: fas.faTruckFast,
                subtitle: "Delivery Service",
                description:
                  "add, edit, manage your delivery fees and delivery workers",
                path: `${process.env.PUBLIC_URL}/tools/manage-online-store/delivery-fees`,
              },
            ],
          },
        ],
      },
    ],
  },
  // {
  //   title: "READY TEMPLATES",
  //   lanClass: "lan-8",
  //   Items: [
  //     // {
  //     //   title: "Others",
  //     //   // icon: "others",
  //     //   id: 25,
  //     //   type: "sub",
  //     //   children: [
  //     //     {
  //     //       title: "Error Pages",
  //     //       type: "sub",
  //     //       children: [
  //     //         {
  //     //           title: "Error 400",
  //     //           type: "link",
  //     //           path: `${process.env.PUBLIC_URL}/errors/error400`,
  //     //         },
  //     //         {
  //     //           title: "Error 401",
  //     //           type: "link",
  //     //           path: `${process.env.PUBLIC_URL}/errors/error401`,
  //     //         },
  //     //         {
  //     //           title: "Error 403",
  //     //           type: "link",
  //     //           path: `${process.env.PUBLIC_URL}/errors/error403`,
  //     //         },
  //     //         {
  //     //           title: "Error 404",
  //     //           type: "link",
  //     //           path: `${process.env.PUBLIC_URL}/errors/error404`,
  //     //         },
  //     //         {
  //     //           title: "Error 500",
  //     //           type: "link",
  //     //           path: `${process.env.PUBLIC_URL}/errors/error500`,
  //     //         },
  //     //         {
  //     //           title: "Error 503",
  //     //           type: "link",
  //     //           path: `${process.env.PUBLIC_URL}/errors/error503`,
  //     //         },
  //     //       ],
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   title: "Forms",
  //     //   //icon: "form",
  //     //   type: "sub",
  //     //   children: [
  //     //     {
  //     //       title: "Add a Branch Public Contact",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/manage-branches/branch-public-contacts/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add a Branch",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/manage-branches/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add an External Link",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/manage-my-external-links/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add a Photo Contest",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/manage-my-photo-contests/add-new`,
  //     //       icon: fas.faClipboardQuestion
  //     //     },
  //     //     {
  //     //       title: "Add a Quizz Material",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/quiz-materials/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add a Question",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/questions/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add a Survey or Quiz",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/survey-and-quizzes/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add Special Parameters",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/special-parameters/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add an Album",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-contents/manage-my-albums/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add an Addon Categroy",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/addon-categories/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add a Coupon",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/manage-my-coupons/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add Delivery Fees",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/delivery-fees/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add a Delivery Worker",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/delivery-workers/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Add Scheduling",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/manage-branches/schedules/add-new`,
  //     //     },
  //     //     {
  //     //       title: "Contact Us",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/contact`,
  //     //     },
  //     //     {
  //     //       title: "Start C-Chat",
  //     //       type: "link",
  //     //       path: `${process.env.PUBLIC_URL}/communication/private-and-public-messages-offers-job-ads/add-new`,
  //     //     },
  //     //   ],
  //     // },
  //     // {
  //     //   title: "Tables",
  //     //   //icon: "table",
  //     //   type: "sub",
  //     //   children: [
  //     //     {
  //     //       title: "Manage My Branches",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/manage-branches`,
  //     //     },
  //     //     {
  //     //       title: "Manage My External Links",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/manage-my-external-links`,
  //     //     },
  //     //     {
  //     //       title: "Manage My Photos",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/manage-my-photo-contests`,
  //     //     },
  //     //     {
  //     //       title: "Quiz Materials",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/quiz-materials`,
  //     //     },
  //     //     {
  //     //       title: "Study Materials and Lessions",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/study-material-and-lessons`,
  //     //     },
  //     //     {
  //     //       title: "Special Parameters",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/special-parameters`,
  //     //     },
  //     //     {
  //     //       title: "Quiz and Survey",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/survey-and-quizzes`,
  //     //     },
  //     //     {
  //     //       title: "Questions",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/brand-support-tools/questions`,
  //     //     },
  //     //     {
  //     //       title: "My Uploaded Contents",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/manage-contents/my-uploaded-contents`,
  //     //     },
  //     //     {
  //     //       title: "Manage My Collections",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/manage-contents/manage-my-collections`,
  //     //     },
  //     //     {
  //     //       title: "Manage My Albums",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/manage-contents/manage-my-albums`,
  //     //     },
  //     //     {
  //     //       title: "Addon Categories",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/addon-categories`,
  //     //     },
  //     //     {
  //     //       title: "Manage My Coupons",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/manage-my-coupons`,
  //     //     },
  //     //     {
  //     //       title: "Delivery Fees",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/manage-online-store/delivery-fees`,
  //     //     },
  //     //     {
  //     //       title: "My Referrals",
  //     //       type: "",
  //     //       path: `${process.env.PUBLIC_URL}/my/referrals`,
  //     //     },
  //     //   ],
  //     // },
  //   ],
  // },
];
