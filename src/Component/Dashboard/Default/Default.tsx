import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, DefaultDashboard } from "../../../utils/Constant";
import WelcomeCard from "./WelcomeCard/WelcomeCard";
import TotalEarnings from "./TotalEarnings/TotalEarnings";
import TotalExpenses from "./TotalExpenses/TotalExpenses";
import TopSellingProduct from "./TopSellingProduct/TopSellingProduct";
import RecentOrder from "./RecentOrder/RecentOrder";
import OurGrowth from "./OurGrowth/OurGrowth";
import ProductValuation from "./ProductValuation/ProductValuation";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Notifications from "./Notifications/Notifications";
import UserByCountry from "./UserByCountry/UserByCountry";
import Schedule from "./Schedule/Schedule";
import PageHeader from "./PageHeader/PageHeader";

const ContainerDefault = () => {
  return (
    <>
      <Breadcrumbs mainTitle={DefaultDashboard} parent={Dashboard} />
      <Container fluid className="default-dashboard">
        <Row>
          <PageHeader />
          <WelcomeCard />
          <TotalEarnings />
          <TotalExpenses />
          <TopSellingProduct />
          <RecentOrder />
          <OurGrowth />
          <ProductValuation />
          <TransactionHistory />
          <Notifications />
          <UserByCountry />
          <Schedule />
        </Row>
      </Container>
    </>
  );
};

export default ContainerDefault;
