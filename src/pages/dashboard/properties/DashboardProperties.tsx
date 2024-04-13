import { FC } from "react";
import { useLocation } from "react-router-dom";

import DashboardPropertiesView from "./DashboardPropertiesView";
import { useIsValidToken } from "../../../graphql/hook/useIsAdmin";
import UnauthorizedAccess from "../unauthorizedAccess/UnauthorizedAccess";
import useGraphQLQuery from "../../../graphql/hook/useGraphQLQuery";
import { GET_PROPERTIES } from "../../../graphql/queries";

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
