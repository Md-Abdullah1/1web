import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../ReduxToolkit/Hooks';
import { Image, SVG } from '../../AbstractElements';
import { setToggleSidebar } from '../../ReduxToolkit/Reducers/LayoutSlice';
import { dynamicImage } from '../../Service';

const LogoWrapper = () => {
    const dispatch = useAppDispatch();
    const {toggleSidebar} = useAppSelector((state)=>state.layout)

    return (
      <>
        <div className="logo-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/user-dashboard`}>
            <Image className="img-fluid" src={dynamicImage("logo/logo.png")} alt="logo" />
          </Link>
          <div className="toggle-sidebar" onClick={()=>dispatch(setToggleSidebar(!toggleSidebar))}>
            <SVG className={`sidebar-toggle`} iconId={`toggle-icon`} />
          </div>
        </div>
        <div className="logo-icon-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/dashboard/user-dashboard`}>
            <Image className="img-fluid" src={dynamicImage("logo/logo-icon.png")} alt="logo" />
          </Link>
        </div>
      </>
    );
}

export default LogoWrapper