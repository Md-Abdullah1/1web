import { H3,} from '../../../../AbstractElements'
import { Card, CardBody } from 'reactstrap'
import { General} from '../../../../utils/Constant'
import GeneralInformation from './GeneralInformation'
import { Formik } from 'formik';
import {useState} from 'react'
import { myReusmesFormSchema, myResumesFormInitialValue, MyResumesValidationProp } from '../../../../Data/App/AccountSettings/MyResumesAddNew';


const AddResume = () => {
  const [submitErrors, setSubmitError] = useState<boolean>(false);
  const handleSubmit =(values:MyResumesValidationProp) =>{
    console.log(values);
    setSubmitError(false);
  }
  return (
    <Card>
      <div className="job-search">
        <CardBody className="pb-0">          
          <div className="job-description">
            <H3 className="mb-0">{General}</H3>
            <Formik
              initialValues={myResumesFormInitialValue}
              onSubmit={handleSubmit}
              validationSchema={myReusmesFormSchema}
            >
              {({ errors }) => (
              <GeneralInformation submitErrors={submitErrors} setSubmitError={setSubmitError} errors={errors}/>
              )}
            </Formik>
            {/* <UploadFiles /> */}
          </div>
        </CardBody>
    </div>
    </Card>
  )
}

export default AddResume