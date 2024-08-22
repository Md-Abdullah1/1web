import {useState} from 'react'
import { BrandTools, KnowledgeSystems } from '../../../../utils/Constant' 
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs' 
import SubMenu from '../../../../Component/Application/SubMenu/SubMenu'


const KnowledgeSystem = () => { 
  
  const handleRowSelected =() =>{}

 
  
  return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={`${KnowledgeSystems} (${BrandTools})`} parent={BrandTools} />
      <SubMenu />
    </div>
  )
}

export default KnowledgeSystem;