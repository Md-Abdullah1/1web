import React, {useState}from 'react'
import { Card, Col, Row,CardHeader, Container } from 'reactstrap'
import TemplatesSidebar from './TemplatesSidebar'
import TemplatesTabs from './TemplatesTabs'
import { links } from '../../../Data/Tools/BrandSupportTools/ButtonActions'
import { Link, useLocation } from 'react-router-dom'
import SubMenu from '../SubMenu/SubMenu'

const ReadyTemplatesContainer = () => {
    const [activeTab, setActiveTab] = useState("1");
    const changeTab = (active_tab:string) =>{
        setActiveTab(active_tab);
    }
    const location = useLocation();
    return (
        <div className="email-wrap bookmark-wrap">
            <Container fluid> 
            <SubMenu />
            <Row> 
                <TemplatesSidebar activeTab={activeTab}  changeTab={changeTab}/>
                <Col xl="9" md="12" className="box-col-80">
                    <div className="email-right-aside bookmark-tabcontent">
                    <Card className="email-body radius-left">
                        <div className="ps-0">
                        <TemplatesTabs activeTab={activeTab}/>
                        </div>
                    </Card>
                    </div>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default ReadyTemplatesContainer