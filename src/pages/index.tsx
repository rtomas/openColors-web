import { useEffect, useState } from "react";
import { rgbToHex } from "../utils/colors";
import ColorRow from "@/components/colorRow";
import { useOpenColorsContract } from "@/hooks/useOpenColorsContract";

import metadata from "@/contract/open_colors.json";

export default function Home() {
    const { colorList, loading } = useOpenColorsContract();

    /*     useEffect(() => {
        setListColors([rgbToHex(255, 255, 255), rgbToHex(0, 0, 0)]);
    }, []); */

    useEffect(() => {
        console.log(colorList);
    }, [colorList]);

    return (
        <main className="w-ful font-mono text-2xl">
            {colorList.map((color, index, arr) => (
                <ColorRow key={index} color1={color} color2={arr[index + 1]} />
            ))}
        </main>
    );
}
