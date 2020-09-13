import { useSwitch } from "@react-aria/switch";
import { useToggleState } from "@react-stately/toggle";
import React, { useRef, useState } from "react";

type Props = Parameters<typeof useToggleState>[0] &
  Parameters<typeof useSwitch>[0];

export function SingleCheckbox(props: Props) {
  const state = useToggleState(props);
  const ref = useRef();
  const { inputProps } = useSwitch(props, state, ref);

  console.group("SingleCheckbox");
  console.log({ inputProps });
  console.groupEnd();

  return (
    <label>
      <input {...inputProps} ref={ref} />
      {props.children}
    </label>
  );
}

export function SingleCheckboxExample() {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div>
      <h2>SingleCheckbox</h2>
      <SingleCheckbox isSelected={isSelected} onChange={setIsSelected}>
        checkbox!
      </SingleCheckbox>
    </div>
  );
}
