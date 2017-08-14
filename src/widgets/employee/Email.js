const EmailWidget = props => (
      <input type="email"
        className="email-input"
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)}
        onBlur={event => props.onBlur(props.id, event.target.value)} />
)

export default EmailWidget