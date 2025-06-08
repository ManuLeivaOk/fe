
import LL_home from "@/components/laguna-larga/LL-Home";
import Oliva_home from "@/components/oliva/Oliva-Home";
import Oncativo_home from "@/components/oncativo/Oncativo-Home";
import Pilar_Home from "@/components/pilar/Pilar-Home";
import RS_Home from "@/components/rio-segundo/RS-Home";
import AdSquare from "@/components/publicidades/Propuesta";

export default function Home() {
  return (
    <>
      
      <main className="min-h-screen py-8">
        <AdSquare />
        <RS_Home />

        <LL_home />

        <Pilar_Home />

        <Oncativo_home />

        <Oliva_home />
      </main>
      
    </>
  );
}
