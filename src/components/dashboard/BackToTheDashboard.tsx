import { FC } from "react";
import { useNavigate } from "react-router";

const BackToTheDashboard: FC = () => {
  const navigate = useNavigate();
  const handleReturnBackClick = () => {
    navigate("/dashboard/");
  };
  return <button onClick={handleReturnBackClick}>Back to the dashboard</button>;
};

export default BackToTheDashboard;
