import { Nav, NavItem, NavLink } from "reactstrap";
import { Badges, SVG } from "../../../../../AbstractElements";
import { useAppSelector } from "../../../../../ReduxToolkit/Hooks";
import AddLabel from "./AddLabel";
import { Href, Inbox } from "../../../../../utils/Constant";
import { letterBoxSidebar } from "../../../../../Data/Application/Email/LetterBox/LetterBox";
import { LetterBoxNavType } from "../../../../../Types/Application/Email/LetterBox/LetterBox";

const EmailNavMenu: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const {starredValue} = useAppSelector((state)=>state.letterBox)
  let starBadges = starredValue.filter((data)=> data.star === true && 1)
  return (
    <Nav pills tabs className="main-menu email-category border-bottom-0">
      {letterBoxSidebar.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={data.id} onClick={()=>setNavId(data.id)} href={Href}>
            <SVG className={`stroke-icon ${data.color ? `stroke-${data.color}` : ""}`} iconId={data.icon} />
            <div>
              {data.title}
              {data.badge && <Badges color="">{data.title === Inbox ? starredValue.length : starBadges.length}</Badges>}
            </div>
          </NavLink>
        </NavItem>
      ))}
      <AddLabel />
    </Nav>
  );
};

export default EmailNavMenu;
