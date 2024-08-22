import { CardHeader } from 'reactstrap'
import { Btn, H2 } from '../../../../../AbstractElements'
import { ChevronDown, ChevronUp } from 'react-feather'
import { HeaderWithIconPropsTypes } from '../../../../../Types/Application/SocialApp/SocialApp'

const HeaderWithIcon = ({ setIsOpen, isOpen, Heading }: HeaderWithIconPropsTypes) => {
  return (
    <CardHeader>
      <H2 className="mb-0">
        <Btn block className="btn-link text-start p-0 pt-1" onClick={() => setIsOpen(!isOpen)} color="transparent" >
          {Heading}
          {isOpen ? (
            <ChevronUp className="m-0 " />
          ) : (
            <ChevronDown className="m-0 " />
          )}
        </Btn>
      </H2>
    </CardHeader>
  )
}

export default HeaderWithIcon