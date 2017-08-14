import Select from 'react-select'
import '../../stylesheets/react-select.scss'


/*const createOptions = schema => employee => {
    return {value: employee.id, label: employee[schema.title]}
}*/

const createOptions = schema => employee => <option key={ employee.id } value={ employee.id }>{employee.name}</option>

const defaultOptions = schema => schema.defaultEnums.map(e => ({value: e, label: e } ))

const createSelectedOption = val => ({id: val.value, name: val.label })

const handleChange = props => v => {
    v && props.onChange(v.target.value)
}


const ManagerWidget =  employees=> props => {
    //console.log("props ==>", props)
    return <select value={ props.value } onChange={handleChange(props)}>
        {[<option value="" key="">{props.placeholder}</option>, ...employees.map(createOptions(props.schema))]}
    </select>
}

export default ManagerWidget