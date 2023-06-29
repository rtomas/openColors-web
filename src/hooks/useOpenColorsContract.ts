import { useState, useEffect } from "react";
import { useCall, useDryRun, useContract } from "useink";
import { pickDecoded } from "useink/utils";

import metadata from "@/contract/open_colors.json";

interface Color {
    r: number;
    g: number;
    b: number;
}

export function useOpenColorsContract() {
    const _contract = useContract("5EiMDgeApcbGXMEDof4nmAj9VSnbomy67pBZKfWVbsoguMuk", metadata); // TODO: .ENV

    const [colorList, setColorList] = useState<string[]>([]);
    const [loading, setLoading] = useState<"loading" | "done" | "error">("loading");

    const getColorsList = useDryRun<any>(_contract, "getColorsList");
    const getLastColor = useDryRun<Color>(_contract, "getLastColor");

    useEffect(() => {
        if (_contract) {
            getColorsList.send([], { defaultCaller: true });
            getLastColor.send([], { defaultCaller: true });
        }
    }, [_contract?.contract]);

    useEffect(() => {
        if (getLastColor.result) {
            console.log("getLastColor.ok", pickDecoded(getLastColor.result));
        }
    }, [getLastColor.result]);

    useEffect(() => {
        if (getColorsList.result) {
            console.log("getColorsList.ok", pickDecoded(getColorsList.result));
        }
    }, [getColorsList.result]);

    return {
        colorList,
        loading,
    };
}
