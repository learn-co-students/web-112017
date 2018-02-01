import React from "react";
import Phrase from "./Phrase";

const PhraseListContainer = ({ phrases, handleSelection }) => {
  const phraseList = phrases.map((phrase, i) => (
    <Phrase
      key={i}
      phraseId={i}
      phrase={phrase}
      handleSelection={handleSelection}
    />
  ));
  return (
    <div
      style={{
        margin: "1em",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)"
      }}
    >
      {phraseList}
    </div>
  );
};

export default PhraseListContainer;
