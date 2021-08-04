import React from "react";
import { API } from 'aws-amplify'

class LowBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lowballInput: "",
            lowballPrice: 0,
            lowballCutoff: 0,
            lowballOutput: ""
        }
        this.onChange = this.onChange.bind(this);
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

    render() {
        return (
            <div>
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
                <button style={{height:"44px", 
            width:"250px", background: "#01BF71", padding: "2px 5px",
            borderRadius:"50px", border: "none", fontSize:"16px"}} type="submit">
                  Get Lowball
                </button>
              </form>
              <h1>{this.state.lowballOutput}</h1>
            </div>
        )
    }
}

export default LowBall;