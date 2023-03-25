import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import FormField from "../../components/FormField";
import FieldList from "../../components/FieldList";
import Form from "../../components/Form";
import { Field } from "../../types/FormTypes";

const initialFields: Field[] = [
  { id: "1", label: "Text Field", type: "text", required: false },
  { id: "2", label: "Email Field", type: "email", required: true },
  { id: "3", label: "Number Field", type: "number", required: false },
];

const FormBuilder: React.FC = () => {
  const [fields, setFields] = useState<Field[]>(initialFields);

  const handleFieldAdd = (field: Field) => {
    setFields((prevFields) => [...prevFields, field]);
  };

  const handleFieldRemove = (fieldId: string) => {
    setFields((prevFields) =>
      prevFields.filter((field) => field.id !== fieldId)
    );
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }

    if (
      result.source.droppableId === "fieldList" &&
      result.destination.droppableId === "formFields"
    ) {
      const fieldToAdd = fields[result.source.index];
      handleFieldAdd(fieldToAdd);
    }
  };

  return (
    <div className="form-builder">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="field-list">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              <FieldList fields={fields} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
        <Droppable droppableId="formFields">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Form fields={fields} onFieldRemove={handleFieldRemove} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
export default FormBuilder;
