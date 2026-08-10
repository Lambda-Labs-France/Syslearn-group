import Hero from "../components/home/Hero";
import Activites from "../components/home/Activites";
import Secteurs from "../components/home/Secteurs";
import Carrer from "../components/home/Carrer";
import Actualites from "../components/home/Actualites";
import Question from "../components/home/Question";
import ChiffresCles from "../components/home/ChiffresCles";
import FAQ from "../components/home/FAQ";





export const metadata = {
  title: "Syslearn Group | Ingénierie tech, Conseil informatique et Recrutement tech",
  description: "Syslearn Group réunit Syslearn (conseil IT), PointerLab (ESN C++/Qt) et StackJobs (recrutement tech). Missions, secteurs, offres : découvrez notre écosystème.",
  keywords: "groupe ESN France, conseil informatique, ingénierie logicielle C++ Qt, recrutement tech, néo-ESN, groupe informatique",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ChiffresCles/>
      <Activites />
      <Secteurs/>
      <FAQ />
      <Carrer />
      <Actualites />
      <Question />
    </>
  );
}