import React from "react";

class FormContainer extends React.Component {
  render() {
    const { handleChange, handleSubmit, phrase } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            name="phrase"
            type="text"
            onChange={handleChange}
            value={phrase}
            style={{ width: "60%", fontSize: "200%" }}
          />
        </form>
      </div>
    );
  }
}

export default FormContainer;
