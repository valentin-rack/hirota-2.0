import Card from "../ui/Card";

import AboutUsCard from "./elements/AboutUsCard";
import TokyoCard from "./elements/TokyoCard";
import FukuokaCard from "./elements/FukuokaCard";
import AichiCard from "./elements/AichiCard";
import ReservationsCard from "./elements/ReservationsCard";
import FollowUsCard from "./elements/FollowUsCard";
import FooterText from "../layout/FooterText";
import FooterWithLogo from "../layout/FooterWithLogo";

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