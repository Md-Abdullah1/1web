import { useAppSelector } from '../../../../ReduxToolkit/Hooks';
import { Card, CardBody, CardHeader, TabPane } from 'reactstrap';
import { H3 } from '../../../../AbstractElements';
import { CreatedByMe } from '../../../../utils/Constant';
import ViewBookmark from './ViewBookmark';
import DataLoop from './DataLoop';

const DataLoopTab = () => {
  const { gridView } = useAppSelector((state) => state.bookmarkTab);
  return (
    <TabPane tabId="1">
      <Card className="mb-0">
        <CardHeader className="d-flex pb-0">
          <H3 className="mb-0">{CreatedByMe}</H3>
          <ViewBookmark />
        </CardHeader>
        <CardBody className="pb-0">
          <div className={`details-bookmark text-center ${gridView ? "" : "list-bookmark"}`}>
            <DataLoop />
          </div>
        </CardBody>
      </Card>
    </TabPane>
  )
}

export default DataLoopTab