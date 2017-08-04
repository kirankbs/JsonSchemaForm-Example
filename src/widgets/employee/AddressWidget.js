import TextareaAutosize from 'react-autosize-textarea';

const AddressWidget = props => {

    const textareaStyle = {
        width: 300,
        padding: '10px 8px',
        border: '1px solid rgba(39, 41, 43, .15)',
        borderRadius: 4,
        fontSize: 15
    }

    return <TextareaAutosize
        style={textareaStyle}
        onResize={(e) => {}}
        defaultValue={'Add Address'}
    />

}

export default AddressWidget