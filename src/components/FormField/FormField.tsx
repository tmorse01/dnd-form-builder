import { FC } from "react";

type Field = {
  id: string;
  label: string;
  type: string;
};

type FormFieldProps = {
  field: Field;
};

const FormField: FC<FormFieldProps> = ({ field }) => {
  return (
    <div>
      <label htmlFor={field.id}>{field.label}</label>
      <input type={field.type} id={field.id} name={field.id} />
    </div>
  );
};

export default FormField;
