import { FC, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";

interface FormData {
  sale: string;
  property: string;
  place: string;
  price: number;
  square: number;
  img: string;
  num: number;
}

const defaultFormData = {
  sale: "sale",
  property: "offices",
  place: "Zvezdara",
  price: 0,
  square: 0,
  img: "/img/offices/1.webp",
  num: 1201,
};

const ADD_PROPERTY = gql`
  mutation AddProperty(
    $sale: String!
    $property: String!
    $place: String!
    $price: Int!
    $square: Int!
    $img: String!
    $num: Int!
  ) {
    addProperty(
      sale: $sale
      property: $property
      place: $place
      price: $price
      square: $square
      img: $img
      num: $num
    ) {
      sale
      property
      place
      price
      square
      img
      num
    }
  }
`;

const AddProperty: FC = () => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const [executeMutation, { data, error }] = useMutation(ADD_PROPERTY, {
    context: { clientName: "endpoint2" },
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = event.target;
    const updatedValue =
      name === "price" || name === "square" ? parseFloat(value) : value;
    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await executeMutation({ variables: formData });

    setFormData(defaultFormData);
  };
  console.log(data, error); // Initially, these will be undefined
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Select
            aria-label="Default select example"
            name="sale"
            value={formData.sale}
            onChange={handleInputChange}
          >
            <option value="sale">Sale</option>
            <option value="rent">Rent</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            name="property"
            value={formData.property}
            onChange={handleInputChange}
          >
            <option value="offices">Office</option>
            <option value="shops">Shop</option>
            <option value="warehouses">Warehouse</option>
            <option value="catering">Catering</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select
            aria-label="Default select example"
            name="place"
            value={formData.place}
            onChange={handleInputChange}
          >
            <option value="Zvezdara">Zvezdara</option>
            <option value="Novi Beograd">Novi Beograd</option>
            <option value="Savski venac">Savski venac</option>
            <option value="Palilula">Palilula</option>
            <option value="Stari grad">Stari grad</option>
            <option value="Mladenovac">Mladenovac</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Label htmlFor="inputPrice">Price</Form.Label>
          <Form.Control
            type="text"
            id="inputPrice"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </Col>
        <Col>
          <Form.Label htmlFor="inputSquare">Square</Form.Label>
          <Form.Control
            type="text"
            id="inputSquare"
            name="square"
            value={formData.square}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload photo 1</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>upload photo 2</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload photo 3</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload photo 4</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Col>
      </Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddProperty;
