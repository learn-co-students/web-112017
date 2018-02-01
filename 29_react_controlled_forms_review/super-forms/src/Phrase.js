import React from "react";

const Phrase = ({ phrase, handleSelection, phraseId }) => {
  return (
    <div
      className="phrase"
      style={{
        border: "1px solid gray",
        height: "40px",
        lineHeight: "40px",
        margin: "1em",
        boxShadow: `${Math.random() * 100}px ${Math.random() * 100}px #aaa`,
        backgroundColor: `#${Math.floor(Math.random() * 9)}${Math.floor(
          Math.random() * 9
        )}${Math.floor(Math.random() * 9)}`,
        borderRadius: `5px`,
        overflowY: "scroll"
      }}
      onClick={() => handleSelection(phrase, phraseId)}
    >
      {phrase}
    </div>
  );
};

export default Phrase;
