import './style.css';
import { Component } from "react";
class FormClass extends Component{
    constructor(){
        super();
        this.state = {
            data:""
        }
    }
     reset = () => {
        this.setState({ data: "" });
    }

     getData =  (e) => {
        this.setState({ data: e.target.value });
    }

    render() {
        return(
            <div>
                <div className="container">
      <div className="card">
        <input type="text" placeholder="Enter Data" value={this.state.data} 
                        onChange={this.getData}/>
        <br />
        <p>Data: { this.state.data }</p>
        <br />
                        <input type="button" value="Reset" onClick={this.reset
                        } />
      </div>
    </div>

                  </div>
        )
    }

}

export default FormClass;