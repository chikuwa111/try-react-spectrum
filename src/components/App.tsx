import React from "react";
import { FocusScopeExample } from "./FocusScope";
import { SingleCheckboxExample } from "./SingleCheckbox";
import { TextFieldExample } from "./TextField";

export function App() {
  return (
    <>
      <h1>Hello React Spectrum!</h1>
      <TextFieldExample />
      <SingleCheckboxExample />
      <FocusScopeExample />
    </>
  );
}
