
const InlineValidation = id => value => form => prevErrors => prevUiSchema => {
    //Use exists later
    const addRequiredFieldError = (id, value, form, prevErrors) => {
        console.log("form == validation >", form.validate(form.state.formData, form.state.schema).errors.filter(e => id.endsWith(e.argument) ))
        const currentFieldValidation = form.validate(form.state.formData, form.state.schema).errors.filter(e => id.endsWith(e.argument) )
        const isExists = () => currentFieldValidation.length > 0
        return {
            newErrors: unionErrors(currentFieldValidation)(prevErrors),
            newUISchema: updateUISchema(id, value, prevUiSchema, currentFieldValidation)
        }
    }
    const updateUISchema = (id, value, prevUISchema, currentFieldValidation) => {
        const uiSchema = prevUISchema
        currentFieldValidation ?
            uiSchema[id.split("_").pop()].classNames =
                value ?
                    removeErrorClass(uiSchema[id.split("_").pop()].classNames) :
                    uiSchema[id.split("_").pop()].classNames + " err"
            : null


        return uiSchema

    }

    const removeErrorClass = classNames => classNames.split(" ").filter(c => c.toLowerCase() !== "err").join(" ")

    const unionErrors = currentFieldError => err2 => {
        const uniqueErrors = currentFieldError.filter(e1 => !err2.find(e2 => e2.argument === e1.argument ))
        return [...uniqueErrors, ...err2]
    }

    return addRequiredFieldError(id,value,form, prevErrors, prevUiSchema)
}

export default InlineValidation