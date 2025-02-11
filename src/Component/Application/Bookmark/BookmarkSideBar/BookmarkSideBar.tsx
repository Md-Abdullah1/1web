import { Card, CardBody, Col } from 'reactstrap'
import { Btn, H3, Image, P } from '../../../../AbstractElements'
import { BookmarkFilter, Href } from '../../../../utils/Constant'
import { dynamicImage } from '../../../../Service'
import { useAppDispatch, useAppSelector } from '../../../../ReduxToolkit/Hooks'
import NavTab from './NavTab'
import { setBookmarkFilter } from '../../../../ReduxToolkit/Reducers/BookmarkTabSlice'

const BookmarkSideBar = () => {
  const {bookmarkFilter} = useAppSelector((state)=>state.bookmarkTab)
  const dispatch = useAppDispatch()
  return (
    <Col xl="3" className="box-col-3">
      <div className="md-sidebar">
        <Btn tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={()=>dispatch(setBookmarkFilter())}>{BookmarkFilter}</Btn>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${bookmarkFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark">
                  <div className='d-flex align-items-center'>
                    <div className="media-size-email">
                      <Image className="me-3 rounded-circle" src={dynamicImage("user/user.png")} alt="user" />
                    </div>
                    <div className="flex-grow-1">
                      <H3>{'MARK JECNO'}</H3>
                      <P>Markjecno@gmail.com</P>
                    </div>
                  </div>
                  <NavTab />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default BookmarkSideBar