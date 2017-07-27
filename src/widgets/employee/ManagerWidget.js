import Select from 'react-select'
import '../../stylesheets/react-select.scss'


var options = [
    { value: 1, label: "Jhon" },
    { value: 2, label: "Peter" },
    { value: 3, label: "Maria" },
    { value: 4, label: "Alex" },
    { value: 5, label: "Sam" }
];

const createOptions = option => { return {value: option.value, label: option.label} }
const createSelectedOption = val => { return {id: val.value, name: val.label }}

const ManagerWidget = (props) => (
    (console.log("manager widger ==> ", props)),
    <Select
        name="form-field-name"
        value={props.value}
        options={props.options.enumOptions.map(createOptions)}
        onChange={createSelectedOption}
    />

)

export default ManagerWidget