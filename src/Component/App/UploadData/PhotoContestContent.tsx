import React,{useState} from 'react'
import { Btn, H4, H5, H6, LI, UL } from '../../../AbstractElements'
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Formik } from 'formik'
import { AddNewIdeaStoryAlbum, AssignContenttoProductService, AttributionRequired, DropZoneWarning, SelectPhotoContest, StartNewUpload, UndoChanges } from '../../../utils/Constant'
import CommonSwitchSpan from '../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan'
import CardHeaderCommon from '../../BonusUi/CardHeaderCommon/CardHeaderCommon'
import Dropzone from 'react-dropzone-uploader'
import Popup from '../../MasterPopup/Popup'
import { manageAlbumFormInitialValue, manageAlbumFormValidationSchema } from '../../../Data/Tools/ManageContents/FormControlsValidation'
import AddManageMyAlbumsForm from '../../Tools/ManageContents/ManageMyAlbums/AddManageMyAlbumsForm'
import { Typeahead } from 'react-bootstrap-typeahead'

export const photo_contest = [""]

const PhotoContestContent = () => {
    const [openModal, setOpenModal] = useState(false);
    const [openPSModal, setOpenPSModal] = useState(false);
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const handleSubmit =() =>{}
    const SocialContentValidation =() =>{

    }
    const getUploadParams = () => {
        return { url: "https://httpbin.org/post" };
    }
    return (
        <div className="px-4 py-4">
            <div>
            <Btn className='text-warning ps-1' onClick={()=>setOpenPSModal(!openPSModal)}>
                <i className="bi bi-plus-circle mx-1 text-warning"></i>
                {SelectPhotoContest}
            </Btn>
            <div>
            </div>        
            <Btn className='text-warning ps-1' onClick={()=>setOpenModal(!openModal)}>
                <i className="bi bi-plus-circle mx-1 text-warning"></i>
                {AddNewIdeaStoryAlbum}
            </Btn>
            </div>
            <Popup title={`Select a Photo Contest`} openModalToggle={()=>setOpenPSModal(!openPSModal)} isOpen={openPSModal} size={`lg`} backdrop={true} isClose={false}>
                <div className='p-3 py-4'>
                    <Typeahead options={photo_contest} placeholder="Select a Photo Contest" id="Basic TypeAhead"/>
                </div>
            </Popup>
            <Popup title={`Add an idea, story or album description`} openModalToggle={()=>setOpenModal(!openModal)} isOpen={openModal} size={`xl`} backdrop={true} isClose={false}>
                <div className='p-3'>
                    <Formik
                        initialValues={manageAlbumFormInitialValue}
                        onSubmit={handleSubmit}
                        validationSchema={manageAlbumFormValidationSchema}
                        >
                        {({ errors, values, setFieldValue }) => (
                            <AddManageMyAlbumsForm
                            submitErrors={submitErrors}
                            setSubmitError={setSubmitError}
                            errors={errors}
                            values={values}
                            setFieldValue={setFieldValue}
                            />
                        )}
                    </Formik>
                </div>
            </Popup>
            <Row className='py-2'>
                <Col xxl="8">
                    <Formik
                    initialValues = {{email:''}}
                    onSubmit={handleSubmit}
                    validationSchema={SocialContentValidation}>
                    {({ errors }) => (
                        <Form >
                            <FormGroup floating>
                                <Input type="select">
                                    <option>{`Select`}</option>
                                    <option>Free for Commercial and Non-profit use</option>
                                    <option>Free for Non-Profit use only</option>
                                    <option>View Only. No right to download or use. </option>
                                </Input>
                                <Label>{`License and Right to Use Contents`}</Label>
                            </FormGroup>

                            <div className="d-flex align-items-center">
                                <div className="flex-shrink-0  text-end icon-state switch-outline">
                                    <CommonSwitchSpan color={`primary`} defaultChecked/>
                                </div>
                                <Label className="m-l-10" check>{AttributionRequired}</Label>
                            </div>

                            <Card>
                                <CardHeaderCommon title={``} span={[]} headClass="pb-0"/>
                                <CardBody>
                                <Dropzone
                                    getUploadParams={getUploadParams}
                                    onSubmit={handleSubmit}
                                    maxFiles={1}
                                />
                                </CardBody>
                            </Card>

                            <div className='d-flex'>
                                <i className="bi-exclamation-triangle me-1 text-warning"></i>
                                <H6 className='text-warning'>{DropZoneWarning}</H6>
                            </div>

                            <div className='d-flex py-3'> 
                                <Btn color="primary" type="button">{StartNewUpload}</Btn>
                                <Btn color='secondary' className='mx-2'>{UndoChanges}</Btn>
                            </div>
                        </Form>
                    )}
                    </Formik>
                </Col>
                <Col xxl="4">
                    <H4>{`Notes:`}</H4>
                    <div className='border rounded border-danger p-2'>
                        <p>
                            <i className="bi-exclamation-triangle me-1 text-warning"></i>
                            <span>NOTICE : These attributes will be applied to all the uploaded images.</span>
                        </p>
                        <UL className='list-content'>
                            <LI>{`Please read the terms and conditions to avoid sanctions`}</LI>
                            <LI>{`Daily maximum number of files to upload: (100)`}</LI>
                            <LI>{`Daily upload files left: (100)`}</LI>
                            <LI>{`Not allowed to upload files of violence or pornographic content of any kind`}</LI>
                            <LI>{`File must be of Authoring`}</LI>
                        </UL>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default PhotoContestContent