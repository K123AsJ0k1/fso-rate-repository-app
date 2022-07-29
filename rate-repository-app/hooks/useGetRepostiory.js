import { useQuery } from "@apollo/client";
import { GET_REPO } from "../graphql/queries";

const useGetRepository = ({ repoId }) => {
  const { data, loading } = useQuery(GET_REPO, {
    fetchPolicy: "cache-and-network",
    variables: { id: repoId },
  });
  return {
    repository: data?.repository,
    loading,
  };
};

export default useGetRepository;
