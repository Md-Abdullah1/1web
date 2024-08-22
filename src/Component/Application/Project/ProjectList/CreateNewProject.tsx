import { Link } from 'react-router-dom'
import { Col } from 'reactstrap'
import { CreateNewProjects } from '../../../../utils/Constant'
import { FeatherIcons } from '../../../../AbstractElements'

const CreateNewProject = () => {
  return (
    <Col md="6" className='p-0'>
      <Link className="btn btn-primary" to={`${process.env.PUBLIC_URL}/tools//project-list/new-project`} >
        <FeatherIcons iconName='PlusSquare' /> {CreateNewProjects}
      </Link>
    </Col>
  )
}

export default CreateNewProject