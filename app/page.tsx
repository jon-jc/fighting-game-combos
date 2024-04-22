import Image from "next/image";
import Combos from "@/components/Combos";
import HeaderPage from "@/components/header";
import HeroSection from "@/components/HeroSection";
import ComboPage from "@/components/combo";

export default function Home() {
  return (
    <div>
      <HeaderPage />
      <HeroSection />
    </div>
  );
}
