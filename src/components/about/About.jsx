import AboutUsCard from "./cards/AboutUsCard";
import TokyoCard from "./cards/TokyoCard";
import FukuokaCard from "./cards/FukuokaCard";
import AichiCard from "./cards/AichiCard";
import ReservationsCard from "./cards/ReservationsCard";
import FollowUsCard from "./cards/FollowUsCard";
import FooterText from "../layout/FooterText";

function About() {
  return (
    <section className="flex flex-col gap-2 min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px] pb-6">

      <AboutUsCard /> 

      <TokyoCard /> 

      <FukuokaCard /> 

      <AichiCard />

      <ReservationsCard />

      <FollowUsCard />  

      <FooterText />  

    </section>
  );
}

export default About