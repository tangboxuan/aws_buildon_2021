//Sentiment
import React from "react";
import Predictions from '@aws-amplify/predictions';


class Sentiment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sentimentInput: "",
            sentimentOutput: "",
        }
        this.onChange = this.onChange.bind(this);
        this.getSentiment = this.getSentiment.bind(this);
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
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
            console.log({ err });
            if (TypeError) this.setState({sentimentOutput:'UNRECOGNISED'});
        });
    }

    render() {
        return (
            <div>
            <form onSubmit={this.getSentiment}>
                <textarea
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
        </div>
    )};
}

export default Sentiment;
