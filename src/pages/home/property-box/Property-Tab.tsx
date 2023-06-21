import React, { useState } from "react";
import { Tabs, Tab, Form, Button } from "react-bootstrap";

const PropertySearch = () => {
  const [activeTab, setActiveTab] = useState<string>("rent");

  const handleSearch = (tab: string) => {
    console.log("Clicked on", tab, "tab");
  };

  return (
    <div>
      <Tabs
        defaultActiveKey="rent"
        id="property-tabs"
        activeKey={activeTab}
        onSelect={(tab) => setActiveTab(tab as string)}
      >
        <Tab eventKey="rent" title="Rent">
          <Form>
            <Button variant="primary" onClick={() => handleSearch("rent")}>
              Search
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="sale" title="Sale">
          <Form>
            <Button variant="primary" onClick={() => handleSearch("sale")}>
              Search
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PropertySearch;
