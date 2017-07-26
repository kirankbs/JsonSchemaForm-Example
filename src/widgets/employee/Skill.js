
export const SkillDescriptionWidget = props => {
    const {options} = props;
    return (<div><textarea   value={props.value}
                onChange={(event) => props.onChange(event.target.value)}
                className="skill-desc-widget"
                rows={options.rows}>

    </textarea>
    </div>)
}

SkillDescriptionWidget.defaultProps = {
options: {
    rows: 5
  }
}