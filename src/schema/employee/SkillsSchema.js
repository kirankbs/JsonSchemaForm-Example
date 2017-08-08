const SkillsSchema = {
      type: "array", 
      title: "SKILLS",
      items: {
        type: "object",
        properties: {
          skill: {type: "string", title: "skill", default:""},
          description: {type: "string"},
          proficiency: {
            type: "number", 
            title: "Proficiency",
            enum:[0, 1, 2],
            enumNames:["Beginner", "Intermediate", "Expert"] ,
            default: 0}
        }
      }
    }
export default SkillsSchema