import React from "react";

interface ChecklistItemProps {
  id: number;
  texto: string;
  completada: boolean;
  onToggle: (id: number) => void;
}

const ChecklistItem = ({ texto, completada, id, onToggle }: ChecklistItemProps) => {
  return (
    <label>
      <input
        type="checkbox" className="checkStyle"
        checked={completada}
        onChange={() => onToggle(id)} 
      />
      {texto}
    </label>
  );
};

export default ChecklistItem;