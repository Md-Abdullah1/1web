import { Col } from 'reactstrap'
import { Badges, H3, Image, P, Progressbar } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Done } from '../../../../../utils/Constant'
import ProjectDetails from './ProjectDetails'
import ProjectCustomers from './ProjectCustomers'
import { CommonProjectInterFace } from '../../../../../Types/Application/ProjectList/ProjectList'

const ProjectCommon = ({ item }: CommonProjectInterFace) => {
  return (
    <Col xxl="4" md="6" className='box-col-33'>
      <div className={`project-box`}>
        <Badges color={`${item.badge === 'Done' ? 'success' : 'danger'}`}>{item.badge}</Badges>
        <H3>{item.title}</H3>
        <div className='d-flex'>
          <Image className='img-20 me-1 rounded-circle' src={dynamicImage(`user/${item.image}`)} alt='images' />
          <div className="flex-grow-1">
            <P className="mb-0">{item.sites}</P>
          </div>
        </div>
        <P>{item.description}</P>
        <ProjectDetails item={item}/>
        <ProjectCustomers item={item}/>
        <div className='project-status mt-4'>
          <div className='d-flex mb-0'>
            <P>{item.progress}% </P>
            <div className="flex-grow-1 text-end">{Done}</div>
          </div>
          <Progressbar animated={item.progress !== 100 ? true : false} color={item.progress === 100 ? 'success' : 'danger'} value={item.progress} style={{ height: '5px' }} />
        </div>
      </div>
    </Col>
  )
}

export default ProjectCommon