import { DocumentNode, useQuery } from "@apollo/client";

export default function useGraphQLQuery(
  query: DocumentNode,
  variables: { [key: string]: string | undefined | number },
  endpoint: string
) {
  const { data } = useQuery(query, {
    variables,
    context: { clientName: endpoint },
  });

  const result = data ? data[Object.keys(data)[0]] : [];

  return result;
}
