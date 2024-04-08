import { FC } from "react";
import { useLocation } from "react-router-dom";

import DashboardPropertiesView from "./DashboardPropertiesView";
import { useIsValidToken } from "../../../hook/useIsAdmin";
import UnauthorizedAccess from "../unauthorizedAccess/UnauthorizedAccess";
import useGraphQLQuery, { GET_PROPERTIES } from "../../../hook/useGraphQLQuery";

const DashboardProperties: FC = () => {
  const isAdmin = useIsValidToken();
  const location = useLocation();
  const propertyData = location.state?.data[0] || [];

  const { property = "", sale = "" } = propertyData;

  const data = useGraphQLQuery(GET_PROPERTIES, { property, sale }, "endpoint2");

  if (!isAdmin) {
    return <UnauthorizedAccess />;
  }

  return <DashboardPropertiesView data={data} />;
};

export default DashboardProperties;
