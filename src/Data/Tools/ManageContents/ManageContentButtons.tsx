export const ManageContents = [
    {title:'Manage Albums', total_contest:0 , path:'tools/manage-contents/manage-my-albums'},
    {title:'Manage Collections', total_contest:0 , path:'tools/manage-contents/manage-my-collections'},
    {title:'Manage Uploaded Contests', total_contest:0  ,path:'tools/manage-contents/my-uploaded-contents'},
    {title:'Trashed Photos', total_contest:0 ,path:'photos/trash'},
]

// Attendance System 
export const AttendanceManagement = [
    {title:'Manage Attendance', total_contest:0 , path:'tools/brand-support-tools/attendance-system'},
    {title:'Add New Activity', total_contest:0 , path:'tools/brand-support-tools/attendance-system/add-new-activity'},
   
]
// attendance system actions
export const MyAtttendanceSystemTableAction = [
    {actionName:"Create a New Activity" , path:'tools/brand-support-tools/attendance-system/add-new-activity'},
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
]
export const ManageContentTableAction =[
    {actionName:"CSV", path:''},
    {actionName:"Excel", path:''},
    {actionName:"Print", path:''},
    {actionName:"Columns", path:''}
];

export const ManageUploadedContentTableAction = [
    {actionName:"Add to Album", path:'tools/manage-contents/manage-my-albums/add-new'},
    {actionName:"Add an External Weblink", path:'tools/brand-support-tools/manage-my-external-links/add-new'},
    {actionName:"Edit", path:'' },
    {actionName:"Delete",  path:''},
    {actionName:"Columns", path:'' } ,
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
  ];


export const MyAlbumTableAction = [
    {actionName:"Create a New Album" , path:'tools/manage-contents/manage-my-albums/add-new'},
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
    {actionName:"Columns", path:'' } ,
]

export const AddonCategoriesTableAction = [
    {actionName:"Add New Addon Category" , path:'tools/manage-online-store/addon-categories/add-new'},
    {actionName:"Bulk Addon Categories" , path:'tools/manage-contents/manage-my-albums/add-new'},
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
]

export const CouponTableAction = [
    {actionName:"Add a Coupon" , path:'tools/manage-online-store/manage-my-coupons/add-new'},
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
]

export const DeliveryFeeAction = [
    {actionName:"Delivery Workers" , path:'tools/manage-online-store/delivery-workers'},
    {actionName:"Delivery Fees", path:'tools/manage-online-store/delivery-fees' },
]


export const ManageOnlineStore = [
    {title:'Manage Branches', total_contest:0 , path:'tools/manage-online-store/manage-branches'},
    {title:'Manage Products & Services', total_contest:0 , path:'tools/manage-online-store/manage-products-and-services'},
    {title:'Contents Products & Services', total_contest:0  ,path:'tools/manage-online-store/manage-contents-of-products-and-services'},
    {title:'Addon Categories', total_contest:0 ,path:'tools/manage-online-store/addon-categories'},
    {title:'Coupon System', total_contest:0 ,path:'tools/manage-online-store/manage-my-coupons'},
    {title:'Delivery System', total_contest:0 ,path:'tools/manage-online-store/delivery-workers'},
]

export const DeliveryFeeTableAction = [
    {actionName:"Add a Delivery Fee" , path:'tools/manage-online-store/delivery-fees/add-new'},
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"PDF", path:'' },
    {actionName:"Print", path:'' },
]

export const DeliveryWorkerTableAction = [
    {actionName:"Add a Delivery Worker" , path:'tools/manage-online-store/delivery-workers/add-new'},
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"PDF", path:'' },
    {actionName:"Print", path:'' },
]

export const BranchsAction = [
    {actionName:"New Branch" , path:'tools/manage-online-store/manage-branches/add-new'},
    {actionName:"Import Branch", path:'' },
    {actionName:"Branch Contacts", path:'tools/manage-online-store/manage-branches/branch-public-contacts' },
    {actionName:"Add Branch Contacts", path:'tools/manage-online-store/manage-branches/branch-public-contacts/add-new' },
    {actionName:"Schedules", path:'tools/manage-online-store/manage-branches/schedules' },
    {actionName:"Add a Schedule", path:'tools/manage-online-store/manage-branches/schedules/add-new' },
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
]


export const ManageProductServicesAction = [
    {actionName:"Upload Contents of Products and Services" , path:'#'},
    {actionName:"Assign contents to a product or service", path:'#' },
    {actionName:"Add to Album", path:'tools/manage-contents/manage-my-albums/add-new' },
    {actionName:"Delete", path:'#' },
    {actionName:"Columns", path:'#' },
    {actionName:"CSV", path:'' },
    {actionName:"Excel", path:'' },
    {actionName:"Print", path:'' },
]