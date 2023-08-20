import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import { Container } from "react-bootstrap";

const GET_BLOGTEXT = gql`
  query GetBlogText($title: String!) {
    blogText(title: $title) {
      title
      author
      property
      num
      img
      content
    }
  }
`;

const BlogText: FC = () => {
  const { title } = useParams();
  const formattedTitle = title!.replace(/-/g, " ");

  const { data } = useQuery(GET_BLOGTEXT, {
    variables: { title: formattedTitle },
    context: { clientName: "endpoint3" },
  });
  const blog = data?.blogText ?? {};

  console.log(blog);

  return (
    <Container>
      <div>
        <h4>{blog.property}</h4>
        <h1>{blog.title}</h1>
        <p>{blog.author}</p>
      </div>
      <div>
        <div>
          <img src={blog.img} alt="img" />
        </div>
        <ReactMarkdown children={blog.content} />
      </div>
    </Container>
  );
};

export default BlogText;
