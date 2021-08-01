import React from "react";
import './App.css';
import { API } from 'aws-amplify'
import Predictions from '@aws-amplify/predictions';

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
    const comprehend = "https://dpomq4vx9e.execute-api.us-east-1.amazonaws.com/Comprehend-v1/retypecomprehend";
    fetch(comprehend, {
      method: "POST",
      body: {
        "body": "Thanks for the speedy replies! Hope you enjoy the product"
      }
    })
    .then(result => {
      this.setState({retypeOutput:result.body});
    })
    .catch(err => {
      console.log({ err });
    });
  }

  render() {
    return (
      <div className="App">
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
