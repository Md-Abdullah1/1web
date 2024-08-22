import { Card, Col } from 'reactstrap'
import { CustomColorHoverStrippedTitle } from '../../../../../utils/Constant'
import CommonTable from '../Common/CommonTable'
import { customColorHoverBody, customColorHoverData, customColorHoverHead } from '../../../../../Data/Tables/ReactstrapTable/BasicTable/BasicTable'
import CommonTableHeader from '../../../CommobTableHeader/CommobTableHeader'

const CustomColorHoverStripped = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonTableHeader title={CustomColorHoverStrippedTitle} span={customColorHoverData} />
        <CommonTable strip hover tableClass="bg-primary" headClass="tbl-strip-thad-bdr" headData={customColorHoverHead}>
          {customColorHoverBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.year}</td>
              <td>{data.studio}</td>
              <td>{data.budget}</td>
              <td>{data.boxOffice}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  )
}

export default CustomColorHoverStripped