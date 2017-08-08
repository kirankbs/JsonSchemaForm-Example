import {SegmentedControl} from '../SegmentedControl'

const SkillDescriptionWidget = props => {
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

export default SkillDescriptionWidget


const SkillProficiencyWidget = props => {

    const createSegment = defaultValue => ({label, value}) => {
        return {label: label, value: value, default: value == defaultValue}
    }

    return <SegmentedControl
        name={props.id}
        options={props.options.enumOptions.map( createSegment(props.value) )}
        onChange={value => props.onChange(value)}
        style={{ width: 300, color: '#00FA9A' }} // purple400
    />
}

export { SkillProficiencyWidget}
