import { Draggable } from "react-beautiful-dnd";
import { Input, Button } from "antd";
import { Field } from "../../types/FormTypes";

interface DraggableFieldProps {
  field: Field;
  index: number;
}

const DraggableField: React.FC<DraggableFieldProps> = ({ field, index }) => {
  return (
    <Draggable draggableId={field.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Input id={field.id} />
        </div>
      )}
    </Draggable>
  );
};

export default DraggableField;
