import { organizationList } from '../../../../../Data/Application/Contacts/Contacts'
import { TabPane } from 'reactstrap'
import { H3, Image, LI, P, UL } from '../../../../../AbstractElements'
import { dynamicImage } from '../../../../../Service'
import { Link } from 'react-router-dom'
import { EmailAddress, Gender, General, Href, Personal, Print } from '../../../../../utils/Constant'

const TabOrganization = () => {
  return (
    <>
      {organizationList.map((item, i) =>
        <TabPane tabId={item.activeTab} key={i}>
          <div className="profile-mail">
            <div className="d-flex align-items-center">
              <Image className= 'img-100 img-fluid m-r-20 rounded-circle update_img_5' src= {dynamicImage(`${item.image}`)} alt= 'images'  />
              <div className="flex-grow-1 mt-0">
                <H3>
                  <span className="first_name_5">{item.name}</span>
                </H3>
                <P className='email_add_5' >{item.email}</P>
                <UL>
                  <LI>
                    <Link to={Href}>{Print}</Link>
                  </LI>
                </UL>
              </div>
            </div>
            <div className="email-general">
              <H3>{General}</H3>
              <P>{EmailAddress}: <span className="font-primary email_add_5">{item.email}</span></P>
              <div className="gender">
                <H3>{Personal}</H3>
                <P>{Gender}: <span>{item.gender}</span></P>
              </div>
            </div>
          </div>
        </TabPane>
      )}
    </>
  )
}

export default TabOrganization