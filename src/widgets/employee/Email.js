

export const EmailWidget = props => (
      <input type="email"
        className="email-input"
        value={props.value}
        required={props.required}
        onChange={(event) => props.onChange(event.target.value)} />
)