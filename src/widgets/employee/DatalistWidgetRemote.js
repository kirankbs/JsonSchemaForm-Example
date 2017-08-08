import Input from "react-input-datalist"

const DatalistWidgetRemote = props => {

    return <Input
        datalist={ datalist }
        onChange={ function(value) { this.setState({ value: value }); } }
        value={ this.state.value } />
}