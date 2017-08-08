import axios from "axios"
import {Component} from "react"


class DropDownWidgetRemote extends Component{
    constructor(){
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount = () => {
        axios.get(this.props.options.endpoint).then(response => {
            this.setState({ data: response.data })
        })
    }
    createOptions = data => data.map(element => <option key={element.value} value={element.value}>{element.name}</option>)

    render() {
        return <select key={this.props.value} value={this.props.value} onChange={v => this.props.onChange(v.target.value)}>
            {this.createOptions(this.state.data)}
        </select>
    }
}

export default DropDownWidgetRemote