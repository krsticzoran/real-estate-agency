import { FC } from "react";

import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import React from "react";

const GET_BLOGS = gql`
  query {
    blogList {
      content
      title
    }
  }
`;

const BlogList: FC = () => {
  const { data } = useQuery(GET_BLOGS, {
    context: { clientName: "endpoint3" },
  });

  const dataBlog = data?.blogList ?? [];

  const divStyle = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={divStyle}>
      <p>
        This page is currently under construction. Please check back later for
        updates.
      </p>
    </div>
  );
};

export default BlogList;
