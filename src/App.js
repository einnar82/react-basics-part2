import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      age: ""
    };
  }

  handleChange = evt => {
    evt.persist();
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      <>
        <p>my first is {this.state.firstName}</p>
        {Object.keys(this.state).map((keyName, index) => (
          <div key={index}>
            {keyName}:{" "}
            <input type="text" name={keyName} onChange={this.handleChange} />
          </div>
        ))}
      </>
    );
  }
}

export default App;
