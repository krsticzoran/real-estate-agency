import { FC } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { staff, getImagePath } from "../../assets/data/team";
import "./team.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const Member: FC = () => {
  const { memberName } = useParams();
  const selectedMember =
    staff.find((member) => member.user === memberName) || staff[0];

  return (
    <>
      <Header />
      <div className="team">
        <Container>
          <Row>
            <div className="col-12 col-md-4 member-data-box">
              <img src={getImagePath(selectedMember.user)} alt="staff" />
              <h3 className="member-name">{selectedMember.name}</h3>
              <p>Speaks: {selectedMember.language}</p>
            </div>
            <div className="col-12 col-md-4">
              <h3 className="member-name">Overview</h3>
              <p>{selectedMember.overview}</p>
            </div>
            <div className="col-12 col-md-4">
              <h1>{selectedMember.email}</h1>
            </div>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Member;
