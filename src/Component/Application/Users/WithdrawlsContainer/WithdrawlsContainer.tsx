import React,{useState} from 'react'
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import { referralactions } from '../MyReferralsContainer/MyReferralsContainer'
import { Link } from 'react-router-dom'
import { Balance, MinWithdrawlText } from '../../../../utils/Constant'
import { H3 } from '../../../../AbstractElements'
import DataTable from 'react-data-table-component'
import { WithdrawlColumnData } from '../../../../Data/Tools/BrandSupportTools/ButtonActions'
import { supportTicketData} from '../../../../Data/Tools/BrandSupportTools/ButtonActions';

const WithdrawlsContainer = () => {
    const [toggleDelete, setToggleDelete] = useState(false);
    const [data, setData] = useState(supportTicketData); 
    const handleRowSelected =() =>{}
    return (
        <Card >
            <CardHeader className='pt-2'>
                {referralactions.map((item, index) =>(
                    <Link to={`${process.env.PUBLIC_URL}/${item.path}`} key={index}><span className='border rounded p-2 m-1 border-primary'>{item.title} {item.counter && item.counter >= 0 ? `(${item.counter})`:``}</span></Link>
                ))}
            </CardHeader>
            <CardBody>
                <Row>
                    <Col md="4" sm="12" className='rounded bg-primary ms-3'>
                        <div className='pt-2 pb-2'><h4 className='text-light'>{Balance} {`$0.00 USD`}</h4></div>
                        <div className='pb-2'> {MinWithdrawlText} {`$25 USD`}</div>
                    </Col>
                    <Col md="12" className='mt-4'>
                        <H3 >{`Withdrawl Balance`}</H3>
                        <DataTable className='custom-scrollbar border mt-2' columns={WithdrawlColumnData} data={data} striped={true} pagination selectableRows onSelectedRowsChange={handleRowSelected} clearSelectedRows={toggleDelete} />
                    </Col>
                </Row>
            </CardBody>
        </Card>
    )
}

export default WithdrawlsContainer