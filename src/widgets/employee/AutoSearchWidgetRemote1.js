import {Component} from "react";
import axios from "axios";
import '../../stylesheets/AutoSuggest.css'
import Autosuggest from "react-autosuggest"

class AutoSearchWidgetRemote1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: []
        };
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.value) {
            const url = `${this.props.options.endpoint}/${nextProps.value}`
            axios.get(url)
                .then(res => {
                    this.setState({
                        suggestions: res.data
                    })
                })
        }
    }

    escapeRegexCharacters = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    getSuggestionValue = suggestion => suggestion.name;

    renderSuggestion = suggestion => <span>{suggestion.name}</span>;

    onChange = (event, {newValue}) => {
        this.setState({
            value: newValue
        });
        this.props.onChange(newValue)
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            value: this.escapeRegexCharacters(value.trim())
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    inputProps = (value) => ({
        placeholder: "Type ...",
        value,
        onChange: this.onChange
    })

    render() {
        return (
            <Autosuggest
                suggestions={this.state.suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={this.inputProps(this.state.value)}
            />
        );
    }
}

export default AutoSearchWidgetRemote1