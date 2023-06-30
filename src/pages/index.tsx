import Loader from "@/components/Loader";
import Menu from "@/components/Menu";
import ColorRow from "@/components/colorRow";
import { useOpenColorsContract } from "@/hooks/useOpenColorsContract";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  const { colorList, loading } = useOpenColorsContract();

  return (
    <main className={`flex flex-col w-full min-h-screen ${inter.className}`}>
      <Menu />
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid #4b5563",
            padding: "8px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#FFFFFF",
          },
        }}
      />
      {loading == "done" ? (
        colorList.map((color, index, arr) => (
          <ColorRow key={index} color1={color} color2={arr[index + 1]} />
        ))
      ) : (
        <div className="h-screen">
          <Loader />
        </div>
      )}
    </main>
  );
}
