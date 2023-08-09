import { gql, useQuery } from "@apollo/client";
import { FC } from "react";
import { useParams } from "react-router";

const GET_BLOGTEXT = gql`
  query GetBlogText($title: String!) {
    blogText(title: $title) {
      title
      author
      property
      num
      img
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
    <div>
      <p>{blog.title}</p>
    </div>
  );
};

export default BlogText;
