export const SkillsSchema = { 
      type: "array", 
      title: "SKILLS",
      items: {
        type: "object",
        properties: {
          skill: {type: "string", title: "skill"},
          description: {type: "string"}
        }
      }
    }