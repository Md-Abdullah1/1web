import { Badges, H3 } from '../../../../../AbstractElements'
import { Messages, MyPage, Notification } from '../../../../../utils/Constant'

const MessagesAndNotification = () => {
  return (
    <div className='flex-grow-1'>
      <H3 className="font-primary">{MyPage}</H3>
      <span className="d-block">
        <span>
          <i className="fa fa-comments-o"> </i>
          <span className="px-2">
            {Messages} <Badges pill color="light" className='ms-2'>9</Badges>
          </span>
        </span>
      </span>
      <span className="d-block">
        <span>
          <i className="fa fa-bell-o"> </i>
          <span className="px-2">
            {Notification} <Badges pill color="light" className='ms-2'>9</Badges>
          </span>
        </span>
      </span>
    </div>
  )
}

export default MessagesAndNotification