// src/components/TextInput1.jsx

import { useState } from "react";

function TextInput1() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Entered text: {text}</p>
    </div>
  );
}

export default TextInput1;
