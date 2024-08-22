import { useCallback, useState } from 'react'
import {Container,} from 'reactstrap';
import UserProfile from '../../../../Component/App/MyMediaCenter/About/UserProfile';

const UserHeader = () => {
    const [activeTab, setActiveTab] = useState(1);
  const callback = useCallback((tab: number) => {
    setActiveTab(tab);
  }, []);
  return (
    <>        
      <Container fluid>
          <div className="user-profile social-app-profile">
              <UserProfile callback={callback}/>                
          </div>
      </Container>
    </>
  )
}

export default UserHeader