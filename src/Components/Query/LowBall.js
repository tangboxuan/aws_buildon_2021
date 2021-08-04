//LowBall
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
            <div className = 'Lowball'>
              <form onSubmit={this.getLowball}>
      
                <label className="input-group-text">Message</label>
                <textarea
                  class="form-control"
                  name="lowballInput"
                  placeholder="Enter message"
                  required
                  onChange={this.onChange}
                  rows={3}
                  cols={30}
                />
              
                <br/>
                <div className="input-group">
                  <label style={{width:"110px"}} class="input-group-text">List Price: </label>
                  <input
                      className="form-control"
                      placeholder="Original Price"
                      type="number"
                      name="lowballPrice"
                      required
                      onChange={this.onChange}
                  />
                </div>
                
                <br/>

                <div className="input-group">
                  <label style={{width:"110px"}} class="input-group-text">Cutoff: </label>
                  <input
                      type="number"
                      step=".01"
                      className="form-control"
                      placeholder="Offer Made"
                      name="lowballCutoff"
                      required
                      onChange={this.onChange}
                  />
                </div>
                
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