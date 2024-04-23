import { FC } from "react";
import { useLocation } from "react-router-dom";

import DashboardPropertiesView from "./DashboardPropertiesView";

import useGraphQLQuery from "../../../graphql/hook/useGraphQLQuery";
import { GET_PROPERTIES } from "../../../graphql/queries";

const DashboardProperties: FC = () => {
  const location = useLocation();
  const propertyData = location.state?.data[0] || [];

  const { property = "", sale = "" } = propertyData;

  const data = useGraphQLQuery(GET_PROPERTIES, { property, sale }, "endpoint2");

  return <DashboardPropertiesView data={data} />;
};

export default DashboardProperties;
