import { SegmentedControl } from '../SegmentedControl'

export const SkillProficiencyWidget = (props) => {
    
    const createSegment = defaultValue => ({label, value}) => { 
        return {label: label, value: value, default: value == defaultValue} 
    }
    
    return <SegmentedControl
                    name={props.id}
                    options={props.options.enumOptions.map( createSegment(props.value) )}
                    onChange={value => props.onChange(value)}
                    style={{ width: 300, color: '#00FA9A' }} // purple400
    >{console.log(props)}</SegmentedControl>
}