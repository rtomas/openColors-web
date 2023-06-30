import { useOpenColorsContract } from "@/hooks/useOpenColorsContract";
import React from "react";
import { rgbToHex, hexToRgb } from "@/utils/colors";

const LastestColors = () => {
  const { colorList } = useOpenColorsContract();

  return (
    <div className="min-w-[470px] max-h-full overflow-y-auto bg-gray-800 border border-gray-600 rounded-lg p-2 text-base flex flex-col gap-3">
      <p>Lastest colors</p>
      {colorList?.map((c, i) => (
        <div
          key={i}
          style={{
            background: `${c}`,
          }}
          className={`border border-gray-600 rounded-lg p-4 text-base text-center`}
        ></div>
      ))}
    </div>
  );
};

export default LastestColors;
