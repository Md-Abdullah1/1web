import React, { useEffect } from 'react'
import UserBanner from '../../../Component/App/User/UserBanner'
import { Col, Container, Row } from 'reactstrap'
import AddResume from '../../../Component/App/AccountSettings/MyResumes/AddResume'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { Home } from '../../../utils/Constant'


const MyResumesAddNew = () => {
  useEffect(()=>{
   
  });
  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`Add New My Resumes`} parent={Home} />
        <UserBanner/>
        <Container fluid>
            <Row>            
            <Col xxl="12" xl="12" className="box-col-8">
                <AddResume />
            </Col>
            </Row>
        </Container>
    </div>
  )
}

export default MyResumesAddNew