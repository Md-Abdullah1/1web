import { FeatherIcons, H3, Image, P } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { TimelineDataType } from '../../../../../Types/Application/SocialApp/SocialApp'

const NewUsersSocial = ({data} : TimelineDataType) => {
  return (
    <div className="new-users-social">
      <div className='d-flex align-items-center'>
        <Image className="rounded-circle image-radius m-r-15" src={dynamicImage("user/1.jpg")} alt="user121"/>
        <div className='flex-grow-1'>
          <H3 className="mb-0 f-w-700">{data.name}</H3>
          <P>{data.date}</P>
        </div>
        <span className="pull-right mt-0">
          <FeatherIcons iconName='MoreVertical'/>
        </span>
      </div>
    </div>
  )
}

export default NewUsersSocial