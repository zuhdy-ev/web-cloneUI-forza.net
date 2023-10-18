import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GetTheApp from "@/components/GetTheApp";
import Menu1 from "@/components/Menu1";
import Menu2 from "@/components/Menu2";
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
        <Menu1 />
        <Menu2 />
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
