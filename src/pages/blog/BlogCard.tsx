import { FC } from "react";
import "./blog.css";
import "../../components/property/propertycard.css";
import { Link } from "react-router-dom";

interface Blog {
  num: number;
  img: string;
  property: string;
  square: number;
  title: string;
  author: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: FC<BlogCardProps> = ({ blog }) => {
  return (
    <div className="search-rent-sale-link">
      <Link to={`/blog/${blog.title.replace(/\s+/g, "-")}`}>
        <div className="search-rent-sale-card">
          <div className="search-rent-sale-card-img-box">
            <img src={blog.img} alt="blog" />
          </div>
          <div className="search-rent-sale-featured blog-card-text">
            <h5 className="pt-4">{blog.property}</h5>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
