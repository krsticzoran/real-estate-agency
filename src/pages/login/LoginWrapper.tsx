import { FC, ReactNode } from "react";
import AnimatedWrapper from "../../components/animated/AnimatedWrapper";
import banner from "../../assets/images/login/background1.jpg";
import "./login.css";

interface LoginWrapperChildren {
  children: ReactNode;
}

const LoginWrapper: FC<LoginWrapperChildren> = ({ children }) => {
  return (
    <AnimatedWrapper delay={0.5}>
      <div
        className="login-container"
        style={{
          backgroundImage: `url(${banner})`,

          backgroundSize: "100vw 100vh",
        }}
      >
        <div className="container">
          <div className="row  ">
            <div className="col-lg-5">
              <div className="card login-form-backgound">
                <div className="card-body ">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedWrapper>
  );
};

export default LoginWrapper;
