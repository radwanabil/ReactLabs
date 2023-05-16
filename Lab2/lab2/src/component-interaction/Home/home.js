import React , { Component, UseState } from 'react'
import Registeration from '../registeration/registeration'
import Students from '../students/students';
export default class Home extends Component {

    students = [
        { name: "radwa", age: 20, phone: 1234, email: "radwa@gmail.com" },
        { name: "rima", age: 20, phone: 1224, email: "rima@gmail.com" },

    ];
    constructor(props) {
        super(props);
        this.state = {
            students: this.students,
        };
    }
    handleData = (data) => {
        this.students.push(data);
        console.log(this.students);
        this.setState({ students: this.students });
    };
    render() {
        return (
            <div><Registeration onSubmit={this.handleData}></Registeration>
            <Students allStudents={this.state.students}></Students>
            </div>
        )
    }

}
