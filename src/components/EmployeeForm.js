import Form from "react-jsonschema-form";
import * as EmployeeWidgets from '../widgets/employee/EmployeeWidgets'
import * as EmployeeWidgetsSchema from '../widgets/employee/EmployeeWidgetsSchema'
import * as EmployeeJSONSchema from '../schema/employee/EmployeeJSONSchema'
import '../stylesheets/style.scss'
import {Component } from 'react'


const widgets = props => {
    return {
        emailWidget: EmployeeWidgets.EmailWidget,
        skillDescWidget: EmployeeWidgets.SkillDescriptionWidget,
        gender: EmployeeWidgets.Gender,
        skillProficiencyWidget: EmployeeWidgets.SkillProficiencyWidget,
        managerWidget: EmployeeWidgets.ManagerWidget(props.employees),
        addressWidget: EmployeeWidgets.AddressWidget,
        skillWidget: EmployeeWidgets.AutoSearchWidgetRemote,
        stateWidget: EmployeeWidgets.DropDownWidgetRemote
    }
}

const schema = {
        title: "Employee Form",
        type: "object",
        required: ["id", "email","name"],
        properties: {
            id: EmployeeJSONSchema.IdSchema,
            name: EmployeeJSONSchema.NameSchema,
            gender: EmployeeJSONSchema.GenderSchema,
            dob: EmployeeJSONSchema.DobSchema,
            email: EmployeeJSONSchema.EmailSchema,
            password: EmployeeJSONSchema.PasswordSchema,
            education: EmployeeJSONSchema.EducationSchema,
            educationalDocs: EmployeeJSONSchema.EducationDocsSchema,
            experience : EmployeeJSONSchema.ExperienceSchema,
            resume: EmployeeJSONSchema.ResumeSchema,
            skills: EmployeeJSONSchema.SkillsSchema,
            state: EmployeeJSONSchema.StateSchema,
            address: EmployeeJSONSchema.AddressSchema,
            manager: EmployeeJSONSchema.ManagerSchema
        }
}

const uiSchema = {
  "ui:rootFieldId": "empform",
  id: EmployeeWidgetsSchema.id,
  name: EmployeeWidgetsSchema.name,
  gender: EmployeeWidgetsSchema.gender,
  dob: EmployeeWidgetsSchema.dob,
  email: EmployeeWidgetsSchema.email,
  password: EmployeeWidgetsSchema.password,
  education: EmployeeWidgetsSchema.education,
  educationalDocs: EmployeeWidgetsSchema.educationDocs,
  experience: EmployeeWidgetsSchema.experience,
  resume: EmployeeWidgetsSchema.resume,
  skills: EmployeeWidgetsSchema.skill,
  state: EmployeeWidgetsSchema.state,
  address: EmployeeWidgetsSchema.address,
  manager: EmployeeWidgetsSchema.manager
};

const formData = props => {
    return {
        manager: 0
    }
}


class EmployeeForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: null,
            validationError: [],
            formData:{},
            uiSchema: uiSchema
        }
    }


    onSubmit = ({formData}) => {
        console.log("Submitted ==> ", formData)
        props.addEmployee(formData)
    }

    onBlur = (id, value) => {
        const {newErrors, newUISchema } =
            EmployeeWidgets.InlineValidation(id)(value)(this.state.form)(this.state.validationError)(this.state.uiSchema)

        this.setState(prevState => ({
            validationError: newErrors,
            formData: prevState.form.state.formData,
            uiSchema: newUISchema
        }))
    }

    render() {
        return (
            <Form schema={schema}
                  uiSchema={this.state.uiSchema}
                  onSubmit={this.onSubmit}
                  formData={this.state.formData}
                  onChange={this.onChange}
                  widgets={widgets(this.props)}
                  onBlur={this.onBlur}
                  id="employee-form"
                  key={Math.random()}
                  ref={form => this.state.form = form }>
                <div>
                    <button className="submit" type="submit">Submit</button>
                    <button className="cancel" type="button">Cancel</button>
                </div>
            </Form>
        )
    }
}

export default EmployeeForm