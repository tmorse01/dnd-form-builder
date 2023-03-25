import { Field } from "../../types/FormTypes";

type FormProps = {
  fields: Field[];
  onFieldRemove: (fieldId: string) => void;
};

const Form = ({ fields, onFieldRemove }: FormProps) => {
  return (
    <form>
      {fields.map((field, index) => (
        <div key={field.id}>
          <label htmlFor={field.id}>{field.label}</label>
          <input type={field.type} id={field.id} />
          <button onClick={() => onFieldRemove(field.id)}>Remove</button>
        </div>
      ))}
    </form>
  );
};

export default Form;
