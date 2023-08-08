import { FC } from "react";
import "./blog.css";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import React from "react";
import Header from "../../components/header/Header";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const GET_BLOGS = gql`
  query {
    blogList {
      title
      author
      property
      num
    }
  }
`;

const BlogList: FC = () => {
  const { data } = useQuery(GET_BLOGS, {
    context: { clientName: "endpoint3" },
  });

  const dataBlog = data?.blogList ?? [];
  console.log(dataBlog[0]?.title);

  return (
    <>
      <Header />
      <div className="blog-cover-img-container">
        <img
          src="/img/blog/cover.jpeg"
          alt="cover"
          className="blog-cover-img"
        />
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
    </>
  );
};

export default BlogList;
