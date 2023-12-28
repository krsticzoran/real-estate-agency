import { FC } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const addProperty: FC = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Select aria-label="Default select example">
            <option value="Sale">Sale</option>
            <option value="Rent">Rent</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
            <option value="offices">Office</option>
            <option value="shops">Shop</option>
            <option value="warehouses">Warehouse</option>
            <option value="catering">Catering</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="Default select example">
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
          <Form.Control type="text" id="inputPrice" />
        </Col>
        <Col>
          <Form.Label htmlFor="inputSquare">Square</Form.Label>
          <Form.Control type="text" id="inputSquare" />
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

export default addProperty;
