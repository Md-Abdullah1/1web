import CommonError from '../Common/CommonError'
import { error400 } from '../ErrorSvg'

const Error400Container = () => {
  return (
    <CommonError src={error400} />
  )
}

export default Error400Container