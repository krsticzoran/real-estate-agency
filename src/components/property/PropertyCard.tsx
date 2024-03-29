import { FC } from "react";
import "./propertycard.css";
import { Link } from "react-router-dom";
import { Property } from "../../types";
import AnimatedHoverCard from "../animated/AnimatedHoverCard";
import LazyImage from "../optimization/LazyImage";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <AnimatedHoverCard>
      <Link to={`/property/${property.num}`}>
        <div className="search-rent-sale-card">
          <div className="search-rent-sale-card-img-box">
            <LazyImage src={property.img} alt="restaurant" />
            <h4 className="search-rent-sale-card-place">{property.place}</h4>
          </div>
          <div className="search-rent-sale-featured">
            <h3 className="search-rent-sale-title">
              {`${
                property.property?.charAt(0).toUpperCase() +
                property.property?.slice(1)
              } in ${property.place}`}
              <span>{`REF NO. ${property.num}`}</span>
            </h3>
            {property.sale === "rent" ? (
              <p className="search-rent-sale-price">{`€ ${property.price.toLocaleString()}/mo`}</p>
            ) : (
              <p className="search-rent-sale-price">{`${property.price.toLocaleString()} €`}</p>
            )}
            <p className="search-rent-sale-m">{`${property.square} m\u00B2`}</p>
            <p className="search-rent-sale-day">{`${property.date}`}</p>
          </div>
        </div>
      </Link>
    </AnimatedHoverCard>
  );
};

export default PropertyCard;
