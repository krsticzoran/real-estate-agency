import { FC, useRef, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import axios from "axios";
import BackToTheDashboard from "../../../components/dashboard/BackToTheDashboard";
import useGraphQLMutation from "../../../graphql/hook/useGraphQLMutation";
import { ADD_PROPERTY } from "../../../graphql/queries";

import { location } from "../../../assets/data/myData";
import { menuList as propertyTypes } from "../../../assets/data/myData";
import { addPropertydefaultData as defaultFormData } from "../../../assets/data/myData";

const AddProperty: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState(defaultFormData);
  const file1Ref = useRef<HTMLInputElement>(null);
  const file2Ref = useRef<HTMLInputElement>(null);
  const file3Ref = useRef<HTMLInputElement>(null);
  const file4Ref = useRef<HTMLInputElement>(null);

  const executeMutation = useGraphQLMutation(ADD_PROPERTY);

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

      const uploadedFileName = `/img/property/${uniqueFileName}`;

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

        await axios.post("https://www.real-estate-react.com/upload", formData);
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    console.log(event);
    event.preventDefault();
    if (!formData.square || isNaN(Number(formData.square))) {
      alert("Please insert valid square");
      return;
    }
    if (!formData.price || isNaN(Number(formData.price))) {
      alert("Please insert valid price");
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
      <div className="p-3">
        <Container>
          <BackToTheDashboard />
          <Form
            onSubmit={handleSubmit}
            className="mt-5 p-5 border col-lg-9 col-xll-10 mx-auto "
            style={{ backgroundColor: "#f7f7f7" }}
          >
            <h2 className="text-center">Add Property</h2>

            <Form.Label htmlFor="assetType" className="pt-2">
              Asset Type
            </Form.Label>
            <Form.Select
              id="assetType"
              aria-label="Default select example"
              name="sale"
              value={formData.sale}
              onChange={handleInputChange}
            >
              <option value="sale">Sale</option>
              <option value="rent">Rent</option>
            </Form.Select>

            <Form.Label htmlFor="propertyType" className="pt-4">
              Property Type
            </Form.Label>
            <Form.Select
              id="propertyType"
              aria-label="Default select example"
              name="property"
              value={formData.property}
              onChange={handleInputChange}
            >
              {propertyTypes.map((property, index) => (
                <option key={index} value={property.toLocaleLowerCase()}>
                  {property}
                </option>
              ))}
            </Form.Select>

            <Form.Label htmlFor="location" className="pt-4">
              Location
            </Form.Label>
            <Form.Select
              id="location"
              aria-label="Default select example"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
            >
              {location.map((location, index) => (
                <option key={index} value={location}>
                  {location}
                </option>
              ))}
            </Form.Select>

            <Row className="pt-4">
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
            <Row className="pt-4">
              <Col>
                <Form.Group controlId="img" className="mb-3">
                  <Form.Label>Upload Photo 1</Form.Label>
                  <Form.Control
                    type="file"
                    ref={file1Ref}
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="img1" className="mb-3">
                  <Form.Label>Upload Photo 2</Form.Label>
                  <Form.Control
                    type="file"
                    ref={file2Ref}
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="img2" className="mb-3">
                  <Form.Label>Upload Photo 3</Form.Label>
                  <Form.Control
                    type="file"
                    ref={file3Ref}
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="img3" className="mb-3">
                  <Form.Label>Upload Photo 4</Form.Label>
                  <Form.Control
                    type="file"
                    ref={file4Ref}
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
          <p>{isSuccess ? "Property added successfully!" : ""}</p>
        </Container>
      </div>
    </>
  );
};

export default AddProperty;
