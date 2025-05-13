import { useState } from "react";

export default function Message() {
  const [isMessage, setIsMessage] = useState(true);

  let message = "Hello World";
  let defaultMessage = "There is no Message";

  return (
    <div>
      <h1>{isMessage ? message : defaultMessage}</h1>
      <button onClick={() => setIsMessage(!isMessage)}>
        {isMessage ? "Hide Message" : "Show Message"}
      </button>
    </div>
  );
}

