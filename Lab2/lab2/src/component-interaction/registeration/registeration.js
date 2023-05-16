import React, { Component } from 'react';
import './style.css';
export default class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            age: "",
            phone: "",
            email: "",
        };
        this.updateName = this.updateName.bind(this);
        this.updateAge = this.updateAge.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }
    setUser = (e) => {
        this.setState({ name: this.state.name });
        this.setState({ age: this.state.age });
        this.setState({ email: this.state.email });
        this.setState({ phone: this.state.phone });
    }
    updateName(e) {
        this.setState({ name: e.target.value });
    }
    updateAge(e) {
        this.setState({ age: e.target.value });
    }
    updateEmail(e) {
        this.setState({ email: e.target.value });
    }
    updatePhone(e) {
        this.setState({ phone: e.target.value });
    }
    render() {
        return (
            <div className="login-box">
              <h2>Registration Form</h2>
              <form className="form">
                <div className="form-group d-flex mt-2 text-light">
                  <label className="col-3" htmlFor="nm">
                    Name
                  </label>
                  <input
                    className="form-control"
                    id="nm"
                    type="text"
                    onChange={this.updateName}
                  />
                </div>
                <div className="form-group d-flex mt-2 text-light">
                  <label className="col-3" htmlFor="age">
                    Age
                  </label>
                  <input
                    className="form-control"
                    id="age"
                    type="number"
            
                    onChange={this.updateAge}
                  />
                </div>
                <div className="form-group d-flex mt-2 text-light">
                  <label className="col-3" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    onChange={this.updateEmail}
                  />
                </div>
                <div className="form-group d-flex mt-2 text-light">
                  <label className="col-3" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    onChange={this.updatePhone}
                  />
                </div>
                <div className="form-group text-center mt-4">
                  <input className="btn btn-outline-success" id="nm" type="submit" value="Submit" onClick={this.setUser}/>
                </div>
              </form>
            </div>
          );
}

};


