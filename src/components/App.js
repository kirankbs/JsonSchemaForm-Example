import { Component } from 'react'
import EmployeeForm from './EmployeeForm'
import Employee from "./Employee";

export class App extends Component {
    constructor(){
        super()
        this.state = {
            employees: []
        }
    }

    componentDidMount = (np, ns) => this.setState(prevState => ({
            employees: [Employee({id: 1, name: "peter", email: "peter@gmail.com", manager: "peter" })]
        }))

    managers = _ => this.state.employees.map(e => { return {id: e.id, name: e.name}  } )

    addEmployee = ({id, name, email, manager}) => {
        console.log("Add Employee ===> ", manager)
        this.setState(prevState => ({
            employees: [...prevState.employees, Employee({id: id, name: name, email: email, manager: manager})]
        }))
    }

    newRegId = ({...untillLast, last}) => last.id + 1

    render = () => {
        return(
            <EmployeeForm   managers={this.managers()}
                            addEmployee={this.addEmployee}
                            regId={() => this.newRegId(this.state.employees)}/>
        )
    }

}