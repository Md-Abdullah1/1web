import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { SVG } from "../../../../../AbstractElements";

const ChatDropMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
      <DropdownToggle color="transparent" className="dropdown-form">
        <i className="icon-plus" />
      </DropdownToggle>
      <DropdownMenu className="chat-icon dropdown-menu-start">
        <DropdownItem tag='div' className="mb-2">
          <SVG iconId="camera" />
        </DropdownItem>
        <DropdownItem tag='div'>
          <SVG iconId="attchment" />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default ChatDropMenu;