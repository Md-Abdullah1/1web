import { TabContent, TabPane } from 'reactstrap'
import AllTabs from './AllTabs/AllTabs'
import PhotosTab from './PhotosTab/PhotosTab'
import VideoTabs from './VideoTabs/VideoTabs'
import { PropsType } from '../../../../Types/Application/SearchResult/SearchResult'

const SearchTabContent = ({ activeTab }: PropsType) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1} className="search-links">
        <AllTabs />
      </TabPane>
      <TabPane tabId={2}>
        <PhotosTab />
      </TabPane>
      <TabPane tabId={3}>
        <VideoTabs />
      </TabPane>
    </TabContent>
  )
}

export default SearchTabContent