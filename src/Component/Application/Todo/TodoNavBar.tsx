import { Nav, NavItem } from "reactstrap";
import { Badges, Btn, FeatherIcons } from "../../../AbstractElements";
import { CheckCircle } from "react-feather";
import { Completed, Href, ToDoList } from "../../../utils/Constant";
import { sideBartList } from "../../../Data/Application/Todo/Todo";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../../ReduxToolkit/Hooks";

const TodoNavBar = () => {
  const [status,setStatus] = useState([{}])
  const {todoList} = useAppSelector((state)=> state.todo)
  useEffect(()=>{
    setStatus(todoList.filter((data)=> data.status === "completed" ? data : ""))
  },[todoList])
  return (
    <Nav className="main-menu">
      <NavItem>
        <Btn color="primary" block className="badge-light btn-mail">
          <CheckCircle className="me-2" /> {ToDoList}
        </Btn>
      </NavItem>
      {sideBartList.map((data, index) => (
        <NavItem key={index}>
          <Link to={Href}>
            <span className={`iconbg badge-light-${data.color}`}>
              <FeatherIcons iconName={data.icon} />
            </span>
            <span className="title ms-2">{data.tittle}</span>
            {data.badge && status && (
              <Badges pill color={data.tittle === "In Process"? "primary": data.color} className="text-white">{data.tittle === Completed ? status.length : todoList.length- status.length}</Badges>
            )}
          </Link>
        </NavItem>
      ))}
    </Nav>
  );
};

export default TodoNavBar;
