import { Card, Col, Container, Row } from 'reactstrap'
import NavClass from './NavClass/NavClass'
import { useAppDispatch } from '../../../ReduxToolkit/Hooks';
import TabClass from './TabClass/TabClass';
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs';
import { Apps, TasksHeading } from '../../../utils/Constant';
import { setActiveTab } from '../../../ReduxToolkit/Reducers/TasksSlice';
import ProjectListHeaderSubmenu from '../Project/ProjectList/ProjectListHeaderSubmenu';

const TasksContainer = () => {
  const dispatch = useAppDispatch()
  const activeToggle = (tab: string) => {
    dispatch(setActiveTab(tab));
  };
  return (
    <>
      <Breadcrumbs mainTitle={TasksHeading} parent={Apps} />
      <Container fluid>
        <div className="email-wrap bookmark-wrap">
          <Row>
            <Col md="12" className="project-list">
              <Card>
                <Row>
                  <ProjectListHeaderSubmenu/>
                </Row>
              </Card>
            </Col>
            <NavClass activeToggle={activeToggle} />
            <TabClass />
          </Row>
        </div>
      </Container>
    </>
  )
}

export default TasksContainer