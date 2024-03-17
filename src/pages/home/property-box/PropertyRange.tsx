import React, { FC } from "react";
import { Range } from "react-range";

interface PriceRangeSliderProps {
  setRangeValues: React.Dispatch<React.SetStateAction<[number, number]>>;
  rangeValues: [number, number];
  max: number;
  step: number;
}

const PriceRangeSlider: FC<PriceRangeSliderProps> = ({
  setRangeValues,
  rangeValues,
  max,
  step,
}) => {
  const handleRangeChange = (values: number[]) => {
    setRangeValues(values as [number, number]);
  };

  return (
    <div>
      <label className="property-search-label mb-2">Price</label>
      <Range
        values={rangeValues}
        step={step}
        min={0}
        max={max}
        onChange={handleRangeChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              height: "4px",
              background: "#ccc",
              position: "relative",
            }}
          >
            <div
              style={{
                height: "100%",
                background: "rgba(28, 49, 78, 1)",
                opacity: 0.5,
                position: "absolute",
                left: `${(rangeValues[0] / max) * 100}%`,
                width: `${((rangeValues[1] - rangeValues[0]) / max) * 100}%`,
              }}
            />
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "16px",
              width: "16px",
              borderRadius: "50%",
              backgroundColor: "#ccc",
              border: "1px solid  #d8dadb",
              boxShadow: "0px 2px 6px #aaa",
            }}
          />
        )}
      />
      <div className="d-flex justify-content-between mt-3">
        <div>{rangeValues[0].toLocaleString()}</div>
        <div>{rangeValues[1].toLocaleString()}</div>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
