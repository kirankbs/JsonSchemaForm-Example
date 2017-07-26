import '../stylesheets/SegmentedControl.scss'
import { Component } from 'react'
import _ from 'lodash'

export const SegmentedControl = (props) => {

    const onChange = val => props.onChange(val)     

    const style = _.extend(defaultStyle, props.style)
    const defaultStyle = { width: '100%' }    
    const getId = option => props.name + option.value

        return(
            <div
                className="segmented-control"
                style={style}>
                {props.options.map(option => (
                <input
                    key={option.value}
                    type="radio"
                    name={props.name}
                    id={getId(option)}
                    onChange={_ => onChange(option.value)}
                    checked={option.default}
                    disabled={option.disabled}
                    />
                ))
                }
                {props.options.map(option => (
                <label
                    key={option.value}
                    htmlFor={getId(option)}
                    data-value={option.label}
                    >
                    {option.label}
                </label>
                ))}
            </div>
        )
    }