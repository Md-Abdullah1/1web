import { PropsType } from '../../Types/OtherPages/OtherPages'
import { H4, H5, H2,Image, LI, UL } from '../../AbstractElements'
import { dynamicImage } from '../../Service';
import {signupDetailData}  from './SignupDetailData';
import { Link } from 'react-router-dom'
import { Logo } from '../Images';

const SideBar = ({ level }: PropsType) => {
  return (
    <UL className="anchor simple-list custom-scrollbar">
        <LI><Logo width={500} className='w-25'/></LI>
        <LI><H2>Recommended Important Pages</H2><H5>setup your full 1 Webbb</H5></LI>
        {
          signupDetailData.map((data, index) =>(
            <LI key={index}>
              <Link to={`${process.env.PUBLIC_URL}/${data.link}`} className={`pl-2 ${level === index + 1? "selected": level > index + 1? "done": "disabled"}`} >
                <H4 style={{'padding':'10px 23px','width':'43px'}}>{index + 1}</H4>
                <H5 className='pt-2'>
                    {data.title}
                    {data.title === "Done" ? (<i className="fa fa-thumbs-o-up" />) : (" ")}
                </H5>
                {/* <small>{data.detail}</small> */}
              </Link>
            </LI>
          ))
        }
        <LI>
          <Image src={dynamicImage("login/icon.png")} alt="loginpage"/>
        </LI>
    </UL>
  )
}

export default SideBar;