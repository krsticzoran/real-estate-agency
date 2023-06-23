import React, { useState } from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";
import Select from "./Select";
import { menuList, location } from "../../../assets/data/myData";
import "./property-box.css";

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState<string>("rent");
  const [selectedLocation, setSelectedLocaction] = useState<string>("All");
  const [selectedProperty, setSelectedProperty] = useState<string>("All");
  const [selectedLocationSale, setSelectedLocactionSale] =
    useState<string>("All");
  const [selectedPropertySale, setSelectedPropertySale] =
    useState<string>("All");

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

  // TODO: Add code to handle selected property
  const handleSearch = (tab: string) => {
    if (tab === "rent") {
      console.log(tab, selectedLocation, selectedProperty);
    } else {
      console.log(tab, selectedLocationSale, selectedPropertySale);
    }
  };

  return (
    <div className="col-md-6 col-sm-12 col-xs-12 d-flex align-content-center flex-wrap property-input-box ">
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
  );
};

export default PropertySearch;
