const ManagerSchema = (props) => {
    const returnObject = {
        type: "number",
        title: "Manager",
        enum: props.map(p => p.id),
        enumNames: props.map(p => p.name),
        default: 1
    };
    return returnObject;
}
export default ManagerSchema