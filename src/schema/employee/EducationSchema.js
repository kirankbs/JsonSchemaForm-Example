const EducationSchema = {
      type: "array",
      minItems: 1, 
      title: "Educational Qualification",
      items:{
        type: "string",
        enum: ["BE", "ME", "Ph.D"],
        enumNames: ["Bachelor's", "Master's", "Ph.D"]
      },
      uniqueItems: true
    }
export default EducationSchema
export const EducationDocsSchema =   {
      type: "array",
      title: "Educational Documents",
      items: {
        type:"string", 
        format:"data-url"
      }
    }  