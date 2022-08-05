import { useMutation } from "@apollo/client";
import { REMOVE_REVIEW } from "../graphql/mutations";

const useRemoveReview = () => {
  const [mutate, result] = useMutation(REMOVE_REVIEW);

  const deleteReview = async (reviewId) => {
    const payload = await mutate({ variables: reviewId });
    return payload;
  };

  return [deleteReview, result];
};

export default useRemoveReview;
