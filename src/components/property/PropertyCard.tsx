import { FC } from "react";
import p6 from "../../assets/images/home/p6.jpeg";
import "./propertycard.css";

export interface Property {
  property: string;
  sale: string;
  num: number;
  place: string;
  price: number;
  square: number;
  time: number;
  img: string;
}

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="col-md-4 col-12">
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
    </div>
  );
};

export default PropertyCard;
