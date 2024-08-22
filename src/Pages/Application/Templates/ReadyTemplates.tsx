import React from 'react'
import ReadyTemplatesContainer from '../../../Component/Application/Templates/ReadyTemplatesContainer'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Home } from '../../../utils/Constant'

const ReadyTemplates = () => {
  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`Ready Templats`} parent={Home} />
        <ReadyTemplatesContainer />
    </div>
  )
}

export default ReadyTemplates