import { FocusScope } from "@react-aria/focus";
import { useTextField } from "@react-aria/textfield";
import React, { useRef, useState } from "react";

export function FocusScopeExample() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h2>FocusScope</h2>
      <button onClick={() => setIsOpen((isOpen) => !isOpen)}>Toggle</button>
      {isOpen && (
        <FocusScope contain restoreFocus autoFocus>
          <input placeholder="first input" />
          <input placeholder="second input" />
          <input placeholder="third input" />
        </FocusScope>
      )}
    </div>
  );
}
