import { useState } from "react";
import { Btn } from "../../../AbstractElements";
import { Card, CardBody, Col } from "reactstrap";
import { ToDoFilter } from "../../../utils/Constant";
import UserDetail from "./UserDetail";
import TodoNavBar from "./TodoNavBar";

const TodoSideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <Col xxl="3" xl="4" className="box-col-4e">
      <div className="email-sidebar md-sidebar">
        <Btn color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={() => setShowSideBar(!showSideBar)}>
          {ToDoFilter}
        </Btn>
        <div className={`email-left-aside md-sidebar-aside ${ showSideBar ? "open" : "" }`} >
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark custom-scrollbar">
                <UserDetail />
                <TodoNavBar />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default TodoSideBar;
