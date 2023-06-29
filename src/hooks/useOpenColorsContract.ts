import { useState, useEffect, useContext } from "react";
import { useCall, useApi, ChainContract } from "useink";
import { useContract } from "useink";
import { pickDecoded } from "useink/utils";

import metadata from "@/contract/open_colors.json";

interface Color {
    r: number;
    g: number;
    b: number;
}

export function useOpenColorsContract() {
    const _contract = useContract("5EEcM91Js1pqA18ViSeoGfJxviS61ySXW3gobc8vNK7sN948", metadata); // TODO: .ENV
    const [colorList, setColorList] = useState<string[]>([]);
    const [loading, setLoading] = useState<"loading" | "done" | "error">("loading");

    const getColorsList = useCall<any>(_contract?.contract, "getColorsList");
    const getLastColor = useCall<any>(_contract?.contract, "getLastColor");

    useEffect(() => {
        if (_contract) {
            getColorsList.send();
            getLastColor.send();
        }
    }, [_contract]);

    useEffect(() => {
        console.log("getLastColor", getLastColor);
    }, [getLastColor]);

    useEffect(() => {
        console.log("getColorList", getColorsList);
    }, [getColorsList]);

    useEffect(() => {
        if (getLastColor.result) {
            console.log("getLastColor.ok", getLastColor.result);
        }
    }, [getLastColor.result]);

    useEffect(() => {
        if (getColorsList.result) {
            console.log("getColorsList.ok", getColorsList.result);
        }
    }, [getColorsList.result]);

    return {
        colorList,
        loading,
    };
}
