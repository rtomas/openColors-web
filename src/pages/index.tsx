import { useEffect, useState } from "react";
import { rgbToHex } from "../utils/colors";
import ColorRow from "@/components/colorRow";
import ConnectWallet from "@/components/wallet";
import { useOpenColorsContract } from "@/hooks/useOpenColorsContract";

import metadata from "@/contract/open_colors.json";
import Menu from "@/components/Menu";

export default function Home() {
  const { colorList, loading } = useOpenColorsContract();

  /*     useEffect(() => {
        setListColors([rgbToHex(255, 255, 255), rgbToHex(0, 0, 0)]);
    }, []); */

  useEffect(() => {
    //console.log(colorList);
  }, [colorList]);

  return (
    <main className="w-full h-screen py-4 font-mono text-2xl bg-gradient-to-br from-orange-400 to-blue-500">
      <Menu />
      {colorList.map((color, index, arr) => (
        <ColorRow key={index} color1={color} color2={arr[index + 1]} />
      ))}
    </main>
  );
}
