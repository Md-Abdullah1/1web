import { Card, CardBody, Col } from "reactstrap";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";

const TodoBody = () => {
  return (
    <Col xxl="9" xl="8" className="box-col-8">
      <Card>
        <TodoHeader />
        <CardBody>
          <div className="todo">
            <div className="todo-list-wrapper theme-scrollbar">
              <div className="todo-list-container">
                <TodoList />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TodoBody;
