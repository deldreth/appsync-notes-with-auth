import React from "react";

import { ApolloProvider } from "react-apollo";
import { withAuthenticator } from "aws-amplify-react";
import { Rehydrated } from "aws-appsync-react";

import "./App.css";
import "@aws-amplify/ui/dist/style.css";

import { client, signUpConfig } from "./appSyncConfig";
import Notes from "./Components/Notes";

function App() {
  return (
    <ApolloProvider client={client}>
      <Rehydrated>
        <div className="App">
          <section>
            <h1>Notes</h1>
            <Notes />
          </section>
        </div>
      </Rehydrated>
    </ApolloProvider>
  );
}

export default withAuthenticator(App, { signUpConfig });
