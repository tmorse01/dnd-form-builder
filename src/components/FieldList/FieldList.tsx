import { Droppable } from "react-beautiful-dnd";
import DraggableField from "../DragableField";

import { Field } from "../../types/FormTypes";

interface FieldListProps {
  fields: Field[];
}

// TODO implement field types
const FieldList: React.FC<FieldListProps> = ({ fields }) => {
  return (
    <div>
      <h3>Available Fields:</h3>
      <ul>
        {fields.map((field, index) => (
          <DraggableField field={field} index={index} />
        ))}
      </ul>
    </div>
  );
};

export default FieldList;
