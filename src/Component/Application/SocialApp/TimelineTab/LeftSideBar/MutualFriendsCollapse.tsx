import { CardBody, Collapse } from 'reactstrap'
import { mutualFriendData } from '../../../../../Data/Application/SocialApp/SocialApp'
import { Image } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { FilterPropsType } from '../../../../../Types/Application/SocialApp/SocialApp'

const MutualFriendsCollapse = ({ isFilter }: FilterPropsType) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {mutualFriendData.map((data, index) => (
          <div className='d-flex' key={index}>
            <Image className="img-50 rounded-circle m-r-15" src={dynamicImage(`user/${data.imageName}`)} alt="user" />
            <div className={`social-status ${data.socialClass}`} />
            <div className='flex-grow-1'>
              <span className="d-block">{data.title}</span>
              <span className="d-block">{data.email}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  )
}

export default MutualFriendsCollapse