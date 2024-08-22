import { TabContent, TabPane } from "reactstrap";
import { Btn, H5, H6, Image, SVG } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";

const NotificationsFirstTabContent = ({navId}:any) => {
  return (
    <TabContent activeTab={navId} className="content-tab">
      <TabPane tabId={1} >
        <div className="d-flex align-items-center">
          <Image src={dynamicImage(`dashboard/user/5.png`)} alt="product" />
          <div className="flex-grow-1 ms-2">
            <Link to={Href}>
              <H5>
                Ralph Edwards <strong> wants to edit </strong> tetrisly design
                system
              </H5>
              <span>2hrs Ago</span>
            </Link>
            <Btn color="secondary" className="mt-1 mb-1 me-2">Decline</Btn>
            <Btn color="primary" className="mt-1 mb-1">Accept</Btn> 
          </div>
          <div className="flex-shrink-0">
            <div className="activity-dot-primary" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <Image src={dynamicImage(`dashboard/user/6.png`)} alt="product" />
          <div className="flex-grow-1 ms-2">
            <Link to={Href}>
              <H5>
                Jenny Wilson <strong> Completed </strong> Create new component
              </H5>
              <span>2.15pm</span>
            </Link>
          </div>
          <div className="flex-shrink-0">
            <div className="activity-dot-secondary" />
          </div>
        </div>
        <div className="d-flex align-items-center figma-line">
          <Image src={dynamicImage(`dashboard/user/7.png`)} alt="product" />
          <div className="flex-grow-1 ms-2">
            <Link to={Href}>
              <H5>Jenny Wilson mentioned you in rewrite button component</H5>
              <span>3.10pm</span>
            </Link>
          </div>
        </div>
        <div className="figma-icon">
          <SVG className="me-2" iconId="file" />
          <div className="flex-shrink-0">
            <H6>Tet_Dark_Mode_L103.fig</H6>
            <span>2.4 MB</span>
          </div>
        </div>
      </TabPane>
    </TabContent>
  );
};

export default NotificationsFirstTabContent;
