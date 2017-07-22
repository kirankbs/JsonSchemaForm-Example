import { Component } from 'react'
import Form from "react-jsonschema-form";
import { CustomSchemaField } from '../schema/CustomSchemaField'
import '../stylesheets/style.scss'

const fields = {
  SchemaField: CustomSchemaField
};

const schema = {
  title: "Employee Form",
  type: "object",
  required: ["id"/*, "dob", "password", "skills", "email"*/],
  properties: {
    id: { type :"string", title: "Registration ID" },    
    name: { type :"string", title: "FULL NAME" },
    gender: { type: "boolean", title: "GENDER", default: false },    
    dob: { type:"string", title: "Date Of Birth" },
    email: { type: "string", title: "EMAIL" },    
    password: { type: "string", title: "PASSWORD" , minLength: 8},
    education:{ type: "boolean", title: "Educational Qualification" },
    educationalDocs: {
      type: "array",
      title: "Educational Documents",
      items: {
        type:"string", 
        format:"data-url"
      }
    },
    experience : { type: "number", title: "Experience" },
    resume: {type: "string", title: "Resume"},    
    skills: { 
      type: "array", 
      title: "SKILLS",
      items: {
        type: "object",
        properties: {
          skill: {type: "string", title: "skill"},
          description: {type: "string"}
        }
      } 
    },
    state: { 
      type: "number", 
      title: "STATE",
      enum:[1, 2, 3],
      enumNames:["MH", "AP", "TN"] ,
      default: 1
    },    
    address: { type: "string", title: "PERMANENT ADDRESS"},
  }
};


const uiSchema = {
  id: {
    classNames: "id default"
  },  
  name: {
    classNames: "name default"
  },
  gender: {
    "ui:widget": "radio",
    classNames: "gender default"
  },  
  dob: {
    "ui:widget": "date",
    classNames: "dob default"
  },
  email: {
    "ui:widget": "email",
    classNames: "email default"
  },  
  password: {
    "ui:widget": "password",
    classNames: "password default"
  },
  education: {
    "ui:widget":"checkbox",
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
        classNames: "skill"
      },
      description: {
        "ui:widget":"textarea",
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
  const onSubmit = ({formData}) => console.log("submitted")
  const onChange = ({formData}) => console.log("changed")
  const onError = (errors) => console.log("error")
    return <Form  schema={schema}
                  uiSchema={uiSchema}
                  formData={formData}
                  onChange={onChange}
                  onSubmit={onSubmit}
                  onError={onError}
                  />
}