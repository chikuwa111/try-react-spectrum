import { useTextField } from "@react-aria/textfield";
import React, { useRef, useState } from "react";

type Props = Parameters<typeof useTextField>[0];

export function TextField(props: Props) {
  const ref = useRef();
  const { labelProps, inputProps } = useTextField(props, ref);

  console.group("TextField");
  console.log({ labelProps, inputProps });
  console.groupEnd();

  return (
    <div>
      <label {...labelProps}>{props.label}</label>
      <input {...inputProps} ref={ref} />
    </div>
  );
}

export function TextFieldExample() {
  const [value, setValue] = useState("");

  return (
    <div>
      <h2>TextField</h2>
      <TextField
        value={value}
        onChange={setValue}
        label="label"
        placeholder="placeholder"
      />
    </div>
  );
}
