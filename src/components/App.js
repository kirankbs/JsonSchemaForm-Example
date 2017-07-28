import { Component } from 'react'
import EmployeeForm from './EmployeeForm'
import Employee from "./Employee";

export class App extends Component {
    constructor(){
        super()
        this.state = {
            employees: [Employee({id: 1, name: "peter", email: "peter@gmail.com", manager: 1 })]
        }
    }

    addEmployee = ({id, name, email, manager}) => this.setState(prevState => ({
            employees: [...prevState.employees, Employee({id: id, name: name, email: email, manager: manager})]
        }))

    render(){
        return(
            <EmployeeForm   employees={this.state.employees}
                            addEmployee={this.addEmployee}
                            regId={() => this.newRegId(this.state.employees)}/>
        )
    }

}