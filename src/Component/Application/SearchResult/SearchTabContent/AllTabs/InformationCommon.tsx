import { Link } from 'react-router-dom'
import { Href } from '../../../../../utils/Constant'
import { H5, LI, P, UL } from '../../../../../AbstractElements'
import ShowRating from './ShowRating'
import { InformationCommonPropsType } from '../../../../../Types/Application/SearchResult/SearchResult'

const InformationCommon = ({ item }: InformationCommonPropsType) => {
  return (
    <div className="info-block p-2" key={item.title}>
      <Link to={Href}>{item.url}</Link>
      <H5>{item.title}</H5>
      <P>{item.detail}</P>
      <div className="star-ratings">
        <UL className="search-info simple-list flex-row">
          {item.showStar ? <ShowRating item={item.showStar} /> : ""}
          <LI>{item.star}</LI>
          <LI>{item.vote}</LI>
          <LI>{item.news}</LI>
        </UL>
      </div>
    </div>
  )
}

export default InformationCommon