import React from 'react'
import { H6, LI, UL } from '../../../../../AbstractElements'
import { BlogDetailsProp } from '../../../../../Types/Miscellaneous/Learning/Learning'

const BlogDetails:React.FC<BlogDetailsProp>= ({ text }) => {
  return (
    <div className="blog-details-main simple-list flex-row">
      <UL className="blog-social justify-content-center flex-row">
        <LI>9 April 2024</LI>
        <LI>by: Admin</LI>
        <LI>0 Hits</LI>
      </UL>
      <hr />
      <H6 className="blog-bottom-details">{text}</H6>
    </div>
  )
}

export default BlogDetails