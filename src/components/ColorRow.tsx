import React from 'react';

interface RowProps {
  color1: string;
  color2: string;
}

const ColorRow = ({ color1, color2 }: RowProps) => {
  // make a gradient with the two colors
  const gradientStyle = {
    background: `linear-gradient(${color1}, ${color2 || color1})`,
  };
  return (
    <div style={gradientStyle} className="w-full flex items-center justify-center h-24 text-white">
      {color1}
    </div>
  );
};

export default ColorRow;
