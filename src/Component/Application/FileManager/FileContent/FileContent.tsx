import { ChangeEvent, useState } from 'react'
import { filesData } from '../../../../Data/Application/FileManager/FileManager';
import { CardHeader, Form, Input } from 'reactstrap';
import { Btn, FeatherIcons } from '../../../../AbstractElements';
import { AddNew, Upload } from '../../../../utils/Constant';
import SearchBar from './SearchBar';
import convertSize from 'convert-size'
import msToTime from '../../../../utils/helper/msToTime';
import FileContentBody from './FileContentBody';

const FileContent = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [myFile, setMyFile] = useState(filesData);
    const fileList = myFile.filter((data) => {
      if (searchTerm == null) return data;
      if (data.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return data;
      }
    });
    const getFile = () => {
      document.getElementById('upfile')?.click();
    };
    const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        setSelectedFile(files[0]);
      }
    };
    const onFileUpload = () => {
      const date = new Date();
      const time = msToTime(date.getMilliseconds(), 'ago', 'long');
      let myFiles = [...myFile];
      if (selectedFile !== null) {
        myFiles.push({
          icons:"file-excel-o",
          title: `${selectedFile.name}`,
          details: `${convertSize(selectedFile.size)}`,
          color:"success"
        });
        setMyFile(myFiles);
      }
    };
    return (
      <>
        <CardHeader>
          <div className='d-md-flex d-sm-block'>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <div className='flex-grow-1 text-end'>
              <Form className='d-inline-flex'>
                <Btn color='primary' className='plus-square' onClick={getFile}>
                  <FeatherIcons iconName='PlusSquare'/> {AddNew}
                </Btn>
                <div style={{height: "0px",width: "0px", overflow:"hidden"}}>
                  <Input id='upfile' multiple type='file' onChange={(e) => onFileChange(e)} />
                </div>
              </Form>
              <Btn outline color='primary' className='ms-2' onClick={onFileUpload}>
                <FeatherIcons iconName='Upload' />
                {Upload}
              </Btn>
            </div>
          </div>
        </CardHeader>
        <FileContentBody myFile={fileList} />
      </>
    )
}

export default FileContent