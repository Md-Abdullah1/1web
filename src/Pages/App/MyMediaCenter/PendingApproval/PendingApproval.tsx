import { useEffect } from 'react';
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'

const PendingApproval = () => {
  useEffect(()=>{
    var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
    window.scrollTo({ top: scroll_top, behavior: "smooth" });
  });
  return (
    <div className='page-body'>
      <UserHeader/>
    </div>
  )
}

export default PendingApproval