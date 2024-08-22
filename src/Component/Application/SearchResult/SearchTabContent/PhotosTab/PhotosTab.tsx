import { Row } from 'reactstrap'
import { H5 } from '../../../../../AbstractElements'
import PagesSort from '../AllTabs/PagesSort'
import GalleryImageDescription from './GalleryImageDescription'

const PhotosTab = () => {
  return (
    <>
      <div>
        <H5 className="f-w-700 mb-2">{'About 12,120 results (0.50 seconds)'}</H5>
        <Row className="my-gallery gallery-with-description">
          <GalleryImageDescription />
        </Row>
      </div>
      <PagesSort />
    </>
  )
}

export default PhotosTab