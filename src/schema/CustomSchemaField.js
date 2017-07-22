import SchemaField from 'react-jsonschema-form/lib/components/fields/SchemaField'



export const CustomSchemaField = (props) => {
  return (
    <div id="custom">
      <p>Yeah, I am pretty dumb.</p>
      <SchemaField {...props} />
    </div>
  );
};