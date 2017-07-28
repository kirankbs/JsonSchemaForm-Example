import Select from 'react-select'
import '../../stylesheets/react-select.scss'


var options = [
    { value: 1, label: "Jhon" },
    { value: 2, label: "Peter" },
    { value: 3, label: "Maria" },
    { value: 4, label: "Alex" },
    { value: 5, label: "Sam" }
];

const createOptions = schema => employee => {
    return {value: employee.id, label: employee[schema.title]}
}

const createSelectedOption = val => { return {id: val.value, name: val.label }}


const ManagerWidget =  employees=> props => {
    console.log("manager widget =>>>>>", employees)
    return <Select
        name="form-field-name"
        value={props.value}
        options={employees.map(createOptions(props.schema))}
        onChange={v => props.onChange(v.value)}
    />
}

export default ManagerWidget