import React, { useState } from 'react';
import { Card, Nav, NavItem, NavLink, Row } from 'reactstrap';
import classnames from 'classnames';
import SocialMediaContent from './SocialMediaContent';
import ProductServiceSaleContent from './ProductServiceSaleContent';
import PhotoContestContent from './PhotoContestContent';

const UploadData: React.FC = () => {
  // Define state for active tab
  const [activeTab, setActiveTab] = useState<string>('1');

  // Function to toggle tabs
  const toggle = (tabId: string) => {
    if (activeTab !== tabId) setActiveTab(tabId);
  };

  return (
    <div className="product-wrapper-grid upload">
      <Row>
        <Nav className='gap-3 border-0' tabs>
          <NavItem className='me-2'>
            <NavLink
              className={classnames(`border border-gray rounded `,{ active: activeTab === '1' }) }
              onClick={() => toggle('1')}
            >
             1. Upload Social Media Contents
            </NavLink>
          </NavItem>
          <NavItem className='border-gray'>
            <NavLink
              className={classnames('border border-gray rounded', { active: activeTab === '2' })}
              onClick={() => toggle('2')}
            >
             2. Upload Contents of Products and Services for Sale
            </NavLink>
          </NavItem>
          <NavItem className='border-gray'>
            <NavLink
              className={classnames('border border-gray rounded', { active: activeTab === '3' })}
              onClick={() => toggle('3')}
            >
            3. Upload Contents for Photo Contests
            </NavLink>
          </NavItem>
        </Nav>
      </Row>
      <Row>
        {/* Tab Content */}
        <div className="tab-content">
          <div
            className={classnames('tab-pane', { active: activeTab === '1' })}
            id="tab1"
          >
            {/* Content for Tab 1 */}
            <SocialMediaContent/>
          </div>
          <div
            className={classnames('tab-pane', { active: activeTab === '2' })}
            id="tab2"
          >
            {/* Content for Tab 2 */}
            <ProductServiceSaleContent/>
          </div>
          <div
            className={classnames('tab-pane', { active: activeTab === '3' })}
            id="tab3"
          >
            {/* Content for Tab 2 */}
            <PhotoContestContent/>
          </div>
        </div>
      </Row>
    </div>
  );
};

export default UploadData;
