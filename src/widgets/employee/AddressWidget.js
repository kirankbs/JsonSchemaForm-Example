import Textarea from 'react-textarea-autosize';

const AddressWidget = props => {

    const textareaStyle = {
        width: 300,
        padding: '10px 8px',
        border: '1px solid rgba(39, 41, 43, .15)',
        borderRadius: 4,
        fontSize: 15
    }

    return <Textarea
        style={textareaStyle}
        defaultValue={'Add Address'}
    />

}

export default AddressWidget