import React, { useEffect, useState } from 'react'
import UserHeader from '../../../../Component/App/MyMediaCenter/About/UserHeader'
import { Card, Col, Container, Row } from 'reactstrap'
import { Btn, H1, H4, Image, Progressbar } from '../../../../AbstractElements'
import { DeleteData, Idownloaded } from '../../../../utils/Constant'
import DataTable, { TableColumn } from 'react-data-table-component';
import { dynamicImage } from '../../../../Service'

export const iDownloadedData = [
    {
        name:"James",
        image:"user/5.jpg",
        email:"start@gmail.com",
        skill: 100,
        skillColor: "info",
    },
    {
        name:"James",
        image:"user/5.jpg",
        email:"start@gmail.com",
        skill: 100,
        skillColor: "danger",
    }
];

export interface DownloadDataType{
    id: number;
    image: string;
    name:string;
    email:string;
    skill:number;
    skillColor:string;
}

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

export interface ActionButtonProps{
    action:number;
}

const ActionButtons: React.FC<ActionButtonProps> = ({action}) => {
    return(
        <div className="d-flex justify-content-between">
            <Btn size='sm' color='primary' className='mx-1 px-2'>
              <i className="fa fa-pencil" />
            </Btn>
            <Btn size='sm' color='success' className='mx-1 px-2'>
              <i className="fa fa-link" /> 
            </Btn>
            <Btn size='sm' color='danger' className='mx-1 px-2'>
              <i className="fa fa-trash" /> 
            </Btn>
        </div>
    );
}

export const iDownloadedColumns: TableColumn<DownloadDataType>[] =[
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
        cell: (row) => <ActionButtons action={1}/>,
        sortable: true,
        center: false,
      },
];

const IDownloaded = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [toggleDelete, setToggleDelete] = useState(false);
    const [data, setData] = useState(iDownloadedData);

    const handleDelete =() =>{
      setData(iDownloadedData);
    }

    const handleRowSelected =() =>{
      setSelectedRows([]);
      setToggleDelete(false);
    }
    useEffect(()=>{
      var scroll_top  =  window.innerWidth > 415 ? 360 : 210;
      window.scrollTo({ top: scroll_top, behavior: "smooth" });
    });

    return (
        <div className='page-body'>
        <UserHeader/>
        <Container fluid>
            <Card>
                <Row className='px-3 py-3'>
                    <Col xl="12" className='d-flex justify-content-between ps-2 pe-2 pb-4'><H1>{Idownloaded}</H1></Col>
                    <Col md="12">
                        <div className="table-responsive">
                        {selectedRows.length !== 0 && (
                            <div className={`d-flex align-items-center justify-content-between bg-light-info p-2`}>
                            <H4 className="text-muted m-0">{DeleteData}</H4> 
                            <Btn color="danger" onClick={handleDelete}>{`Test`}</Btn>
                            </div>
                        )}
                        <DataTable className='custom-scrollbar' columns={iDownloadedColumns} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                        </div>
                    </Col>
                </Row>
            </Card>
        </Container>
        </div>
    )
}

export default IDownloaded