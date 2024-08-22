import { earningChartData, salesChartData, totalCustomerChart, totalProductChart } from "../DashboardChart/DashboardChart";

export const dailyVisitorsOrderData = [
  {
    color: "primary",
    class: "me-3",
    title: "Deals",
    count: "350",
  },
  {
    color: "secondary",
    title: "Order Price",
    count: "$31K",
  },
];

export const orderProgressData = [
  {
    title: "Visits",
    count: "20,200",
    color: "primary",
    value: "70",
  },
  {
    title: "Order Value",
    count: "15,610",
    color: "secondary",
    value: "70",
  },
];

export const topProductBodyData = [
  {
    image: "1.png",
    status: "Hot",
    productName: "Women's Yellow top",
    amount: "$26.00",
    mainAmount: "$30.00",
    color: "primary",
  },
  {
    image: "2.png",
    productName: "Full Sleeve Men Jacket",
    amount: "$14.00",
    mainAmount: "$15.00",
  },
  {
    image: "3.png",
    status: "50%",
    color: "secondary",
    productName: "Full Sleeve Men Jacket",
    amount: "$30.00",
    mainAmount: "$35.00",
  },
];

export const stockReportData = [
  {
    amount: "$625,083",
    svgIcon: "arrow-chart-up",
    color: "success",
    percentage: "+34%",
    title: "Sales Account",
  },
  {
    amount: "36,900",
    svgIcon: "arrow-chart",
    color: "danger",
    percentage: "-14%",
    title: "General Leads",
  },
  {
    amount: "4,5%",
    svgIcon: "arrow-chart-up",
    color: "success",
    percentage: "+30%",
    title: "Churn Rate",
  },
  {
    amount: "8,640",
    svgIcon: "arrow-chart-up",
    color: "success",
    percentage: "+34%",
    title: "Returning Uses",
  },
];

export const topCategoriesDetailsData = [
    {
        color:"primary",
        percentage:"75%",
        title:"Electronics"
    },
    {
        color:"secondary",
        percentage:"46.8%",
        title:"Fashion Trends"
    },
    {
        color:"success",
        percentage:"17.8%",
        title:"Entertainment"
    }
]

export const manageOrderTableBodyData = [ 
    {
        image:"8.png",
        productName:"MacBook Pro",
        id:"36294",
        date:"15/08/23",
        price:"524",
        status:"In Stock",
        color:"primary",
        quantity:"15"
    },
    {
        image:"9.png",
        productName:"Mai Phone 12 Pro",
        id:"65448",
        date:"13/08/23",
        price:"450",
        status:"Low Stock",
        color:"success",
        quantity:"06"
    },
    {
        image:"10.png",
        productName:"Apple Watch",
        id:"35448",
        date:"15/08/23",
        price:"500",
        status:"In Stock",
        color:"primary",
        quantity:"20"
    },
    {
        image:"11.png",
        productName:"Apple Headphone",
        id:"95421",
        date:"10/08/23",
        price:"200",
        status:"Out of Stock",
        color:"danger",
        quantity:"12"
    }
]

export const totalRevenueData = [
  {
    icon:"Revenue",
    amount:"$73,927",
    title:"Total Revenue",
    arrowIcon:"arrow-chart-up",
    percentage:"+34%",
    chart:earningChartData,
    chartClass:"earning-chart",
    id:"earning-chart"
  },
  {
    icon:"Sales",
    amount:"24k USD",
    title:"Total Sales",
    arrowIcon:"arrow-chart",
    percentage:"-14%",
    chart:salesChartData,
    classExtra:"up-sales",
    chartClass:"sales-chart",
    id:"sales-chart"
  },
  {
    icon:"Customer",
    amount:"62,828",
    title:"Total Customer",
    arrowIcon:"arrow-chart",
    percentage:"-24%",
    chart:totalCustomerChart,
    classExtra:"total-customer",
    chartClass:"customer-chart",
    id:"total-customer-chart"
  },
  {
    icon:"Product",
    amount:"72,982",
    title:"Total Product",
    arrowIcon:"arrow-chart-up",
    percentage:"+42%",
    chart:totalProductChart,
    classExtra:"total-product",
    chartClass:"total-product-chart"
  }
]

export const openInvoicesTableBodyData = [
  {
    invoiceNo :"FV 00002/04/2024",
    image:"1.png",
    name:"Lena smith",
    email:"lena.smith@gmail.com",
    color:"primary",
    status:"Paid",
    amount:"$8,892.00",
    date:"Feb 20,2024"
  },
  {
    invoiceNo :"FV 00008/07/2024",
    image:"2.png",
    name:"Aliah Lain",
    email:"aliah.lain@gmail.com",
    color:"secondary",
    status:"Unpaid",
    amount:"$4,942.00",
    date:"Feb 14,2024"
  },
  {
    invoiceNo :"FV 00007/09/2024",
    image:"3.png",
    name:"Nicol Green",
    email:"nicol.green@gmail.com",
    color:"primary",
    status:"Paid",
    amount:"$3,753.00",
    date:"Feb 10,2024"
  },
  {
    invoiceNo :"FV 00009/04/2024",
    image:"4.png",
    name:"Paul Miller",
    email:"paul.miller@gmail.com",
    color:"danger",
    status:"Overdue",
    amount:"$2,852.00",
    date:"Feb 20,2024"
  }
]

export const trackOrderStatusData = [
  {
    image:"4.png",
    title:"Order Placed",
    detail:"We have received Your Order",
    date:"Jun20 05:40PM",
    color:"primary"
  },
  {
    image:"5.png",
    title:"Order Packed",
    detail:"Your Product Packed and ready to shipped",
    date:"Jun20 06:30PM",
    color:"secondary"
  },
  {
    image:"6.png",
    title:"On the way",
    detail:"Your Ordeis placed successfully.",
    date:"July 20",
  },
  {
    image:"7.png",
    title:"Product Deliverd",
    detail:"Our courier partner will deliver our stuff on July 3, 2024...",
  }
]