import React, { useEffect, useState } from "react";

interface RowProps {
    color1: string;
    color2: string;
}

const ColorRow = ({ color1, color2 }: RowProps) => {
    return (
        <div className={`w-full flex items-center justify-center h-24 bg-gradient-to-b from-[${color1}] to-[${color2 === undefined ? color1 : color2}]`}>
            {color1}
        </div>
    );
};

export default ColorRow;
