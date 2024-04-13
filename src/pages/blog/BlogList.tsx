import { FC } from "react";
import "./blog.css";

import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";

import { Blog } from "../../types";
import AnimatedWrapper from "../../components/animated/AnimatedWrapper";
import AnimatedHoverCard from "../../components/animated/AnimatedHoverCard";
import useGraphQLQuery from "../../graphql/hook/useGraphQLQuery";
import { GET_BLOGS } from "../../graphql/queries";

const BlogList: FC = () => {
  const data = useGraphQLQuery(GET_BLOGS, {}, "endpoint3");

  const dataBlog = data ?? [];

  return (
    <AnimatedWrapper delay={0.5}>
      <div className="blog-container">
        <div className="blog-cover-img-container">
          <img src={dataBlog[0]?.img} alt="cover" className="blog-cover-img" />
          <div className="img-overlay" />
          <div className="blog-overlay-text">
            <Container>
              <Row>
                <div className="col-md-6">
                  <h5>{dataBlog[0]?.author}</h5>
                  <h1>{dataBlog[0]?.title}</h1>
                  <Link to={`/blog/${dataBlog[0]?.title.replace(/\s+/g, "-")}`}>
                    <button> Read Article</button>
                  </Link>
                </div>
              </Row>
            </Container>
          </div>
        </div>
        <Container className="mt-5 mb-3">
          <Row>
            {dataBlog.map(
              (blog: Blog) =>
                blog.num !== 1 && (
                  <div className="col-md-4 col-12" key={blog.num}>
                    <AnimatedHoverCard>
                      <BlogCard blog={blog} />
                    </AnimatedHoverCard>
                  </div>
                )
            )}
          </Row>
        </Container>
      </div>
    </AnimatedWrapper>
  );
};

export default BlogList;
