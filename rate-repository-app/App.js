import Main from "./components/Main";
import createApolloClient from "./utils/apolloClient";
import { StatusBar } from "expo-status-bar";
import { NativeRouter } from "react-router-native";
import { ApolloProvider } from "@apollo/client";
import Constants from "expo-constants";

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.manifest);
  console.log(Constants.manifest.extra.uri);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
