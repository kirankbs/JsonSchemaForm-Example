export const SkillDescriptionWidget = props => {
    const {options} = props;
    return ((console.log(props)), <textarea   value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
                className="skill-desc-widget"
                rows={options.rows}>

    </textarea>)
}

SkillDescriptionWidget.defaultProps = {
options: {
    rows: 5
  }
}