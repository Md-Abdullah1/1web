import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { LI } from "../../../../../../AbstractElements";
import { useState } from "react";
import { dropMenuData } from "../../../../../../Data/Application/Email/LetterBox/LetterBox";

const RightDropDown = () => {
  const [show,setShow] = useState(false)
  const toggle = () => setShow((prevState) => !prevState);
  return (
    <>
    <Dropdown isOpen={show} toggle={toggle}>
      <DropdownToggle color="" className={`light-square`}>
        <i className="fa fa-ellipsis-v" />
      </DropdownToggle>
      <DropdownMenu end className={`dropdown-block`}>
        {dropMenuData.map((data, i) => (
          <LI key={i}>
            <DropdownItem>{data}</DropdownItem>
          </LI>
        ))}
      </DropdownMenu>
    </Dropdown>
    </>
  );
};

export default RightDropDown;
