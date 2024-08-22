import React,{useState} from 'react'
import { Nav, NavItem } from 'reactstrap'
import { Btn, LI } from '../../../AbstractElements'
import { Href, NewBookmark, Views } from '../../../utils/Constant'
import { Link } from 'react-router-dom';
import { Bookmark } from 'react-feather';



const TemplatesNavTab = () => {
    const [activeTab, setActiveTab] = useState("1");
    const onHandleClick = (currentTab:string) => {
        setActiveTab(currentTab)
    }
    return (
        <Nav className="main-menu" role="tablist">
            <NavItem>
                <Btn block className="btn-mail badge-light-primary txt-primary" color='transparent' >
                <Bookmark className="me-2"/>{NewBookmark}-{activeTab}
                {/* <BookmarkModal /> */}
                </Btn>
            </NavItem>
            <NavItem>
                <span className="main-title f-w-500">{Views}</span>
            </NavItem>
            {/* {sideBarData.map((data, index) => (
            <LI key={index}>
            <Link className={`show ${activeTab === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} to={Href}>
                <span className="title f-w-400"> {data.title}</span>
            </Link>
            </LI>
            ))}    */}
        </Nav>
    )
}

export default TemplatesNavTab