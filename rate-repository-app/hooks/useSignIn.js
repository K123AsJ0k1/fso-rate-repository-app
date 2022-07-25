import { useMutation } from "@apollo/client";
import { AUTH } from "../graphql/mutations";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTH);

  const signIn = async ({ username, password }) => {
    const payload = await mutate({ variables: { username, password } });

    return payload;
  };

  return [signIn, result];
};

export default useSignIn;
