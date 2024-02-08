import { FC } from "react";

const loaderStyle: React.CSSProperties = {
  width: "48px",
  height: "48px",
  border: "5px solid black",
  borderBottomColor: "#FF3D00",
  borderRadius: "50%",
  display: "inline-block",
  boxSizing: "border-box",
  animation: "rotation 1s linear infinite",
};

const Loader: FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <span style={loaderStyle}>
        <style>
          {`
          @keyframes rotation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
        </style>
      </span>
    </div>
  );
};

export default Loader;
