import { Link } from "react-router-dom"
import { toast } from 'react-toastify';
import { H6, Image, } from "../../../../AbstractElements"
import { notificationData } from "../../../../Data/LayoutData/HeaderData"
import { dynamicImage } from "../../../../Service"
import { Input} from "reactstrap";
import { useState } from "react";
import { Href } from "../../../../utils/Constant";


export const dropMenuData =["Delete","Hide"]

export interface Toggle{
    openModalToggle?: () => void;
}

const NotificationBox:React.FC<Toggle> = ({openModalToggle}) => {
    const [show,setShow] = useState(1);
    const toggle = () => setShow((prevState) => prevState);
    const handleMarkedTodo =() =>{}
    const handleRemoveTodo = (id:number,title:string) => {        
        toast.success(`${title} deleted`);
      }
  return (
    <>
        {notificationData.map((data, index) => (
            <div className="d-flex align-items-center" key={index} >
                <div className="form-check checkbox checkbox-primary mb-0">
                    <Input id="checkbox-primary-1" type="checkbox"   style={{opacity:1}}/>
                </div>
                <Image src={dynamicImage(`dashboard/user/${data.img}`)} alt="Wallet" />
                <div className="flex-grow-1 ms-2" onClick={openModalToggle}>
                    <Link to={Href} >
                    {/* `${process.env.PUBLIC_URL}/confirm_password` */}
                        {/* <H5>{data.title}</H5>
                        <span>{data.subTitle}</span> */}
                        {/* <div className="task-container">
                            <span onClick={() => handleMarkedTodo()}>
                            <H4 className="task-label">{data.title}</H4>
                            </span>
                            <div className="d-flex align-items-center gap-3">
                            <Badges className={`bg-white`} color='transparent' onClick={() => handleMarkedTodo()}>{`test`}</Badges>
                            <H5 className="assign-name m-0">{`10 Jun, 2024`}</H5>
                            
                            </div>
                        </div> */}
                        <div className="blog-details px-2 py-1" onClick={openModalToggle}>
                            <div className="blog-date flex justify-between">
                                <small>{`10 Jun 2024`} {`10:55`}</small> 
                            </div>
                            <H6 className="mb-0">{data.title}</H6>
                            <small>From: {`Surya`}</small>
                            <div className="blog-date">
                                
                            </div>
                        </div>
                    </Link>
                </div>
                
            </div>
        ))}
    </>
  )
}

export default NotificationBox