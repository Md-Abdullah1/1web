import { Card, Col, Container, Row } from 'reactstrap'
import TodoSideBar from './TodoSideBar'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Apps, ToDoHeading } from '../../../utils/Constant'
import TodoBody from './TodoBody'
import ProjectListHeaderSubmenu from '../Project/ProjectList/ProjectListHeaderSubmenu'

const TodoContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ToDoHeading} parent={Apps} />
      <Container fluid className="email-wrap bookmark-wrap todo-wrap">
        <Row>
          <Col md="12">
            <Card>
              <Row>
                <ProjectListHeaderSubmenu/>
              </Row>
            </Card>
          </Col>
          <TodoSideBar />
          <TodoBody />
        </Row>
      </Container>
    </>
  )
}

export default TodoContainer