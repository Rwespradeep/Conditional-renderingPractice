import React from "react";
import Button from "./Button";
import Input from "./Input";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button label={props.buttonName} />
    </form>
  );
}

export default Form;
