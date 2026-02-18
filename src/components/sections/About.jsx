import Card from "../ui/Card";
import FollowUsCard from "../layout/FollowUsCard";
import unflavored from "../../assets/ui/hirota-logo-unflavored-simp.svg"

function About() {
  return (
    <section className="flex flex-col gap-2 min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px] pb-2">

      <Card title="空手衣のヒロタ" subtitle="about us">
        <div className="flex flex-col gap-2">
          <div className="text-[13px] text-neutral-600 leading-tight">
            <img src={unflavored} alt="HIROTA Logo Simplified" className="inline opacity-60 h-[16px] align-baseline mr-1.5"/>is a Japanese manufacturing house specializing in premium karate-gi and karate equipment.
          </div>
          <div>
            <p className="text-[13px] text-neutral-600 leading-tight">Founded in 1965, the company has established a long-standing reputation for precision craftsmanship, material excellence, and uncompromising quality.</p>
          </div>
          <div>
            <p className="text-[13px] text-neutral-600 leading-tight">HIROTA uniforms are trusted and worn by masters, instructors, and elite competitors at the highest levels of traditional and competitive karate worldwide.</p>
          </div>
        </div>
      </Card>  

      <Card title="東京本社 tokyo head office" subtitle="contact us">
        <div className="text-[13px] text-neutral-600 leading-tight">
          <p class="font-medium">東京本社 Tokyo Head Office</p>
          <p>NS Bldg. 1F, 5-33-6 Kamata, Ohta-ku, Tokyo 144-0052, Japan.</p>
          <div class="flex justify-between">
            <span>TEL(03)3730-5366</span>
            <span>FAX(03)3730-5336</span>
          </div>
          <span class="underline cursor-pointer hover:opacity-70 transition-opacity">tokyo@karategi-hirota.co.jp</span>
          <p>Business Hours:</p>
          <ul class="list-disc list-inside">
            <li>Monday–Friday: 9:00–18:00</li>
            <li>Saturday: 9:00–17:00</li>
            <li>Sunday, National Holidays, and 2nd Saturday of each month: Closed</li>
          </ul>
        </div>
      </Card> 

      <FollowUsCard />

    </section>
  );
}

export default About