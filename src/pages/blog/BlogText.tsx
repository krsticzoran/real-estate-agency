import { FC } from "react";
import { useParams } from "react-router";

const BlogText: FC = () => {
  const { title } = useParams();
  const formattedTitle = title!.replace(/-/g, " ");

  return (
    <div>
      <p>dfsdfa</p>
    </div>
  );
};

export default BlogText;
