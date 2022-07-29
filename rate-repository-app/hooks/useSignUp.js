import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import useSignIn from "./useSignIn";

const useSignUp = () => {
  const [signIn] = useSignIn();
  const [mutate, result] = useMutation(CREATE_USER);

  const signUp = async (user) => {
    const payload = await mutate({ variables: user });
    await signIn(user.user);
    return payload;
  };

  return [signUp, result];
};

export default useSignUp;
