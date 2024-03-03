import React, { useState } from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import Select from "./Select";
import MultiRangeSlider from "./PropertyRange";
import { menuList, location } from "../../../assets/data/myData";
import "./property-box.css";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import { useNavigate } from "react-router-dom";
import AnimatedComponentList from "../../../components/animated/AnimatedComponentList";

const GET_PROPERTIES = gql`
  query GetProperties(
    $property: String!
    $sale: String!
    $minPrice: Int!
    $maxPrice: Int!
    $place: String!
  ) {
    search(
      property: $property
      sale: $sale
      place: $place
      minPrice: $minPrice
      maxPrice: $maxPrice
    ) {
      property
      sale
      num
      place
      price
      square
      date
      img
    }
  }
`;

const PropertySearch: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>("rent");
  const [selectedLocation, setSelectedLocaction] = useState<string>("All");
  const [selectedProperty, setSelectedProperty] = useState<string>("All");
  const [selectedLocationSale, setSelectedLocactionSale] =
    useState<string>("All");
  const [selectedPropertySale, setSelectedPropertySale] =
    useState<string>("All");
  const [rentRangeValues, setRentRangeValues] = useState<[number, number]>([
    0, 100000,
  ]);
  const [saleRangeValues, setSaleRangeValues] = useState<[number, number]>([
    0, 1000000,
  ]);

  const handleLocationChange = (value: string) => {
    setSelectedLocaction(value);
  };
  const handlePropertyChange = (value: string) => {
    setSelectedProperty(value);
  };

  const handleLocationChangeSale = (value: string) => {
    setSelectedLocactionSale(value);
  };
  const handlePropertyChangeSale = (value: string) => {
    setSelectedPropertySale(value);
  };

  const { data: rentData } = useQuery(GET_PROPERTIES, {
    variables: {
      property: selectedProperty,
      sale: "rent",
      place: selectedLocation,
      minPrice: rentRangeValues[0],
      maxPrice: rentRangeValues[1],
    },
    context: { clientName: "endpoint2" },
  });
  const { data: saleData } = useQuery(GET_PROPERTIES, {
    variables: {
      property: selectedPropertySale,
      sale: "sale",
      place: selectedLocationSale,
      minPrice: saleRangeValues[0],
      maxPrice: saleRangeValues[1],
    },
    context: { clientName: "endpoint2" },
  });
  let data = rentData;

  function handleSearch(activeTab: string): void {
    if (activeTab === "sale") {
      data = saleData;
    }
    navigate("/search", { state: { data } });
  }

  return (
    <div className="col-md-6 col-sm-12 col-xs-12  property-input-box ">
      <AnimatedComponentList index={1}>
        <div className="d-flex align-content-center flex-wrap">
          <div className="property-input-box-background ">
            <Tabs
              defaultActiveKey="rent"
              id="property-tabs"
              activeKey={activeTab}
              onSelect={(tab) => setActiveTab(tab as string)}
            >
              <Tab
                eventKey="rent"
                title={
                  activeTab === "rent" ? (
                    <div className="property-active-tab">
                      <i className="fa fa-check" /> For rent
                    </div>
                  ) : (
                    <div className="property-tab">For rent</div>
                  )
                }
              >
                <Form>
                  <Select
                    selectionData={location}
                    onData="Select Desired Locality"
                    labelValue="LOCATION"
                    onValueChange={handleLocationChange}
                  />
                  <Select
                    selectionData={menuList}
                    onData="Select Property Type"
                    labelValue="PROPERTY TYPE"
                    onValueChange={handlePropertyChange}
                  />
                  <div className="property-range">
                    <MultiRangeSlider
                      rangeValues={rentRangeValues}
                      setRangeValues={setRentRangeValues}
                      max={100000}
                      step={1000}
                    />
                  </div>
                  <Button
                    className="property-btn"
                    onClick={() => handleSearch("rent")}
                  >
                    Search
                  </Button>
                </Form>
              </Tab>
              <Tab
                eventKey="sale"
                title={
                  activeTab === "sale" ? (
                    <div className="property-active-tab">
                      <i className="fa fa-check" /> For sale
                    </div>
                  ) : (
                    <div className="property-tab">For sale</div>
                  )
                }
              >
                <Form>
                  <Select
                    selectionData={location}
                    onData="Select Desired Locality"
                    labelValue="LOCATION"
                    onValueChange={handleLocationChangeSale}
                  />
                  <Select
                    selectionData={menuList}
                    onData="Select Property Type"
                    labelValue="PROPERTY TYPE"
                    onValueChange={handlePropertyChangeSale}
                  />
                  <div className="property-range">
                    <MultiRangeSlider
                      rangeValues={saleRangeValues}
                      setRangeValues={setSaleRangeValues}
                      max={1000000}
                      step={10000}
                    />
                  </div>
                  <Button
                    className="property-btn"
                    onClick={() => handleSearch("sale")}
                  >
                    Search
                  </Button>
                </Form>
              </Tab>
            </Tabs>
          </div>
        </div>
      </AnimatedComponentList>
    </div>
  );
};

export default PropertySearch;
