import { CardHeader, Col } from 'reactstrap'
import { P } from '../../../../AbstractElements';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { links } from '../../../../Data/Tools/BrandSupportTools/ButtonActions';

const ProjectListHeaderSubmenu = () => {
    
    const { mobileView } = useAppSelector((state) => state.layout);
    return (
        <>
      
        <Col md="6" className='p-0'>
            {/* <Nav tabs className="border-tab d-flex">
                <NavItem>
                <NavLink className={activeTab === "1" ? "active" : ""} onClick={() => dispatch(setActiveTab("1"))} href={Href}>
                    <FeatherIcons iconName='Target' /> {All}
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink className={activeTab === "2" ? "active" : ""} onClick={() => dispatch(setActiveTab("2"))} href={Href}>
                    <FeatherIcons iconName='Info' /> {Doing}
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink className={activeTab === "3" ? "active" : ""} onClick={() => dispatch(setActiveTab("3"))} href={Href}> 
                    <FeatherIcons iconName='CheckCircle' />{Done}
                </NavLink>
                </NavItem>
            </Nav> */}
            
            {mobileView ? (
                    <div className='py-2'><span className='mx-1 px-1 border border-primary'>{`Projects List`}</span><span className='mx-1 px-1 border border-primary'>{`Tasks`}</span><span className='mx-1 px-1 border border-primary'>{`To Dos`}</span></div>
                ):(
                    <P className='d-flex '>
                    <Link to={`${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list`}><span className='mx-1 px-1 border border-primary'>{`Projects List`}</span></Link>
                    <Link to={`${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list/task-list`}><span className='mx-1 px-1 border border-primary'>{`Tasks`}</span></Link>
                    <Link to={`${process.env.PUBLIC_URL}/tools/brand-support-tools/project-list/to-do-list`}><span className='mx-1 px-1 border border-primary'>{`To Dos`}</span></Link>
                    </P>
                )}
        </Col>
        </>
                 
    )
}

export default ProjectListHeaderSubmenu