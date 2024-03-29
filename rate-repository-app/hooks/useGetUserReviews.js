import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER_REVIEWS } from "../graphql/queries";

const useGetUserReviews = () => {
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER_REVIEWS, {
    fetchPolicy: "cache-and-network",
  });
  return {
    userReviews: data?.me?.reviews?.edges,
    loading,
    refetch,
  };
};

export default useGetUserReviews;
