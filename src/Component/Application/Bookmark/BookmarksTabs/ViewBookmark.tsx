import { useAppDispatch } from '../../../../ReduxToolkit/Hooks'
import { LI, UL } from '../../../../AbstractElements'
import { Link } from 'react-router-dom'
import { Href } from '../../../../utils/Constant'
import { Grid, List } from 'react-feather'
import { setGridView } from '../../../../ReduxToolkit/Reducers/BookmarkTabSlice'

export interface ViewLayout{
    setOpenModal: (value: boolean) => void;
}

const ViewBookmark = (props:ViewLayout) => {
    const {setOpenModal} = props;
    const dispatch = useAppDispatch()
    return (
      <UL className='flex-row simple-list' >
        <LI>
            <Link className="grid-bookmark-view" to={Href}>
                <Grid onClick={() => setOpenModal(true)} />
            </Link>
        </LI>
        <LI>
            <Link className="list-layout-view" to={Href}>
                <List onClick={() => setOpenModal(false)} />
            </Link>
        </LI>
      </UL>
    )
}

export default ViewBookmark