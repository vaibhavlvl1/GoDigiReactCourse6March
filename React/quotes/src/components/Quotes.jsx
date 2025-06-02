import React, { useEffect, useState } from "react";
import axios from "axios";
import { Mail, Share } from "lucide";

export default function Quotes() {
  const [quote, setQuote] = useState();
  const [index, setIndex] = useState(1);

  function rng() {
    return Math.floor(Math.random() * 30);
  }

  async function getQuotes() {
    try {
      setIndex(rng());
      const response = await axios.get(`https://dummyjson.com/quotes/${index}`);
      console.log(response.data);
      setQuote(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <div className="quoteContainer">
      {quote ? (
        <div className="quote">
          <quote style={{ fontSize: "30px", textTransform: "capitalize" }}>
            {quote.quote}
          </quote>
          <p>{quote.author}</p>
        </div>
      ) : (
        <p>Click To Get Quotes</p>
      )}

      <button onClick={() => getQuotes()}>Get Quote</button>
      <div className="shareButtons">
        <a
          target="_blank"
          href={`whatsapp://send?text=${quote ? quote.quote : ""}by${
            quote ? quote.author : ""
          }`}
        >
          WhatsApp
        </a>
        <a
          target="_blank"
          href={`mailto:?subject=Todays Quote&amp&body=${
            quote ? quote.quote : ""
          } by${quote ? quote.author : ""} `}
        >
          {/* <Mail /> */}EMail
        </a>
      </div>
    </div>
  );
}
