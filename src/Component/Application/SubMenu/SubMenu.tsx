import React, {useState}from 'react'
import { Card, Col, Row,CardHeader, Container } from 'reactstrap'
import TemplatesSidebar from './TemplatesSidebar'
import TemplatesTabs from './TemplatesTabs'
import { links } from '../../../Data/Tools/BrandSupportTools/ButtonActions'
import { Link, useLocation } from 'react-router-dom'

const SubMenu = () => {
    const [activeTab, setActiveTab] = useState("1");
    const changeTab = (active_tab:string) =>{
        setActiveTab(active_tab);
    }
    const location = useLocation();
    return (
        <div className="email-wrap bookmark-wrap">
            <Container fluid>
            <Row>
                <Col md="12" >
                <Card className='mb-0'> 
                <CardHeader className='pb-0'>
                            <div>
                                {links.map((item, index) => { 
                                    const linkPath = `${process.env.PUBLIC_URL}/${item.path}`;
                                    const isActive = location.pathname === linkPath;

                                    return (
                                        <Link
                                            to={linkPath}
                                            key={index}
                                            className={`border d-inline-block p-2 m-1 ${isActive ? 'sub-active' : ''}`}
                                        >
                                            {item.title} {item.total_contest >= 0 ? `(${item.total_contest})` : ``}
                                        </Link>
                                    );
                                })}
                            </div>
                        </CardHeader>
                        </Card>
              </Col>
              </Row>
           
            </Container>
        </div>
    )
}

export default SubMenu