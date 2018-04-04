import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import countBells from "./helpers/countBells";
import isValidTime from "./helpers/isValidTime";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      startTime: "",
      endTime: "",
      startTimeError: "",
      endTimeError: "",
      total: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    const errMessage = name + "Error";

    this.setState({
      [name]: value,
      [errMessage]: ""
    });
  }

  handleSubmit() {
    let startTime = this.state.startTime;
    let endTime = this.state.endTime;
    let error = "Enter time in HH:MM format";
    let isValid = isValidTime(startTime);
    if (!isValid) {
      this.setState({ startTimeError: error });
      return;
    }
    isValid = isValidTime(endTime);
    if (!isValid) {
      this.setState({ endTimeError: error });
      return;
    }
    let total = countBells(startTime, endTime);
    this.setState({ total: total });
  }

  render() {
    return (
      <div id="container">
        <TextField
          floatingLabelText="Start Time"
          name="startTime"
          value={this.state.startTime}
          onChange={this.handleInput}
          errorText={this.state.startTimeError}
        />
        <br />
        <TextField
          name="endTime"
          floatingLabelText="End Time"
          value={this.state.endTime}
          onChange={this.handleInput}
          errorText={this.state.endTimeError}
        />
        <br />
        <RaisedButton
          label="Calculate Bell Count"
          primary={true}
          style={{ margin: "30px" }}
          onClick={this.handleSubmit}
        />
        {this.state.total && (
          <p id="result">
            Total number of bells between these hours: {this.state.total}
          </p>
        )}
      </div>
    );
  }
}

export default App;
