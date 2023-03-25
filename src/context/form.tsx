import React, { createContext, useState } from "react";

interface FormProviderProps {
  children: React.ReactNode;
}

interface FormContextData {
  fields: FormField[];
  addField: () => void;
  deleteField: (index: number) => void;
}

export const FormContext = createContext<FormContextData>({
  fields: [],
  addField: () => {},
  deleteField: () => {},
});

interface FormField {
  id: number;
  label: string;
  type: string;
}

const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = () => {
    const newField: FormField = { id: Date.now(), label: "", type: "text" };
    setFields([...fields, newField]);
  };

  const deleteField = (index: number) => {
    const updatedFields = [...fields];
    updatedFields.splice(index, 1);
    setFields(updatedFields);
  };

  return (
    <FormContext.Provider value={{ fields, addField, deleteField }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
