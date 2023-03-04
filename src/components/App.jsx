import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? (
        <Form buttonName="Login" />
      ) : (
        <Form buttonName="Register" />
      )}
    </div>
  );
}

export default App;
