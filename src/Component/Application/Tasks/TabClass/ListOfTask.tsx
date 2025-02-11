import { Card, CardHeader } from 'reactstrap'
import { H3 } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { CreatedByMeHeading, Href, Print } from '../../../../utils/Constant'
import { Printer } from 'react-feather'
import { useRef } from 'react'
import ReactToPrint from 'react-to-print'
import CreatedByMe from './CreatedByMe'

const ListOfTask = () => {
  const componentRef = useRef();
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex pb-0">
        <H3 className="mb-0">{CreatedByMeHeading}</H3>
        <ReactToPrint
          trigger={() => (
            <Link to={Href}>
              <Printer className="me-2" />{Print}
            </Link>
          )}
          content={() => componentRef.current || null}
        />
      </CardHeader>
      <CreatedByMe />
    </Card>
  )
}

export default ListOfTask