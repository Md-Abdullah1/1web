import { Label } from 'reactstrap'
import { CommonSwitchSpanProp } from '../../../../../Types/Forms/FormsWidgets/FormsWidgets'
import { ErrorMessage, Field } from 'formik';

const CommonSwitchSpan: React.FC<CommonSwitchSpanProp> = ({ color, defaultChecked, name, className, ...props}) => {

  const validationClass = className ? className : color;

  return (
    <Label className="switch mb-0">
      <Field type="checkbox" name={name} defaultChecked={defaultChecked} className={className} {...props}/>
      <ErrorMessage
                name={`${name}`}
                component="span"
                className="invalid-feedback"
              />
      <span className={`switch-state bg-${validationClass}`}></span>
    </Label>
  )
}

export default CommonSwitchSpan