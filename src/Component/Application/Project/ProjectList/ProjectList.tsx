import { Card, Col, Container, Row } from 'reactstrap'
import ProjectListTabContent from './ProjectListTabContent'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Project, ProjectListHeading } from '../../../../utils/Constant'
import CreateNewProject from './CreateNewProject'
import ProjectListHeaderSubmenu from './ProjectListHeaderSubmenu'
import { CardHeader  } from 'reactstrap'
import { links } from '../../../../Data/Tools/BrandSupportTools/ButtonActions';
import { Link } from 'react-router-dom'
import SubMenu from '../../SubMenu/SubMenu'


const ProjectListContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectListHeading} parent={Project} />
      <SubMenu />
      <Container fluid>
        <Row className="project-cards">
          <Col md="12" className="project-list">
          <Card> 
            <Row>
              <ProjectListHeaderSubmenu/>
              
              <CreateNewProject />
            </Row>
          </Card>
          </Col>
          <Col sm="12">
            <ProjectListTabContent />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ProjectListContainer