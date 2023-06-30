import ColorRow from "@/components/colorRow";
import { useOpenColorsContract } from "@/hooks/useOpenColorsContract";
import { AiOutlineLoading } from "react-icons/ai";

export default function Home() {
    const { colorList, loading } = useOpenColorsContract();

    return (
        <main className="w-ful font-mono text-2xl">
            {loading == "done" ? (
                colorList.map((color, index, arr) => <ColorRow key={index} color1={color} color2={arr[index + 1]} />)
            ) : (
                <AiOutlineLoading className="w-5 h-5 animate-spin mx-auto" />
            )}
        </main>
    );
}
