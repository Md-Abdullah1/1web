import React,{useState} from 'react'
import { AddNewIdeaStoryAlbum, AttributionRequired, DropZoneWarning, StartNewUpload, UndoChanges } from '../../../utils/Constant'
import { Btn, H3, H4, H5, H6, LI, UL } from '../../../AbstractElements'
import "bootstrap-icons/font/bootstrap-icons.css";
import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import CommonSwitchSpan from '../../Forms/FormsWidgets/Switch/Common/CommonSwitchSpan';
import { Formik } from 'formik';
import CardHeaderCommon from '../../BonusUi/CardHeaderCommon/CardHeaderCommon';
import Dropzone from 'react-dropzone-uploader';
import CommonModal from '../../Ui-Kits/Modal/Common/CommonModal';
import { manageAlbumFormInitialValue, manageAlbumFormValidationSchema } from '../../../Data/Tools/ManageContents/FormControlsValidation';
import AddManageMyAlbumsForm from '../../Tools/ManageContents/ManageMyAlbums/AddManageMyAlbumsForm';
import Popup from '../../MasterPopup/Popup';

const SocialMediaContent = () => {
    const [openModal, setOpenModal] = useState(false);
    const [submitErrors, setSubmitError] = useState<boolean>(false);
    const handleSubmit =() =>{}
    const SocialContentValidation =() =>{

    }
    const getUploadParams = () => {
        return { url: "https://httpbin.org/post" };
    }
    const openModalToggle = () => setOpenModal(!openModal);

    return (
        <div className="px-4 py-4">
            <div className='d-flex'>
                
                <Btn className='text-warning ps-1' onClick={openModalToggle}>
                    <i className="bi bi-plus-circle mx-1 text-warning"></i>
                    {AddNewIdeaStoryAlbum}
                </Btn>
                
                <Popup title={`Add an idea, story or album description`} openModalToggle={openModalToggle} isOpen={openModal} size={`lg`} backdrop={true} isClose={false}>
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
            </div>
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
                                    <option>{``}</option>
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
                                <CardHeaderCommon title={``} span={[``]} headClass="pb-0"/>
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

export default SocialMediaContent