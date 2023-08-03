import { FC } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { Container, Row } from "react-bootstrap";
import Header from "../../components/header/Header";
import PropertyCard from "../../components/property/PropertyCard";
import { Property } from "../../types";
import "../property/propertylist.css";

const Search: FC = () => {
  const location = useLocation();
  const data = location.state?.data.search;

  return (
    <>
      <Header></Header>
      <div className="search-rent-sale">
        <Container>
          <Row>
            {data.map((property: Property, index: number) => (
              <div className="col-md-4 col-12" key={property.num}>
                <PropertyCard property={property} />
              </div>
            ))}
          </Row>
        </Container>
      </div>

      <Footer></Footer>
    </>
  );
};

export default Search;
