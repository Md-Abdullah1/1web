import { H3, Image, UL } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { CommentTitleLearning } from "../../../../../utils/Constant";
import BlogDetails from "./BlogDetails";
import UserComment from "./UserComment";

const BlogSingle = () => {
  return (
    <div className="blog-single">
      <div className="blog-box blog-details">
        <Image
          className="img-fluid w-100"
          src={dynamicImage(`faq/learning-1.png`)}
          alt="blog-main"
        />
        <BlogDetails />
      </div>
      <section className="comment-box">
        <H3>{CommentTitleLearning}</H3>
        <hr />
        <UL className="simple-list">
          <UserComment />
        </UL>
      </section>
    </div>
  );
};

export default BlogSingle;
