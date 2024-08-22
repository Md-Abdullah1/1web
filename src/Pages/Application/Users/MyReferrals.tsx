import React from 'react'
import MyReferralsContainer from '../../../Component/Application/Users/MyReferralsContainer/MyReferralsContainer'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

const MyReferrals = () => {
  return (
    <>
    <div className="page-body">
        <Breadcrumbs mainTitle={`My Referrals`} parent={`User Dashboard`} />
        <MyReferralsContainer />
    </div>
    </>
  )
}

export default MyReferrals