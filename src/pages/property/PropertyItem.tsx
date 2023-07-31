import { gql } from "@apollo/client";
import { FC } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { Property } from "../../types";
import { Container, Row } from "react-bootstrap";
import { useGetUser } from "../../hook/useGetUser";
import PropertyCarousel from "./PropertyCaorusel";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

const GET_PROPERTY = gql`
  query GetProperty($num: Int!) {
    item(num: $num) {
      property
      sale
      num
      place
      price
      square
      time
      img
      specialist
      img1
      img2
      img3
    }
  }
`;

const PropertyItem: FC = () => {
  const { item } = useParams();
  const num = parseInt(item ?? "0");
  console.log(num);

  const { data: propertyData } = useQuery(GET_PROPERTY, {
    variables: { num },
    context: { clientName: "endpoint2" },
  });

  const properties: Property = propertyData?.item ?? {};

  const user = useGetUser(properties.specialist ?? "") ?? {};

  return (
    <>
      <Header />
      <Container>
        <Row className="property-details">
          <div className="col-6 property-carousel-container">
            <PropertyCarousel property={properties} />
          </div>
          <div className="col-6  user-property-card ">
            <h5>{`REF NO ${properties.num}`}</h5>
            <h2>
              {`${
                properties.property?.charAt(0).toUpperCase() +
                properties.property?.slice(1)
              } in ${properties.place}`}
            </h2>
            <Row>
              <div>
                <h5>SIZE AVAILABLE</h5>
                <h2>{`${properties.square} m\u00B2`}</h2>
              </div>
              <div>
                <h5>PRICE</h5>
                <h2>{`€${properties.price}/mo`}</h2>
              </div>
            </Row>
            <div>
              <h5>Specialist information</h5>
              <div>
                <div className="agent-photo">
                  <img src={user.img} alt={user.user} />
                </div>
                <div>
                  <h3>{user.name}</h3>
                  <h4>{user.language}</h4>
                </div>
              </div>
              <p>
                <Link to={`tel:${user.phone}`}>{user.phone}</Link>
              </p>
              <p>
                <Link to={`mailto:${user.email}`}>{user.email}</Link>
              </p>
            </div>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default PropertyItem;
