import { FC, useMemo } from "react";
import DashboardPropertiesView from "./DashboardPropertiesView";
import { useIsValidToken } from "../../../hook/useIsAdmin";
import UnauthorizedAccess from "../unauthorizedAccess/UnauthorizedAccess";
import useGraphQLQuery, {
  GET_PROPERTIES_ALL,
} from "../../../hook/useGraphQLQuery";

const DashboardPropertiesAll: FC = () => {
  const isAdmin = useIsValidToken();

  const propertyR = useGraphQLQuery(
    GET_PROPERTIES_ALL,
    { sale: "rent" },
    "endpoint2"
  );

  const propertyS = useGraphQLQuery(
    GET_PROPERTIES_ALL,
    { sale: "sale" },
    "endpoint2"
  );

  const data = useMemo(() => {
    const propertyRent = propertyR ?? [];
    const propertySale = propertyS ?? [];
    return [...propertySale, ...propertyRent];
  }, [propertyR.data?.propertyAll, propertyS.data?.propertyAll]);

  if (!isAdmin) {
    return <UnauthorizedAccess />;
  }

  return <DashboardPropertiesView data={data} />;
};

export default DashboardPropertiesAll;
