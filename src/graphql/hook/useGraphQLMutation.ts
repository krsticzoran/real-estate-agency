import { DocumentNode, useMutation } from "@apollo/client";

function useGraphQLMutation(query: DocumentNode) {
  const [executeMutation] = useMutation(query, {
    context: { clientName: "endpoint2" },
  });

  return executeMutation;
}

export default useGraphQLMutation;
