import React, { Component } from "react";
import FormContainer from "./FormContainer";
import PhraseListContainer from "./PhraseListContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      phrases: [
        "A bird in the hand is worth two in the bush",
        "Lost items are always in the last place you look",
        "Never look a gift horse in the mouth"
      ],
      phrase: "",
      phraseId: undefined,
      display: "block"
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const newPhrase = this.state.phrase;
    if (this.state.phraseId + 1) {
      this.setState(previousState => ({
        phrases: previousState.phrases.map((phrase, i) => {
          if (i === previousState.phraseId) {
            return newPhrase;
          } else {
            return phrase;
          }
        }),
        phrase: "",
        phraseId: undefined
      }));
    } else {
      this.setState(previousState => ({
        phrases: [...previousState.phrases, newPhrase],
        phrase: ""
      }));
    }
  };

  handleChange = event => {
    this.setState({ phrase: event.target.value });
  };

  handleSelection = (phrase, phraseId) => {
    this.setState({ phrase: phrase, phraseId: phraseId });
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div style={{ fontSize: "300%" }}>SUPER PHRASE FORM APP</div>
        <FormContainer
          phrase={this.state.phrase}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
        <PhraseListContainer
          {...this.state}
          handleSelection={this.handleSelection}
        />
        <div
          style={{
            display: this.state.display,
            top: 0,
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "blue"
          }}
          onClick={() => this.setState({ display: "none" })}
        >
          HEY!
        </div>
      </div>
    );
  }
}

export default App;
