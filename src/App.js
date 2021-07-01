import React from "react";
import './App.css';
import { API } from 'aws-amplify'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  helloWorld = async () => {
    const data = await API.get('awsbuildonApi', '/model')
    console.log(data)
  }

  onSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await API.post('awsbuildonApi', '/model', {
        body: { 
          name: this.state.searchInput, 
        }
      })
      console.log(data)
    } catch (err) {
      console.log("ERRORS:", err)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.helloWorld}>GET Hello World</button>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              name="searchInput"
              required
              onChange={this.onChange}
            />
            <button type="submit">POST Model</button>
          </form>
        </header>
      </div>
  )};
}

export default App;
