import { Card, Col, Container, Row } from 'reactstrap'
import UserBanner from '../../../Component/App/User/UserBanner'
import { Btn, H1, H4, Image, Progressbar } from '../../../AbstractElements'
import {  AddResume,  DeleteData, Home, MyResumeses } from '../../../utils/Constant'
import DataTable, { TableColumn } from 'react-data-table-component'
import { useEffect, useState } from 'react'
import { dynamicImage } from '../../../Service'
import { Link } from 'react-router-dom'
import Breadcrumbs from '../../../CommonElements/Breadcrumbs/Breadcrumbs'

export const resumesData = [
  {
    id:1,
    name:"James",
    image:"user/5.jpg",
    email:"start@gmail.com",
    skill: 100,
    skillColor: "info",
  },
  {
    id:2,
    name:"Kelvin",
    image:"user/5.jpg",
    email:"raft@gmail.com",
    skill: 90,
    skillColor: "danger",
  }
];

export interface ImageDataProp{
  image:string;
  title:string
}

const ImageData: React.FC<ImageDataProp> = ({ image, title }) => {
  return (
    <div className="d-flex">
      <Image
        className="rounded-circle img-30 me-3"
        src={dynamicImage(`${image}`)}
        alt="Generic placeholder image"
      />
      <div className="flex-grow-1 align-self-center">
        <div>{title}</div>
      </div>
    </div>
  );
};

export interface SupportDataType {
  id: number;
  image: string;
  name:string;
  email:string;
  skill:number;
  skillColor:string;
  date:string;
}

export interface ActionButtonProps{
  action:number;
}


const ActionButtons: React.FC<ActionButtonProps> = ({action}) => {
  return(
      <div className="d-flex justify-content-between">
          <Btn size='sm' color='primary' className='mx-2 px-2'>
            <i className="fa fa-pencil" />
          </Btn>
          <Btn size='sm' color='success' className='mx-2 px-2'>
            <i className="fa fa-link" /> 
          </Btn>
          <Btn size='sm' color='danger' className='mx-2 px-2'>
            <i className="fa fa-trash" /> 
          </Btn>
      </div>
  );
}


export const resumesColumn: TableColumn<SupportDataType>[] = [
  {
    name: "Image",
    cell: (row) => <ImageData image={row.image} title={row.name} />,
    sortable: true,
    center: false,
  },
  {
    name:"Name",
    selector: (row) => row["name"],
    sortable: true,
    center: false,
  },
  {
    name:"Email",
    selector: (row) => row["email"],
    sortable: true,
    center: false,
  },
  {
    name: "Skill",
    cell: (row) => <SkillsData value={row.skill} skillColor={row.skillColor} />,
    sortable: true,
    center: true,
  },
  {
    name:"Action",
    cell: (row) =><ActionButtons action={1}/>,
    sortable: true,
    center: false,
  },
];

export interface SkillsDataProp{
  value: number;
  skillColor:string
}

const SkillsData: React.FC<SkillsDataProp> = ({ value, skillColor }) => {
  return (
    <div className="progress-showcase" style={{ width: "86px" }}>
      <Progressbar value={value} color={skillColor} style={{ height: "8px" }} />
    </div>
  );
};

const MyResumes = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleDelete, setToggleDelete] = useState(false);
  const [data, setData] = useState(resumesData);

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete:\r ${selectedRows.map((r: SupportDataType) => r.name)}?`)) {
      setToggleDelete(!toggleDelete);
      setData(data.filter((item) => (selectedRows.filter((elem: SupportDataType) => elem.id === item.id).length > 0 ? false : true)));
      setSelectedRows([]);
    }
  };
  const handleRowSelected =() =>{}
  useEffect(()=>{
    
  });
  return (
    <div className='page-body'>
        <Breadcrumbs mainTitle={`My Resumes`} parent={Home} />
        <UserBanner/>
        <Container fluid>
          <Card>
            <Row className='px-3 py-1 d-flex justify-content-center'>
              <Col xl="12" className='d-flex justify-content-between ms-4 ps-3 pe-2 pb-4'><H1>{MyResumeses}</H1><Link to={`${process.env.PUBLIC_URL}/account-settings/my-resumes/add-new`}><Btn color="primary" type="button">{AddResume}</Btn></Link></Col>
            
              <Col md="12" className='ms-2'>
                <Card className="custom-project-card">
                  {/* <CardHeaderCommon title={``} tagClass="card-title mb-0" /> */}
                  {/* <Table responsive className="custom-scrollbar theme-scrollbar add-project card-table table-vcenter text-nowrap">
                    <thead>
                      <tr>
                        <th>{SRNO}</th>
                        <th>{DefaultPublicResume}</th>
                        <th>{Name}</th>
                        <th>{Type}</th>
                        <th>{JobHeading}</th>
                        <th>{Languages}</th>
                        <th>{Subcategories}</th>
                        <th>{Actions}</th>
                      </tr>
                    </thead>
                  </Table> */}
                  <div className="table-responsive">
                  {selectedRows.length !== 0 && (
                    <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
                      <H4 className="text-muted m-0">{DeleteData}</H4> 
                      <Btn color="danger" onClick={handleDelete}>{`Test`}</Btn>
                    </div>
                  )}
                  <DataTable className='custom-scrollbar' columns={resumesColumn} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                </div>
                </Card>
              </Col>
            </Row>
        </Card>
        </Container>
    </div>
  )
}

export default MyResumes;