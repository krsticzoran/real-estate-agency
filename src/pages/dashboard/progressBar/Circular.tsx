import { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Card } from "react-bootstrap";

interface PropertyType {
  property: string;
  num: number;
  place: string;
  price: number;
  square: number;
  time: number;
  img: string;
}

interface CircularProps {
  propertyName: string;
  property: PropertyType[];
  propertyAll: PropertyType[];
}

const Circular: FC<CircularProps> = ({
  propertyName,
  property,
  propertyAll,
}) => {
  return (
    <div className="col-sm-12 col-lg-6 mt-3 ">
      <Card>
        <Card.Body className="d-flex justify-content-between align-items-center pt-4 pb-4">
          <div>
            <h2>{property.length}</h2>

            <p>{propertyName}</p>
            <span>total amount</span>
          </div>
          <div>
            <CircularProgressbar
              className="circular-progressbar"
              value={(property.length / propertyAll.length) * 100}
              text={`${(property.length / propertyAll.length) * 100}%`}
              styles={buildStyles({
                pathTransitionDuration: 1,
                pathColor: "#3B4CB8",
                textColor: "#3B4CB8",
                trailColor: "#dbdef3",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Circular;
