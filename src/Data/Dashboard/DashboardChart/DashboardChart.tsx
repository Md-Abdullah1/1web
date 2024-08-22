import { ApexOptions } from "apexcharts";
import ConfigDB from "../../../Config/ThemeConfig";

const primary = ConfigDB.data.color.primary_color;
const secondary = ConfigDB.data.color.secondary_color;

export const earningsChartData: ApexOptions = {
  series: [
    {
      name: "Earnings",
      data: [25, 16, 27, 22, 22, 18, 22, 12, 16, 16, 30, 22, 32],
    },
  ],
  chart: {
    type: "area",
    height: 203,
    offsetY: -30,
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 5,
      left: 0,
      blur: 2,
      color: "var(--theme-default)",
      opacity: 0.2,
    },
  },
  colors: ["#5C61F2"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.2,
      stops: [0, 100, 100],
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "var(--theme-default)",
        strokeColor: "#fff",
        size: 6,
        shape: "circle",
      },
    ],
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Project Created" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export const expensesChartData: ApexOptions = {
  series: [
    {
      name: "Earning",
      data: [92, 64, 43, 80, 58, 92, 46, 76],
    },
    {
      name: "Earning",
      data: [20, 48, 69, 32, 54, 20, 66, 36],
    },
  ],
  chart: {
    type: "bar",
    offsetY: -10,
    toolbar: {
      show: false,
    },
    height: 203,
    stacked: true,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 3,
      columnWidth: "35%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
    colors: ["var(--theme-secondary)", "#F2F5FA"],
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Expenses" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export const orderOverviewChartData: ApexOptions = {
  series: [
    {
      name: "Earning",
      type: "area",
      data: [
        55, 44, 47, 44, 50, 50, 55, 45, 32, 50, 60, 32, 38, 45, 40, 40, 50,
      ],
    },
    {
      name: "Order",
      type: "line",
      data: [54, 64, 40, 50, 60, 80, 60, 70, 62, 50, 45, 40, 60, 65, 70],
    },
  ],
  chart: {
    height: 250,
    type: "line",
    stacked: false,
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 2,
      left: 4,
      blur: 4,
      color: "#000",
      opacity: 0.08,
    },
  },
  stroke: {
    width: [2, 2],
    curve: "smooth",
    dashArray: [0, 8],
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true,
      },
    },
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "50%",
    },
  },
  colors: ["#7064F5", "#FF9766"],
  fill: {
    type: ["gradient", "solid"],
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.4,
      opacityTo: 0,
      stops: [0, 100],
    },
  },
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Aug",
    "Sep",
  ],
  markers: {
    discrete: [
      {
        seriesIndex: 0,
        dataPointIndex: 6,
        fillColor: "#7064F5",
        strokeColor: "var(--white)",
        size: 5,
      },
    ],
    hover: {
      size: 5,
      sizeOffset: 0,
    },
  },
  xaxis: {
    type: "category",
    tickAmount: 4,
    tickPlacement: "between",
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      color: "var(--chart-border)",
    },
    axisTicks: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  yaxis: {
    show: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
};

export const orderBarChartData: ApexOptions = {
  series: [
    {
      name: "Revenue",
      data: [
        72, 72, 63, 62, 66, 66, 66, 64, 51, 51, 64, 65, 38, 38, 36, 36, 55, 55,
        50, 50, 32, 32, 50, 50, 70, 70, 62, 62, 48, 48, 57, 57, 63, 63, 75, 75,
        58, 58, 72, 72, 58, 58, 72, 72, 112, 112, 72, 72, 63, 62, 66, 66, 66,
        64, 51, 51, 64, 65, 38, 38, 36, 36, 115, 115,
      ],
    },
  ],
  chart: {
    type: "bar",
    height: 180,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 4,
      columnWidth: "60%",
    },
  },
  colors: ["var(--light-bg)"],
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  fill: {
    opacity: 0.7,
  },
  tooltip: {
    enabled: false,
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
  responsive: [
    {
      breakpoint: 405,
      options: {
        chart: {
          height: 150,
        },
      },
    },
  ],
};

export const growthChartData: ApexOptions = {
  series: [
    {
      name: "TEAM A",
      type: "column",
      data: [190, 0, 240, 0, 270, 0, 220, 0, 190, 0, 250, 0, 250, 0, 270, 0, 240,],
    },
    {
      name: "TEAM B",
      type: "area",
      data: [ 220 , 150, 280, 70, 250, 130, 250, 50, 290 , 90 , 160 , 90 , 160 , 250 , 90 , 225 , 225,],
    },
  ],
  chart: {
    height: 250,
    type: "area",
    stacked: false,
    toolbar: {
      show: false, 
    },
    // dropShadow: {
    //   enabled: true,
    //   top: 5,
    //   left: 4,
    //   blur: 2,
    //   color: "#5C61F2",
    //   opacity: 0.5,
    // },
  },
  stroke: {
    width: [0, 2, 5],
    curve: "stepline",
  },
  plotOptions: {
    bar: { 
      columnWidth: "20px",
    },
  },
  colors: ["#bebebe", "#5C61F2"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1, 
      opacityFrom: 0.5,
      opacityTo: 0.1,
      stops: [0, 90, 100],
    },
  },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "",
      "feb",
      "",
      "Mar",
      "",
      "Apr",
      "",
      "May",
      "",
      "Jun",
      "",
      "July",
      "",
      "Aug",
      "",
      "Sep",
    ],
    labels: {
      style: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 600,
        colors: "#959595",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      style: {
        fontFamily: "Lexend, sans-serif",
        fontWeight: 600,
        colors: "#171829",
      },
    },
  },
  legend: {
    show: false,
  },
};

export const dailyVisitorsChartData: ApexOptions = {
  chart: {
    height: 250 ,
    type: "area",
    toolbar: { 
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  series: [
    {
      name: "series1",
      data: [0, 40, 25, 80, 35, 40, 38, 50, 35, 70, 50, 100, 0],
    },
    {
      name: "series2",
      data: [5, 50, 70, 55, 78, 45, 100, 80, 85, 60, 35, 80, 0],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
      "jan",
    ],
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "14px",
        colors: "$black",
        fontWeight: 500,
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  legend: {
    show: false,
  },
  fill: {
    colors: ["#5C61F2", "#FF9766"],
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.3,
      stops: [0, 90, 100],
    },
  },
  colors: ["#5C61F2", "#FF9766"],
};

export const reportChartData: ApexOptions = {
  chart: {
    height: 285,
    type: "bar",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 3,
    colors: ["transparent"],
  },
  series: [
    {
      name: "Sales Account",
      data: [162, 85, 26, 101, 185, 108, 157, 58, 26, 101, 102, 101],
    },
    {
      name: "General Leads",
      data: [117, 117, 83, 139, 56, 85, 117, 117, 83, 139, 56, 139],
    },
    {
      name: "Churn Rate",
      data: [31, 56, 164, 85, 128, 31, 31, 56, 164, 85, 128, 85],
    },
  ],
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
  colors: ["var(--theme-default)", "var(--theme-secondary)", "#51bb25"],
};

export const productSalesChartData: ApexOptions = {
  series: [
    {
      name: "Product Sales",
      data: [
        5, 15, 65, 40, 39, 50, 35, 38, 47, 40, 90, 58, 65, 70, 75, 70, 67, 30,
        69, 65, 75, 72, 65, 72, 95, 50, 45, 57, 54, 48, 53, 60, 25, 30,
      ],
    },
  ],
  chart: {
    height: 270,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
    width: 3,
  },
  colors: ["#5C61F2"],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.2, 
      stops: [0, 100, 100],
    },
  },
  grid: {
    row: {
      colors: ["transparent"], // takes an array which will be repeated on columns
      opacity: 0.5,
    },
  },
  xaxis: {
    categories: [
      "12:00",
      "15:00",
      "18:00",
      "21:00",
      "03:00",
      "04:00",
      "18:00",
      "15:00",
      "15:00",
      "18:00",
      "21:00",
      "03:00",
      "04:00",
      "18:00",
      "15:00",
      "15:00",
      "18:00",
      "21:00",
      "03:00",
      "04:00",
      "18:00",
      "15:00",
      "15:00",
      "18:00",
      "21:00",
      "03:00",
      "04:00",
      "18:00",
      "15:00",
      "18:00",
      "15:00",
      "15:00",
      "18:00",
    ],
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        fontSize: "14px",
        colors: "#171829",
        fontWeight: "500",
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Product Sales" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export const topCategoriesChartData: ApexOptions = {
  series: [80, 55, 44],
  chart: {
    type: "donut",
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
      startAngle: -90,
      endAngle: 90,
      offsetY: 10,
      donut: {
        size: "75%",
        labels: {
          show: true,
          name: {
            offsetY: -10,
          },
          value: {
            offsetY: -50,
          },
          total: {
            show: true,
            fontSize: "18px",
            fontFamily: "Outfit",
            fontWeight: 500,
            label: "Product Sales",
            color: "#959595",
            formatter: (w) => "14,937",
          },
        },
      },
      customScale: 1,
      offsetX: 0,
    },
  },
  grid: {
    padding: {
      bottom: -120,
    },
  },
  colors: ["var(--theme-default)", "var(--theme-secondary)", "#61AE41"],
  responsive: [
    {
      breakpoint: 1800,
      options: {
        chart: {
          height: 392,
        },
      },
    },
    {
      breakpoint: 1601,
      options: {
        chart: {
          height: 350,
        },
      },
    },
    {
      breakpoint: 1401,
      options: {
        chart: {
          height: 275,
        },
      },
    },
  ],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
};

export const earningChartData: ApexOptions = {
  series: [
    {
      name: "Revenue",
      data: [92, 64, 43, 80, 58, 92, 46, 76, 80],
    },
    {
      name: "Revenue",
      data: [20, 48, 69, 32, 54, 20, 66, 36, 32],
    },
  ],
  chart: {
    type: "bar",
    offsetY: 30,
    toolbar: {
      show: false,
    },
    height: 100,
    stacked: true,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 3,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  fill: {
    opacity: 1,
    colors: ["var(--theme-default)", "#dedffc"],
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex }) {
      return (
        '<div class="apex-tooltip p-2">' +
        "<span>" +
        '<span class="bg-primary">' +
        "</span>" +
        "Revenue" +
        "<h3>" +
        "$" +
        series[seriesIndex][dataPointIndex] +
        "<h3/>" +
        "</span>" +
        "</div>"
      );
    },
  },
};

export const salesChartData : ApexOptions ={
  series: [{
    name: "Sales",
    data: [15, 25, 20, 35, 16, 18 , 10 , 22 , 18 , 25 , 17],
}],
  chart: {
  type: 'area',
  height: 100,
  offsetY: 50,
  zoom: {
    enabled: false
  },
  toolbar: {
    show: false,
  }, 
  dropShadow: {
    enabled: true,
    top: 5,
    left: 0,
    blur: 2,
    color: "#FF9766",
    opacity: 0.2,
  },
}, 
colors: ["#FF9766"],
fill: { 
  type: "gradient", 
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.6,
    opacityTo: 0.2,
    stops: [0, 100, 100]
  }
},
dataLabels: {
  enabled: false
},
grid: {
  show: false,
},
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: 'smooth',
    width: 2,
  },
  tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex,}) {
        return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Sales' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
      },
    },
};

export const totalCustomerChart :ApexOptions = {
  series: [{
    name: "Desktops",
    data: [10, 35, 15, 78, 40, 60, 12, 60],
}],
  chart: {
  type: 'area',
  height: 100,
  offsetY: 30,
  zoom: {
    enabled: false
  },
  toolbar: {
    show: false,
  }, 
  dropShadow: {
    enabled: true,
    top: 5,
    left: 0,
    blur: 2,
    color: '#61AE41',
    opacity: 0.2,
  },
},
colors: ['#61AE41'],
fill: {
  type: "gradient",
  gradient: {
    shadeIntensity: 1,
    opacityFrom: 0.6,
    opacityTo: 0.2,
    stops: [0, 100, 100]
  }
},
dataLabels: {
  enabled: false
},
grid: {
  show: false,
},
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  stroke: {
    curve: 'straight',
    width: 2,
  },
  tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex,}) {
        return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'customer' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
      },
    },
};

export const totalProductChart :ApexOptions = {
  series: [80],
  chart: {
    type: 'radialBar',
    offsetY: 40,
    height: 170, 
    sparkline: {
      enabled: false,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: '55%',
      },
      track: {
        background: "#daeef7",
        strokeWidth: '120%',
      },
      dataLabels: {
        name: {
          show: false,
          color: 'var(--title)',
          fontSize: '17px',
        },
        value: {
          offsetY: -2,
          fontSize: '22px',
        }
      }
    }
  },
  xaxis: {
  },
  stroke: {
    lineCap: 'round'
  },
  colors: ['#44A8D7'],
};

export const companyViewChartData : ApexOptions = {
  series: [
    {
      name: "This Month ",
      type: "area",
      data: [215, 260, 360, 420, 320, 280, 360]
    },
    {
      name: "This Month",
      type: "area",
      data: [90, 130, 280, 350, 400, 350, 400],
    },
  ],
  chart: {
    height: 315,
    type: "area",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: [3, 3],
    curve: "straight",
    dashArray: [0, 6],
  },
  colors: [ "var(--theme-secondary)" , "var(--theme-default)" ],
  markers: {
    discrete: [{
      seriesIndex: 0,
      dataPointIndex: 0,
      fillColor: "#fff",
      strokeColor: "var(--theme-secondary)",
      size: 5,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 1,
      fillColor: "#fff",
      strokeColor: "var(--theme-secondary)",
      size: 5,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 2,
      fillColor: "#fff",
      strokeColor: "var(--theme-secondary)",
      size: 5,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 3,
      fillColor: "#fff",
      strokeColor: "var(--theme-secondary)",
      size: 5,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 4,
      fillColor: "#fff",
      strokeColor: "var(--theme-secondary)",
      size: 5,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 5,
      fillColor: "#fff",
      strokeColor: "var(--theme-secondary)",
      size: 5,
      shape: "circle"
    },
    {
      seriesIndex: 0,
      dataPointIndex: 6,
      fillColor: "#fff",
      strokeColor: "var(--theme-secondary)",
      size: 5,
      shape: "circle"
    },
    ],
  },
  xaxis: {
    categories: [
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
      "Sun",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + "" + "k";
      },
      style: {
        fontSize: "14px",
        colors: "$black",
        fontWeight: 500,
        fontFamily: "Lexend, sans-serif",
      },
    },
  },
  fill: {
    colors: [ "#FF9766" , "#5C61F2" ],
    type: ["gradient", "gradient"],
    gradient: {
      shade: "light",
      type: "vertical",
      opacityFrom: 0.5,
      opacityTo: 0.1, 
      stops: [0, 100 , 0 , 0],
    },
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  legend: {
    show: false,
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex,}) {
      return '<div class="apex-tooltip p-2">' + '<span>' + '<span class="bg-primary">' + '</span>' + 'Deliveries' + '<h3>' + '$'+ series[seriesIndex][dataPointIndex] + '<h3/>'  + '</span>' + '</div>';
    },
  },
};


function generateData(baseval:any, count:any, yrange:any) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([baseval, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}
export const statisticsChartData :ApexOptions={
  chart: {
      height: 252,
      type: "bubble",
      toolbar: {
          show: false,
      },
  },
  dataLabels: {
      enabled: false,
  },
  series: [
      {
          name: "Product1",
          data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
              min: 20,
              max: 55,
          }),
      },
      {
          name: "Product2",
          data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
              min: 10,
              max: 55,
          }),
      },
      {
          name: "Product3",
          data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
              min: 10,
              max: 55,
          }),
      },
      {
          name: "Product4",
          data: generateData(new Date("01 Jan 2023 GMT").getTime(), 20, {
              min: 10,
              max: 55,
          }),
      },
  ],
  fill: {
      type: "gradient",
  },
  legend: {
      show: false,
  },
  xaxis: {
      tickAmount: 12,
      type: "datetime",
      labels: {
        rotate: 0,
        style: {
          fontSize: "13px",
          colors: "#959595",
          fontFamily: "Lexend, sans-serif",
        },
      },
      axisBorder: {
        show: false
        },
  },
  theme: {
      palette: "palette2",
  },
  colors: ["var(--theme-default)", "var(--theme-secondary)", "#61AE41"],
  tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          var data = w.globals.initialSeries[seriesIndex].data[dataPointIndex];
          return '<ul class="p-2">' +
              '<li><b>Order</b>: ' + w.globals.labels[dataPointIndex] + '</li>' +
              '</ul>';
      }
  }
};

export const totalRevenueChartData :ApexOptions={
  series: [
    {
      name: "Earning",
      data: [78, 45, 60, 78, 78, 45, 25, 50 ,60, 60, 78, 40],
    },
    {
      name: "Expense",
      data: [-70, -70, -40, -30, -70, -30, -25, -45, -40, -50, -70, -50],
    },
  ],
  chart: {
    type: "bar",
    height: 316,
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  colors: ["var(--theme-default)", "var(--theme-secondary)"],
  plotOptions: {
    bar: {
      columnWidth: "80%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  stroke: {
    width: 10,
    colors: ["#fff"]
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          colors: "$black",
          fontWeight: 500,
          fontFamily: "Lexend, sans-serif",
        },
      },
    },
  xaxis: {
  categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct" , "Nov" , "Dec"],
  labels: {
      style: {
        fontSize: "13px",
        colors: "#959595",
        fontFamily: "Lexend, sans-serif",
      },
  },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1501,
      options: {
        chart: {
          height: 298,
        },
      },
    },
    {
      breakpoint: 480,
      options: {
        plotOptions: {
          bar: {
            columnWidth: "150%",
          },
        },
      },
    },
  ],
};

export const monthlyChart:ApexOptions =  {
  series: [
    {
      name: "Total",
      data: [10, 5, 10, 7, 40, 20, 30, 27, 40]
    },
  ],
  chart: {
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: [primary],
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.4,
      opacityTo: 0.2,
      stops: [0, 100, 100]
    }
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
    curve: "smooth",
  },
  grid: {
    show: false,
  },
  tooltip: {
    x: {
      show: false,
    },
    marker: {
      show: false,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
};

export const memberChartData:ApexOptions = {
  series: [5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 80,
    width: 80,
  },
  colors: [
    primary,
    primary,
    primary,
    primary,
    primary,
    primary,
    primary,
    primary,
    primary,
    "#ced0fb",
    "#ced0fb",
    "#ced0fb",
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
    colors: ["var(--white)"],
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
};

export const memberChartDataTwo:ApexOptions = {
  series: [5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 80,
    width: 80,
  },
  colors: [
    secondary,
    secondary,
    secondary,
    secondary,
    secondary,
    secondary,
    secondary,
    "#ffe0d1",
    "#ffe0d1",
    "#ffe0d1",
    "#ffe0d1",
    "#ffe0d1",
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
    colors: ["var(--white)"],
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
};

export const memberChartDataThree:ApexOptions = {
  series: [5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 80,
    width: 80,
  },
  colors: [
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#61AE41",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
    "#d0e7c6",
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
    colors: ["var(--white)"],
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
};

export const memberChartDataFour:ApexOptions = {
  series: [5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5],
  chart: {
    type: "donut",
    height: 80,
    width: 80,
  },
  colors: [
    "#F81F58",
    "#F81F58",
    "#F81F58",
    "#F81F58",
    "#F81F58",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd",
    "#fdbccd"
  ],
  legend: {
    show: false,
  },
  stroke: {
    width: 1,
    colors: ["var(--white)"],
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          value: {
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
            fontWeight: 400,
            color: "#000",
            offsetY: -12,
          },
          total: {
            show: true,
            showAlways: false,
            label: "Total",
            fontSize: "11px",
            fontFamily: "Rubik, sans-serif",
          },
        },
      },
    },
  },
  states: {
    normal: {
      filter: {
        type: "none",
      },
    },
    hover: {
      filter: {
        type: "none",
      },
    },
    active: {
      allowMultipleDataPointsSelection: false,
      filter: {
        type: "none",
      },
    },
  },
};