import { TabContent, TabPane } from "reactstrap";
import { notificationsThreeTabContentData } from "../../../../Data/Dashboard/Default/Default";
import { H5, Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";

const NotificationsTwoTabContent = ({navId}:any) => {
  return (
    <TabContent activeTab={navId} className="content-tab">
      <TabPane tabId={2} >
      {notificationsThreeTabContentData.map((data, i) => (
          <div className={`d-flex align-items-center ${i === 3 ? "figma-line" : ""}`} key={i}>
            <Image src={dynamicImage(`dashboard/user/${data.image}`)} alt="product" />
            <div className="flex-grow-1 ms-2">
              <Link to={Href}>
                <H5>{data.name}</H5>
                <span>{data.time}</span>
              </Link>
            </div>
            {data.dot &&
              <div className="flex-shrink-0">
                <div className="activity-dot-primary" />
              </div>
            }
          </div>
        ))}
      </TabPane>
    </TabContent>
  );
};

export default NotificationsTwoTabContent;
