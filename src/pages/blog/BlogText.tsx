import { FC } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";
import "./blog.css";
import AnimatedWrapper from "../../components/animated/AnimatedWrapper";
import useGraphQLQuery from "../../graphql/hook/useGraphQLQuery";
import { GET_BLOGTEXT } from "../../graphql/queries";

const BlogText: FC = () => {
  const { title } = useParams();
  const formattedTitle = title!.replace(/-/g, " ");

  const data = useGraphQLQuery(
    GET_BLOGTEXT,
    { title: formattedTitle },
    "endpoint3"
  );

  const blog = data ?? {};

  return (
    <AnimatedWrapper delay={0.7}>
      <div className="blog-text-container-height">
        <Container>
          <div className="blog-title-section">
            <h4>{blog.property}</h4>
            <h1>{blog.title}</h1>
            <p>{blog.author}</p>
          </div>
          <div>
            <div className="blog-img-section">
              <img src={blog.img} alt="img" />
            </div>
            <div className="blog-content-section">
              <ReactMarkdown children={blog.content} />
            </div>
          </div>
        </Container>
      </div>
    </AnimatedWrapper>
  );
};

export default BlogText;
