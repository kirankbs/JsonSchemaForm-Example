const Employee = props => {
    return {
        id: props.id,
        name: props.name,
        email: props.email,
        manager: props.manager
    }
}

export default Employee

const education = (props) => {
    return {
        education: props.education,
        docs: props.educationDocs,
    }
}

const technology = (props) => {
    return {
        experience: props.experience,
        skills: props.skills,
        resume: props.resume
    }
}

const address = (props) => {
    return {
        address: props.address,
        state: props.state
    }
}