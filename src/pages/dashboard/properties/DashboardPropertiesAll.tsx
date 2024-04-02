import { FC, useMemo } from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import DashboardPropertiesView from "../../../components/dashboard/DashboardPropertiesView";
import { useIsValidToken } from "../../../hook/useIsAdmin";
import UnauthorizedAccess from "../unauthorizedAccess/UnauthorizedAccess";

const GET_PROPERTIES = gql`
  query GetProperties($sale: String!) {
    propertyAll(sale: $sale) {
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

const DashboardPropertiesAll: FC = () => {
  const isAdmin = useIsValidToken();
  const propertyR = useQuery(GET_PROPERTIES, {
    variables: { sale: "rent" },
    context: { clientName: "endpoint2" },
  });

  const propertyS = useQuery(GET_PROPERTIES, {
    variables: { sale: "sale" },
    context: { clientName: "endpoint2" },
  });

  const data = useMemo(() => {
    const propertyRent = propertyR.data?.propertyAll ?? [];
    const propertySale = propertyS.data?.propertyAll ?? [];
    return [...propertySale, ...propertyRent];
  }, [propertyR.data?.propertyAll, propertyS.data?.propertyAll]);

  if (!isAdmin) {
    return <UnauthorizedAccess />;
  }

  return <DashboardPropertiesView data={data} />;
};

export default DashboardPropertiesAll;
