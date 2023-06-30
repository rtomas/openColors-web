import React, { useState } from "react";
import { hexToRgb } from "@/utils/colors";
import { useOpenColorsContract } from "@/hooks/useOpenColorsContract";

const AddColor = () => {
  const { handleAddColor } = useOpenColorsContract();

  const [color, setColor] = useState<any | undefined>(undefined);

  const handleColor = (color: string) => {
    setColor(hexToRgb(color));
  };

  return (
    <div className="min-w-[470px] bg-gray-800 border border-gray-600 rounded-lg p-2 text-base flex flex-col gap-3">
      <p>Choose a color!</p>
      <input
        type="color"
        className="w-full border border-gray-500"
        onChange={(e) => handleColor(e.target.value)}
      />
      <button
        disabled={color === undefined}
        className={
          color === undefined
            ? "bg-gray-500 p-1 w-full rounded"
            : "bg-green-500 p-1 w-full rounded hover:bg-green-700 transition duration-200"
        }
        onClick={() => handleAddColor(color)}
      >
        Add color
      </button>
    </div>
  );
};

export default AddColor;
