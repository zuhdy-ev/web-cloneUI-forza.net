import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GetTheApp from "@/components/GetTheApp";
import Menu from "@/components/Menu";
import ForzaJourney from "@/components/ForzaJourney";
import Community from "@/components/Community";
import Faq from "@/components/Faq";
import ForumsAndSupport from "@/components/ForumsAndSupport";
import DevelopersTeam from "@/components/DevelopersTeam";

export default function beranda() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Navbar status="beranda" />
        <Hero />
        <GetTheApp />
        <Menu />
        <Menu />
        <ForzaJourney />
        <Community />
        <Faq />
        <GetTheApp />
        <ForumsAndSupport />
        <DevelopersTeam />
      </div>
    </>
  );
}
