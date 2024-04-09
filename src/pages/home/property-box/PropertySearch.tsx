import React, { useState } from "react";
import { Tabs, Tab, Form } from "react-bootstrap";
import Select from "./Select";
import MultiRangeSlider from "./PropertyRange";
import { menuList, location } from "../../../assets/data/myData";
import "./property-box.css";
import { useNavigate } from "react-router-dom";
import AnimatedComponentList from "../../../components/animated/AnimatedComponentList";
import { searchDataFormat } from "../../../assets/data/myData";
import { renderToStringWithData } from "@apollo/client/react/ssr";

type valueType =
  | string
  | [number, number]
  | ((prevRange: [number, number]) => [number, number]);

const PropertySearch: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    activeTab: "rent",
    selectedLocation: "All",
    selectedProperty: "All",
    slelectedRangeValues: [0, 5000],
    selectedLocationSale: "All",
    selectedPropertySale: "All",
    slelectedRangeValuesSale: [0, 2000000],
  });

  const formDataHandler = (identifier: string, value: valueType) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [identifier]: value,
    }));
  };

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = formData;

    navigate("/search", { state: { data } });
  };

  return (
    <div className="col-md-6 col-sm-12 col-xs-12  property-input-box ">
      <AnimatedComponentList index={3}>
        <div className="d-flex align-content-center flex-wrap">
          <div className="property-input-box-background ">
            <Tabs
              defaultActiveKey="rent"
              id="property-tabs"
              activeKey={formData.activeTab}
              onSelect={(value: string | null) =>
                formDataHandler("activeTab", value as string)
              }
            >
              <Tab
                eventKey="rent"
                title={
                  formData.activeTab === "rent" ? (
                    <div className="property-active-tab">
                      <i className="fa fa-check" /> For rent
                    </div>
                  ) : (
                    <div className="property-tab">For rent</div>
                  )
                }
              >
                <Form onSubmit={formSubmit}>
                  <Select
                    selectionData={location}
                    onData="Select Desired Locality"
                    labelValue="LOCATION"
                    onValueChange={(value) =>
                      formDataHandler("selectedLocation", value)
                    }
                  />
                  <Select
                    selectionData={menuList}
                    onData="Select Property Type"
                    labelValue="PROPERTY TYPE"
                    onValueChange={(value) =>
                      formDataHandler("selectedProperty", value)
                    }
                  />

                  <div className="property-range">
                    <MultiRangeSlider
                      rangeValues={formData.slelectedRangeValues}
                      setRangeValues={(value) =>
                        formDataHandler("slelectedRangeValues", value)
                      }
                      max={5000}
                      step={50}
                    />
                  </div>
                  <button className="property-btn">Search</button>
                </Form>
              </Tab>
              <Tab
                eventKey="sale"
                title={
                  formData.activeTab === "sale" ? (
                    <div className="property-active-tab">
                      <i className="fa fa-check" /> For sale
                    </div>
                  ) : (
                    <div className="property-tab">For sale</div>
                  )
                }
              >
                <Form onSubmit={formSubmit}>
                  <Select
                    selectionData={location}
                    onData="Select Desired Locality"
                    labelValue="LOCATION"
                    onValueChange={(value) =>
                      formDataHandler("selectedLocationSale", value)
                    }
                  />
                  <Select
                    selectionData={menuList}
                    onData="Select Property Type"
                    labelValue="PROPERTY TYPE"
                    onValueChange={(value) =>
                      formDataHandler("selectedPropertySale", value)
                    }
                  />

                  <div className="property-range">
                    {" "}
                    <MultiRangeSlider
                      rangeValues={formData.slelectedRangeValuesSale}
                      setRangeValues={(value) =>
                        formDataHandler("slelectedRangeValuesSale", value)
                      }
                      max={2000000}
                      step={10000}
                    />
                  </div>
                  <button className="property-btn">Search</button>
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
