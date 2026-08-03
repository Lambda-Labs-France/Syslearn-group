import Hero from "../components/home/Hero";
import Activites from "../components/home/Activites";
import Engagements from "../components/home/Engagements";
import Rejoindre from "../components/home/Rejoindre";
import Collaborateurs from "../components/home/Collaborateurs";
import Actualites from "../components/home/Actualites";
import Offres from "../components/home/Offres";
import Temoignage from "../components/home/Temoignage";
import Question from "../components/home/Question";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Activites />
      <Offres/>
      <Temoignage/>
      <Engagements />
      <Rejoindre />
      <Actualites />
      <Question/>
      <Collaborateurs />
      
      
    </>
  );
}