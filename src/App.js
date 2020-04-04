import React from "react";
import { withAuthenticator } from "aws-amplify-react"; // or 'aws-amplify-react-native';

import logo from "./logo.svg";
import "./App.css";
import "@aws-amplify/ui/dist/style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default withAuthenticator(App, {
  signUpConfig: {
    hideAllDefaults: true,
    defaultCountryCode: "1",
    signUpFields: [
      {
        label: "Email Address",
        key: "username",
        required: true,
        displayOrder: 1,
        type: "string",
      },
      {
        label: "Password",
        key: "password",
        required: true,
        type: "password",
      },
    ],
  },
});
