import { FC, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import gql from "graphql-tag";
import { useMutation } from "@apollo/client";
import axios from "axios";
import { useNavigate } from "react-router";

interface FormData {
  sale: string;
  property: string;
  place: string;
  price: number;
  square: number;
  img: string;
  num: number;
  img1: string;
  img2: string;
  img3: string;
}

const defaultFormData = {
  sale: "sale",
  property: "offices",
  place: "Zvezdara",
  price: 0,
  square: 0,
  img: "",
  img1: "",
  img2: "",
  img3: "",
  num: parseInt(Date.now().toString().substring(6, 12), 10) || 1000,
};

const ADD_PROPERTY = gql`
  mutation AddProperty(
    $sale: String!
    $property: String!
    $place: String!
    $price: Int!
    $square: Int!
    $img: String!
    $img1: String!
    $img2: String!
    $img3: String!
    $num: Int!
  ) {
    addProperty(
      sale: $sale
      property: $property
      place: $place
      price: $price
      square: $square
      img: $img
      img1: $img1
      img2: $img2
      img3: $img3
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
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const file1Ref = useRef<HTMLInputElement>(null);
  const file2Ref = useRef<HTMLInputElement>(null);
  const file3Ref = useRef<HTMLInputElement>(null);
  const file4Ref = useRef<HTMLInputElement>(null);

  const handleReturnBackClick = () => {
    navigate("/dashboard/");
  };

  const [executeMutation] = useMutation(ADD_PROPERTY, {
    context: { clientName: "endpoint2" },
  });

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = event.target;
    let updatedValue;
    setIsSuccess(false);

    if (
      (name === "price" || name === "square") &&
      value !== "" &&
      !isNaN(Number(value))
    ) {
      updatedValue = parseFloat(value);
    } else {
      updatedValue = value;
    }

    setFormData({
      ...formData,
      [name]: updatedValue,
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsSuccess(false);

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const { id } = event.target;

      // Generate a unique name (you can use timestamps, UUIDs, or any unique generation logic)
      const uniqueFileName = `${Date.now()}_${file.name}`;

      // Create a new File object with the modified name
      const modifiedFile = new File([file], uniqueFileName, {
        type: file.type,
      });

      const uploadedFileName = `/public/img/property/${uniqueFileName}`;

      setFormData({
        ...formData,
        [id]: uploadedFileName,
      });

      await handleFileUpload(modifiedFile);
    }
  };

  const handleFileUpload = async (file: File) => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        await axios.post("http://localhost:8000/upload", formData);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    if (
      !formData.price ||
      !formData.square ||
      isNaN(Number(formData.price)) ||
      isNaN(Number(formData.square))
    ) {
      alert("Please insert valid data");
      return;
    }

    if (!formData.img || !formData.img1 || !formData.img2 || !formData.img3) {
      alert("Please upload 4 photo");
      return;
    }

    try {
      const { data } = await executeMutation({ variables: formData });

      // Check if the data object has the expected structure indicating success
      if (data && data.addProperty && data.addProperty.property) {
        setIsSuccess(true);

        // Clear file input values
        file1Ref.current && (file1Ref.current.value = "");
        file2Ref.current && (file2Ref.current.value = "");
        file3Ref.current && (file3Ref.current.value = "");
        file4Ref.current && (file4Ref.current.value = "");
      } else {
        console.error("Mutation was not successful");
      }
    } catch (error) {
      console.error("Error in mutation:", error);
    }

    setFormData(defaultFormData);
    defaultFormData.num = parseInt(Date.now().toString().substring(6, 12), 10);

    file1Ref.current && (file1Ref.current.value = "");
    file2Ref.current && (file2Ref.current.value = "");
    file3Ref.current && (file3Ref.current.value = "");
    file4Ref.current && (file4Ref.current.value = "");
  };

  return (
    <>
      <button onClick={handleReturnBackClick}>return to the dashboard</button>

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
            <Form.Group controlId="img" className="mb-3">
              <Form.Label>Upload photo 1</Form.Label>
              <Form.Control
                type="file"
                ref={file1Ref}
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="img1" className="mb-3">
              <Form.Label>upload photo 2</Form.Label>
              <Form.Control
                type="file"
                ref={file2Ref}
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="img2" className="mb-3">
              <Form.Label>Upload photo 3</Form.Label>
              <Form.Control
                type="file"
                ref={file3Ref}
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="img3" className="mb-3">
              <Form.Label>Upload photo 4</Form.Label>
              <Form.Control
                type="file"
                ref={file4Ref}
                onChange={handleFileChange}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>{isSuccess ? "Property added successfully!" : ""}</p>
    </>
  );
};

export default AddProperty;
