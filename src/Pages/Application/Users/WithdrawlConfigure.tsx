import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import WithdrawlsConfigureContainer from '../../../Component/Application/Users/WithdrawlsConfigureContainer/WithdrawlsConfigureContainer'

const WithdrawlConfigure = () => {
  return (
    <div className="page-body">
        <Breadcrumbs mainTitle={`Payout Methods `} parent={`User Dashboard`} />
        {/* <WithdrawlsConfigureContainer /> */}
    </div>
  )
}

export default WithdrawlConfigure