import { FC } from "react";
import "./blog.css";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import React from "react";
import Header from "../../components/header/Header";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import Footer from "../../components/footer/Footer";

const GET_BLOGS = gql`
  query {
    blogList {
      title
      author
      property
      num
      img
    }
  }
`;
interface Blog {
  num: number;
  img: string;
  property: string;
  square: number;
  title: string;
  author: string;
}

const BlogList: FC = () => {
  const { data } = useQuery(GET_BLOGS, {
    context: { clientName: "endpoint3" },
  });

  const dataBlog = data?.blogList ?? [];

  return (
    <>
      <Header />
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
                  Read Article
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
                  <BlogCard blog={blog} />
                </div>
              )
          )}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BlogList;
