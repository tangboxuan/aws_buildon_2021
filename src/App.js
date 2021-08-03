import React from "react";
import './App.css';
import { API } from 'aws-amplify'
import Predictions from '@aws-amplify/predictions';


import NavBar from './Navbar';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentimentInput: "",
      sentimentOutput: "",
      retypeInput: "",
      lowballInput: "",
      lowballPrice: 0,
      lowballCutoff: 0,
      lowballOutput: ""
    }
    this.onChange = this.onChange.bind(this);
    this.getSentiment = this.getSentiment.bind(this);
    this.getRetype = this.getRetype.bind(this);
    this.getLowball = this.getLowball.bind(this);
    this.streamReader = this.streamReader.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  getLowball = async (event) => {
    event.preventDefault();
    try {
      const data = await API.post('awsbuildonApi', '/model', {
        body: { 
          text: this.state.lowballInput, 
          price: this.state.lowballPrice, 
          cutoff: this.state.lowballCutoff,
        }
      })
      // console.log(data);
      this.setState({lowballOutput: data.verdict})
    } catch (err) {
      console.log(err)
    }
  }

  getSentiment = async (event) => {
    event.preventDefault();
    Predictions.interpret({
      text: {
        source: {
          text: this.state.sentimentInput,
        },
        type: "ALL"
      }
    })
    .then(result => {
      const sentiment = result.textInterpretation.sentiment.predominant
      this.setState({sentimentOutput:sentiment})
    })
    .catch(err => {
      console.log({ err })
      if (TypeError) this.setState({sentimentOutput:'UNRECOGNISED'});
    });
  }

  getRetype = async (event) => {
    event.preventDefault();
    const comprehend = "https://qy9oimwbr2.execute-api.us-east-1.amazonaws.com/retypecomprehend/comprehend";
    fetch(comprehend, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "body": this.state.retypeInput,
      })
    })
    .then(result => {
      console.log(result);
      // return this.streamReader(result.body);
      return result.json();
    })
    .then(result => this.setState({retypeOutput: result.body}))
    .catch(err => {
      console.log({ err });
      // this.setState({retypeOutput:this.state.retypeInput});
    });
  }
  streamReader = async (stream) => {
    const reader = stream.getReader();
    var finalString = ""
    reader.read().then(
      function processText({ done, value }) {
        if (done) {
          const string = String.fromCharCode.apply(null, value);
          finalString = finalString.concat(string);
          console.log(finalString)
          return finalString;
        }
        const string = String.fromCharCode.apply(null, value);
        finalString = finalString.concat(string);
        return reader.read().then(processText);
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar/>
        <header className="App-header">
          <form onSubmit={this.getLowball}>
            <textarea
              name="lowballInput"
              required
              onChange={this.onChange}
              rows={3}
              cols={30}
            />
            <br/>
            <label>List Price: </label>
            <input
                type="number"
                name="lowballPrice"
                required
                onChange={this.onChange}
            />
            <br/>
            <label>Cutoff: </label>
            <input
                type="number"
                step=".01"
                name="lowballCutoff"
                required
                onChange={this.onChange}
            />
            <br/>
            <button type="submit">Get Lowball</button>
          </form>
          <h1>{this.state.lowballOutput}</h1>
          <form onSubmit={this.getSentiment}>
            <textarea
              // type="textarea"
              name="sentimentInput"
              required
              onChange={this.onChange}
              rows={3}
              cols={30}
            />
            <br/>
            <button type="submit">Get Comprehend Sentiment</button>
          </form>
          <h1>{this.state.sentimentOutput}</h1>
          <form onSubmit={this.getRetype}>
            <textarea
              // type="textarea"
              name="retypeInput"
              required
              onChange={this.onChange}
              rows={3}
              cols={30}
            />
            <br/>
            <button type="submit">Get Retype Sentiment</button>
          </form>
          <h1>{this.state.retypeOutput}</h1>
        </header>
      </div>
  )};
}

export default App;
