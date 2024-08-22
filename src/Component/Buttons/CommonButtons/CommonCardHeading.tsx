import { Fragment } from 'react'
import { CardHeader } from 'reactstrap'
import { CommonCardHeadingPropsType } from '../../../Types/Buttons/ButtonsTypes'
import { H3 } from '../../../AbstractElements'

const CommonCardHeading: React.FC<CommonCardHeadingPropsType> = ({ headingClassName, smallHeading, Heading, span, span2, bigHeadingClassName }) => {
  return (
    <CardHeader className={`${headingClassName ? headingClassName : ""}`}>
      {smallHeading ? <H3>{smallHeading}</H3> : <H3 className={bigHeadingClassName ? bigHeadingClassName : ""}>{Heading}</H3>}
      <span> 
      {span &&
        span.map((data, index) => (
          <Fragment key={index}>
           {data?.text} {data.code && <code>{data.code}</code>}
          </Fragment>
        ))}
        </span>
      {span2 && <span dangerouslySetInnerHTML={{ __html: span2 }} />}
    </CardHeader>
  )
}

export default CommonCardHeading