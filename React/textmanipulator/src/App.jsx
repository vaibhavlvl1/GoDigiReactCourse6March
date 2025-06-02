import { react, useContext, useRef, useState } from "react";

import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [changedText, setChangedText] = useState("");
  const [copied,setCopied] = useState(false)

  const output = useRef();

  function handleUpperCase(e) {
    e.preventDefault();

    let upperText = inputText.toUpperCase();
    setChangedText(upperText);
  }

  function handleLowerCase(e) {
    e.preventDefault();

    let lowerText = inputText.toLowerCase();
    setChangedText(lowerText);
  }

  function handleTrim(e) {
    e.preventDefault();

    let text = inputText.trim();
    setChangedText(text);
  }

  function handleCountLength(e) {
    e.preventDefault();
    let length = inputText.length;
    let output = `The Length of the Entered String is ${length}`;
    setChangedText(output);
  }

  function handleCountWords(e) {
    e.preventDefault();
    let wordArray = inputText.split(" ");
    let output = `The Number of Words in Above String Are ${wordArray.length}`;
    setChangedText(output);
  }
  function handleReset(e) {
    e.preventDefault();
    setChangedText("");
    setInputText("");
  }

  function copyToClipBoard() {
    window.navigator.clipboard.writeText(changedText)
    setCopied(true);
    setTimeout(()=>{
      setCopied(false)
    },3000)
    }

  return (
    <div className="app-container">
      <h1 style={{ marginBottom: 40, color: "#fff" }}>Text Manipulator</h1>
      <section>
        <form>
          <input
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Input Text"
            type="text"
          />
          <div className="buttons">
            <button onClick={(e) => handleUpperCase(e)}>To Upper case</button>
            <button onClick={(e) => handleLowerCase(e)}>To Lower case</button>
            <button onClick={(e) => handleTrim(e)}>Trim</button>
            <button onClick={(e) => handleCountLength(e)}>Count Length</button>
            <button onClick={(e) => handleCountWords(e)}>Count Words</button>
            <button
              onClick={(e) => {
                handleReset(e);
              }}
            >
              Reset
            </button>
          </div>
        </form>
      </section>

      {changedText && (
        <section className="changedText">
          <h1 ref={output}>
            {changedText}
            <button onClick={copyToClipBoard} className="copybtn">
              {
                copied ?
                "Copied !"
                :
                "Copy"

              }
            </button>
          </h1>
        </section>
      )}
    </div>
  );
}

export default App;
