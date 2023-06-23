import React from "react";
import { Form } from "react-bootstrap";

interface MyComponentProps {
  selectionData: string[];
  onData: string;
  labelValue: string;
  onValueChange: (value: string) => void;
}

const SelectedProperty: React.FC<MyComponentProps> = ({
  selectionData,
  onData,
  labelValue,
  onValueChange,
}) => {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    onValueChange(value);
  };

  return (
    <Form.Group>
      <label className="property-search-label">{labelValue}</label>
      <Form.Select
        aria-label=" select "
        onChange={handleSelectChange}
        className="custom-select"
      >
        <option key={onData} disabled value="">
          {onData}
        </option>
        <option key="all">All</option>
        {selectionData.map((selection) => (
          <option key={selection} value={selection}>
            {selection}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default SelectedProperty;
