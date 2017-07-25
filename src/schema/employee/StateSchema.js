export const StateSchema = { 
      type: "number", 
      title: "STATE",
      enum:[1, 2, 3],
      enumNames:["MH", "AP", "TN"] ,
      default: 1
    }