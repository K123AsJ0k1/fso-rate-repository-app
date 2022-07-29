import { useMutation } from "@apollo/client";
import { REVIEW } from "../graphql/mutations";

const useReview = () => {
  const [mutate, result] = useMutation(REVIEW);

  const review = async (review) => {
    console.log(review);
    const payload = await mutate({ variables: review });
    return payload;
  };

  return [review, result];
};

export default useReview;
