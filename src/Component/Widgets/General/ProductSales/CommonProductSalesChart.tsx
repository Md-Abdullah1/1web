import ReactApexChart from 'react-apexcharts'
import { productSalesChartData } from '../../../../Data/Dashboard/DashboardChart/DashboardChart'
import { CommonDailyVisitorsChartType } from '../../../../Types/Dashborad/EcommerceDashboard'

const CommonProductSalesChart = ({height}:CommonDailyVisitorsChartType) => {
  return (
    <ReactApexChart options={productSalesChartData} series={productSalesChartData.series} height={height} type="area" />
  )
}

export default CommonProductSalesChart