import Image from "../../CommonElements/Media";
import { dynamicImage } from "../../Service";
export interface LogoTypes { width:any,className:any}

const Logo = ({width,className}:LogoTypes) => {
  return (
    <div className="d-flex justify-content-center">
        <Image
            className={`img-fluid for-light ${className}`}
            src={dynamicImage("logo/logo.png")}
            alt="logo"
            width={width}
        />
    </div>
  )
}

export default Logo