import React from 'react'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import WithdrawlsContainer from '../../../Component/Application/Users/WithdrawlsContainer/WithdrawlsContainer'

const Withdrawls = () => {
  return (
    <>
    <div className="page-body">
        <Breadcrumbs mainTitle={`Withdrawals `} parent={`User Dashboard`}  />
        <WithdrawlsContainer />
    </div>
    </>
  )
}

export default Withdrawls