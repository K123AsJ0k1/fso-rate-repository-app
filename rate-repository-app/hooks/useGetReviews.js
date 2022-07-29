import { useQuery } from "@apollo/client";
import { GET_REVIEWS } from "../graphql/queries";

const useGetReviews = ({ repoId }) => {
  const { data, loading } = useQuery(GET_REVIEWS, {
    fetchPolicy: "cache-and-network",
    variables: { id: repoId },
  });
  return {
    reviews: data?.repository?.reviews?.edges,
    loading,
  };
};

export default useGetReviews;
