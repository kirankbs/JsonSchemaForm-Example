import { Component } from 'react'
import Form from "react-jsonschema-form";
import  * as EmployeeWidgets  from '../widgets/employee/EmployeeWidgets'
import  * as EmployeeWidgetsSchema  from '../widgets/employee/EmployeeWidgetsSchema'
import  * as EmployeeJSONSchema  from '../schema/employee/EmployeeJSONSchema'
import '../stylesheets/style.scss'

const widgets = {
  emailWidget: EmployeeWidgets.EmailWidget,
  skillDescWidget: EmployeeWidgets.SkillDescriptionWidget,
  gender: EmployeeWidgets.Gender,
  skillProficiencyWidget: EmployeeWidgets.SkillProficiencyWidget,
  managerWidget: EmployeeWidgets.ManagerWidget
}

const schema = props => {
    return {
        title: "Employee Form",
        type: "object",
        required: ["id", "email"],
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
            manager: EmployeeJSONSchema.ManagerSchema(props.managers)
        }
    };
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

const formData = {
}


const EmployeeForm = (props) => {
  const onSubmit = ({formData}) => {
      console.log("submitted  ==> ", formData)
      props.addEmployee(formData)
  }
  const onChange = ({formData}) => console.log("changed ==> ", formData)
  const onError = (errors) => console.log("error ==> ", errors)

  return <Form  schema={schema(props)}
                  uiSchema={uiSchema}
                  formData={formData}
                  onSubmit={onSubmit}
                  onError={onError}
                  widgets={widgets}
                  id="employee-form">
                  <div>
                    <button className="submit" type="submit">Submit</button>
                    <button className="cancel" type="button">Cancel</button>
                  </div>
                  </Form>
}

export default EmployeeForm