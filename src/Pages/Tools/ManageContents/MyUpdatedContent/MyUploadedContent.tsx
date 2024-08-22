import {ChangeEvent, useState} from 'react'
import { filesData, quickAccessData } from '../../../../Data/Application/FileManager/FileManager';
import { AddNew, BrandTools, ManageUploadedContents, QuickAccess } from '../../../../utils/Constant'
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Row } from 'reactstrap'
import DataTable, { TableColumn } from 'react-data-table-component'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../../CommonElements/Breadcrumbs/Breadcrumbs'
import { ActionButtons, ManageContentColumnData, supportTicketData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import { ManageContents, ManageUploadedContentTableAction } from '../../../../Data/Tools/ManageContents/ManageContentButtons'
import { Btn, FeatherIcons, H5, H6, LI, UL } from '../../../../AbstractElements'
import msToTime from '../../../../utils/helper/msToTime';
import convertSize from 'convert-size'
import Folders from '../../../../Component/Application/FileManager/FileContent/Folders';
import Files from '../../../../Component/Application/FileManager/FileContent/Files';
import Popup from '../../../../Component/MasterPopup/Popup';
import MyUploadedContentsEdit from '../../../../Component/Tools/ManageContents/MyUploadedContent/MyUploadedContentsEdit';
import MyUploadedContentsView from '../../../../Component/Tools/ManageContents/MyUploadedContent/MyUploadedContentsView';
import { SupportDataType } from '../../../App/AccountSettings/MyResumes';
import { TableHeadColumn } from '../../../App/AccountSettings/MyRegistrationPlan';

const MyUploadedContent = () => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState(supportTicketData);    
  const [myFile, setMyFile] = useState(filesData);
  const [isEditOpen , setIsEditOpen] = useState(false);
  const [isOpen , setIsOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleRowSelected =() =>{}
  const openPopup = (type:boolean) =>{
    setIsOpen(!isOpen);
    setIsEditOpen(type);
  }

  const openModalToggle = () =>{
      setIsOpen(!isOpen);
  }

  const getFile = () => {
    document.getElementById('upfile')?.click();
  };

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
    }
  };

  // const onFileUpload = () => {
  //   const date = new Date();
  //   const time = msToTime(date.getMilliseconds(), 'ago', 'long');
  //   let myFiles = [...myFile];
  //   if (selectedFile !== null) {
  //     myFiles.push({
  //       icons:"file-excel-o",
  //       title: `${selectedFile.name}`,
  //       details: `${convertSize(selectedFile.size)}`,
  //       color:"success"
  //     });
  //     setMyFile(myFiles);
  //   }
  // };

  const ManageContentColumnData: TableColumn<SupportDataType>[] = [    
    {
      name: <TableHeadColumn title={`ID`}/>,
      selector: (row) => row["id"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Thumbnail`}/>,
      selector: (row) => row["position"],
      sortable: true,
      center: true,
    },
    
    {
      name: <TableHeadColumn title={`Title`}/>,
      selector: (row) => row["salary"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Description`}/>,
      selector: (row) => row["office"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Bulk Id`}/>,
      selector: (row: SupportDataType) => row["extn"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Albums`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Collections`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Assigned Product and Services`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`free images and Photos`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`External Weblink`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Type`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Product or Service`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Likes`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Downloads`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Date`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name: <TableHeadColumn title={`Status`}/>,
      selector: (row: SupportDataType) => row["email"],
      sortable: true,
      center: true,
    },
    {
      name:<TableHeadColumn title={`Actions`}/>,
      cell: (row) => <ActionButtons openPopup={openPopup}/>,
      center: false,
    },
    
  ];
  
  return (
    <div className='page-body'>
      <Breadcrumbs mainTitle={`${ManageUploadedContents} (Manage Contents)`} parent={BrandTools} />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className='pb-0'> 
                <div>
                {ManageContents.map((item, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${item.path}`}><span className='border p-2 m-1'>{item.title} {item.total_contest >= 0 ? `(${item.total_contest})`:``}</span></Link>
                  </>)
                })}
                </div>
              </CardHeader>
              <CardBody>
                <>
                
               
                <div>
                {ManageUploadedContentTableAction.map((action, index)=>{
                  return(
                  <>
                    <Link to={`${process.env.PUBLIC_URL}/${action.path}`}><span key={index} className='border rounded p-2 m-1 text-white bg-dark ps-2 pe-2'>{action.actionName} </span></Link>
                  </>)
                })}
                </div>
                {/* </Col></Row> */}
                <div className="table-responsive pt-2">
                  <DataTable className='custom-scrollbar' columns={ManageContentColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                </div>
                
                <Popup title={`My Uploaded Contents`} openModalToggle={openModalToggle} isOpen={isOpen} size={`xl`}>
                  {isEditOpen ? <MyUploadedContentsEdit/> : <MyUploadedContentsView /> }
                </Popup>
                </>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <div className='d-md-flex d-sm-block'>
                  <div className='flex-grow-1 text-end'>
                    <Form className='d-inline-flex'>
                      <Btn color='primary' className='plus-square' onClick={getFile}>
                        <FeatherIcons iconName='PlusSquare'/> {AddNew}
                      </Btn>
                      <div style={{height: "0px",width: "0px", overflow:"hidden"}}>
                        <Input id='upfile' multiple type='file' onChange={(e) => onFileChange(e)} />
                      </div>
                    </Form>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="file-manager">
                <H5 className='mb-2'>{QuickAccess} </H5>
                <UL className="quick-file d-flex flex-row simple-list">
                  {quickAccessData.map((data,index) => (
                    <LI key={index}>
                      <div className="quick-box">
                        <i className={`fa fa-${data.icons} font-${data.color}`} />
                      </div>
                      <H6>{data.title}</H6>
                    </LI>
                  ))}
                </UL>
                <Folders />
                <Files myFiles={myFile}/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MyUploadedContent