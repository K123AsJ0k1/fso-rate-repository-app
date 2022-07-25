import { useMutation } from "@apollo/client";
import { AUTH } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTH);
  const authStorage = useAuthStorage();
  const apollo = useApolloClient();

  const signIn = async ({ username, password }) => {
    const payload = await mutate({ variables: { username, password } });

    if (payload.data?.authenticate) {
      await authStorage.setAccessToken(payload.data.authenticate.accessToken);
      apollo.resetStore();
    }

    return payload;
  };

  return [signIn, result];
};

export default useSignIn;
