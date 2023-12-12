import { FC } from "react";
import { useLocation } from "react-router-dom";
const DashboardProperties: FC = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data);
  return <div> .....</div>;
};

export default DashboardProperties;
