
const InlineValidation = id => value => form => prevErrors => prevUiSchema => {
    const currentFieldValidation = form.validate(form.state.formData, form.state.schema).errors.filter(e => id.endsWith(e.argument))
    return {
        newErrors: mergePrevErrors(currentFieldValidation)(prevErrors),
        newUISchema: updateUISchema(id)(value)(prevUiSchema)(form.state.schema.required)
    }
}

const updateUISchema = id => value => prevUISchema => requiredFields => {
    const uiSchema = prevUISchema
    requiredFields.find(f => id.toLowerCase().endsWith(f.toLowerCase()) ) ?
        uiSchema[id.split("_").pop()].classNames =
            value ?
                removeErrorClass(uiSchema[id.split("_").pop()].classNames) :
                uiSchema[id.split("_").pop()].classNames + " err"
        : null

    return uiSchema

}

const removeErrorClass = classNames => classNames.split(" ").filter(c => c.toLowerCase() !== "err").join(" ")

const mergePrevErrors = currentFieldError => err2 =>
    [...currentFieldError.filter(e1 => !err2.find(e2 => e2.argument === e1.argument )), ...err2]


export default InlineValidation