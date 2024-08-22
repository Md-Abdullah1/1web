import { Nav, NavItem, NavLink } from "reactstrap";
import { H6 } from "../../../../AbstractElements";
import { All, Archive, Following, Href } from "../../../../utils/Constant";

const NotificationsTab = ({setNavId,navId}:any) => {
  return (
    <div className="d-flex header-tab">
      <Nav tabs className="border-tab mb-0" id="bottom-tab">
        <NavItem >
          <NavLink className="nav-border tab-primary pt-0" href={Href} active={navId === 1 ? true : false} onClick={()=>setNavId(1)}>
            {All}<span className="ms-2 bg-primary">3</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-border tab-primary" href={Href} active={navId === 2 ? true : false} onClick={()=>setNavId(2)}>
            {Following}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="nav-border tab-primary" href={Href} active={navId === 3 ? true : false} onClick={()=>setNavId(3)}>
            {Archive}
          </NavLink>
        </NavItem>
      </Nav>
      <H6>Mark all as read</H6>
    </div>
  );
};

export default NotificationsTab;
