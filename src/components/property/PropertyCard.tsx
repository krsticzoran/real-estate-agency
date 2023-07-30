import { FC } from "react";
import "./propertycard.css";
import { Link } from "react-router-dom";
import { Property } from "../../types";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="search-rent-sale-link">
      <Link to={`/property/${property.num}`}>
        <div className="search-rent-sale-card">
          <div className="search-rent-sale-card-img-box">
            <img src={property.img} alt="restaurant" />
            <h4>{property.place}</h4>
          </div>
          <div className="search-rent-sale-featured">
            <h3 className="search-rent-sale-title">
              {`${
                property.property.charAt(0).toUpperCase() +
                property.property.slice(1)
              } in ${property.place}`}
              <span>{`REF NO. ${property.num}`}</span>
            </h3>
            <p className="search-rent-sale-price">{`€${property.price}/mo`}</p>
            <p className="search-rent-sale-m">{`${property.square} m\u00B2`}</p>
            <p className="search-rent-sale-day">{`${property.time} day ago`}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PropertyCard;
