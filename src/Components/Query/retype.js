import React from "react";

class Retype extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            retypeInput: "",
            retypeOutput: ""
        }
        this.onChange = this.onChange.bind(this);
        this.getRetype = this.getRetype.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
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
            return result.json();
        })
        .then(result => this.setState({retypeOutput: result.body}))
        .catch(err => {
            console.log({ err });
        });
    }


  render() {
    return (
        <div>
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
      </div>
  )};
}

export default Retype;