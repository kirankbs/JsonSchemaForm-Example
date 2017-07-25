import { Component } from 'react'
import Form from "react-jsonschema-form";
import  * as EmployeeWidgets  from '../widgets/employee/EmployeeWidgets'
import  * as EmployeeSchema  from '../schema/employee/EmployeeSchema'
import '../stylesheets/style.scss'


const widgets = {
  emailWidget: EmployeeWidgets.EmailWidget,
  skillDescWidget: EmployeeWidgets.SkillDescriptionWidget,
  gender: EmployeeWidgets.Gender
}

const schema = {
  title: "Employee Form",
  type: "object",
  required: ["id","password", "dob",  "skills", "email"],
  properties: {
    id: EmployeeSchema.IdSchema,    
    name: EmployeeSchema.NameSchema,
    gender: EmployeeSchema.GenderSchema,    
    dob: EmployeeSchema.DobSchema,
    email: EmployeeSchema.EmailSchema,    
    password: EmployeeSchema.PasswordSchema,
    education: EmployeeSchema.EducationSchema,
    educationalDocs: EmployeeSchema.EducationDocsSchema,
    experience : EmployeeSchema.ExperienceSchema,
    resume: EmployeeSchema.ResumeSchema,    
    skills: EmployeeSchema.SkillsSchema,
    state: EmployeeSchema.StateSchema,    
    address: EmployeeSchema.AddressSchema
  }
};




const uiSchema = {
  "ui:rootFieldId": "empform",
  id: {
    classNames: "id default"
  },  
  name: {
    "ui:title": "Full Name",
    "ui:placeholder":"enter full name", 
    classNames: "name default"
  },
  gender: {
    "ui:widget":"gender",
    classNames: "gender default"
  },  
  dob: {
    "ui:widget": "date",
    classNames: "dob default"
  },
  email: {
    "ui:widget": "emailWidget",
    classNames: "email default"
  },  
  password: {
    "ui:widget": "password",
    "ui:help": "Hint: Make it strong!",
    classNames: "password default"
  },
  education: {
    "ui:widget": "checkboxes",
    classNames: "edu-qualification default"
  },
  educationalDocs:{
    classNames: "edu-docs default"
  },
  experience: {
    "ui:widget": "range",
    classNames: "experience default"    
  },
  resume: {
    "ui:widget": "data-url",
    classNames: "resume default"
  },  
  skills: {
    classNames: "skills",
    items: {
      skill:{
        "ui:autofocus": true,
        classNames: "skill"
      },
      description: {
        "ui:widget":"skillDescWidget",
        classNames: "skill-description"
      }
    }
  },
  state: {
    classNames: "state default"
  },  
  address: {
    "ui:widget": "textarea",
    classNames: "address default"
  }
};

const formData = {
  id: "11829"
}


export const EmployeeForm = () => {
  const log = (type) => console.log.bind(console, type);
  const onSubmit = ({formData}) => log("email is: ")
  const onChange = ({formData}) => console.log("changed")
  const onError = (errors) => console.log("error")
    return <Form  schema={schema}
                  uiSchema={uiSchema}
                  formData={formData}
                  onChange={log("changed")}
                  onSubmit={log("submit")}
                  onError={onError}
                  widgets={widgets}
                  id="employee-form">
                  <div>
                    <button className="submit" type="submit">Submit</button>
                    <button className="cancel" type="button">Cancel</button>
                  </div>
                  </Form>
}