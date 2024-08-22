import React,{useState} from 'react'
import { Card, CardBody, Col, Nav, NavItem } from 'reactstrap'
import { Btn, H3, H5, Image, LI, P } from '../../../AbstractElements'
import { dynamicImage } from '../../../Service'
import { Href, NewBookmark, Views } from '../../../utils/Constant'
import TemplatesTabs from './TemplatesTabs'
import { Bookmark } from 'react-feather'
import { Link } from 'react-router-dom'

export const sideBarData =[
  {title:'Created By Me', template:'1'},
  {title:'Favourites', template:'2'},
  {title:'test-3', template:'3'},
  {title:'test-4', template:'4'},
];

export interface templateRef{
  activeTab:string;
  changeTab: (value: string) => void;
}

const TemplatesSidebar = ({activeTab, changeTab}:templateRef) => {
  const [isOpen, setIsOpen] = useState(true);
    
  return (
    <Col xl="3" className="box-col-3">
      <div className="md-sidebar">
        <Btn tag="a" color="primary" className="md-sidebar-toggle mx-2" href={Href} onClick={()=>setIsOpen(!isOpen)}>{`Filters`}</Btn>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${isOpen ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  
                  <Nav className="main-menu" role="tablist">
                    <NavItem>
                        <Btn block className=" badge-light-primary txt-primary" color='transparent' >
                          <H5>{'Templates Types'}</H5>
                        </Btn>
                    </NavItem>
                     
                    {sideBarData.map((data, index) => (
                      <LI key={index}>
                        <Link className={`show ${activeTab === data.template ? "active" : ""}`}  to={Href} onClick={()=>changeTab(data.template)}>
                            <span className="title f-w-400"> {data.title}</span>
                        </Link>
                      </LI>
                    ))}   
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default TemplatesSidebar