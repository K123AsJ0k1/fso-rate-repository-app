import { useMutation } from "@apollo/client";
import { AUTH } from "../graphql/mutations";

const useSignIn = () => {
  const [mutation, result] = useMutation(AUTH);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    mutation({ variables: { username, password } });
  };

  return [signIn, result];
};

export default useSignIn;
