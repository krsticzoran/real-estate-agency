import { FC, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

interface FormData {
  sale: string;
  property: string;
  place: string;
  price: string;
  square: string;
}

const AddProperty: FC = () => {
  const defaultFormData = {
    sale: "sale",
    property: "offices",
    place: "Zvezdara",
    price: "",
    square: "",
  };

  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
    setFormData(defaultFormData);
  };

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
