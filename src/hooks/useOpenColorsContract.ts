import { useState, useEffect } from "react";
import { useCall, useDryRun, useContract } from "useink";
import { pickDecoded } from "useink/utils";
import { rgbToHex } from "@/utils/colors";

import metadata from "@/contract/open_colors.json";

interface Color {
    r: number;
    g: number;
    b: number;
}

export function useOpenColorsContract() {
    const _contract = useContract("5EiMDgeApcbGXMEDof4nmAj9VSnbomy67pBZKfWVbsoguMuk", metadata); // TODO: .ENV

    const [colorList, setColorList] = useState<string[]>([]);
    const [lastColor, setLastColor] = useState<string>("");
    const [loading, setLoading] = useState<"loading" | "done" | "error">("loading");

    const getColorsList = useDryRun<Color[]>(_contract, "getColorsList");
    const getLastColor = useDryRun<Color>(_contract, "getLastColor");

    useEffect(() => {
        if (_contract) {
            getColorsList.send([], { defaultCaller: true });
            getLastColor.send([], { defaultCaller: true });
        }
    }, [_contract?.contract]);

    useEffect(() => {
        if (getLastColor.result) {
            let lastColorObj = pickDecoded(getLastColor.result);
            if (lastColorObj) {
                setLastColor(rgbToHex(lastColorObj.r, lastColorObj.g, lastColorObj.b));
            }
        }
    }, [getLastColor.result]);

    useEffect(() => {
        if (getColorsList.result) {
            setLoading("done");
            let colorsList = pickDecoded(getColorsList.result);
            // transform all colors to hex strign with rgbToHex
            if (colorsList) {
                let data = colorsList.map((color: Color) => rgbToHex(Math.floor(color.r), Math.floor(color.g), Math.floor(color.b)));
                setColorList(data);
            }
        }
    }, [getColorsList.result]);

    return {
        lastColor,
        colorList,
        loading,
    };
}
