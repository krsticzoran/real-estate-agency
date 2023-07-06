import { FC } from "react";
import { useParams } from "react-router-dom";
import { staff } from "../../assets/data/myData";

const Member: FC = () => {
  const { memberName } = useParams();

  return (
    <div>
      <h1>{memberName}</h1>
    </div>
  );
};

export default Member;
