import Card from "../ui/Card";
import FollowUsCard from "../layout/FollowUsCard";
import unflavoredsimp from "../../assets/ui/hirota-logo-unflavored-simp.svg"

function About() {
  return (
    <section className="flex flex-col gap-2 min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px] pb-2">

      <Card title="空手衣のヒロタ" subtitle="about us">
        <div className="flex flex-col gap-2 mt-[15px]">
          <div className="text-[13px] text-neutral-500 leading-tight">
            <img src={unflavoredsimp} alt="HIROTA Logo Simplified" className="inline opacity-50 h-[16px] align-baseline mr-1.5"/>is a Japanese manufacturing house specializing in premium karate-gi and karate equipment.
          </div>
          <div>
            <p className="text-[13px] text-neutral-500 leading-tight">Founded in 1965, the company has established a long-standing reputation for precision craftsmanship, material excellence, and uncompromising quality.</p>
          </div>
          <div>
            <p className="text-[13px] text-neutral-500 leading-tight">HIROTA uniforms are trusted and worn by masters, instructors, and elite competitors at the highest levels of traditional and competitive karate worldwide.</p>
          </div>
        </div>
      </Card>

      <Card title="東京本社 Tokyo Head Office" subtitle="contact us">
        <div className="text-[13px] text-neutral-500 leading-tight mt-[15px]">
          <p>NS Bldg. 1F, 5-33-6 Kamata, Ohta-ku, Tokyo 144-0052, Japan.</p>
          <div class="flex justify-between">
            <span>TEL(03)3730-5366</span>
            <span>FAX(03)3730-5336</span>
          </div>
          <span class="hover:underline hover:underline-offset-2 hover:opacity-70 transition-opacity">tokyo@karategi-hirota.co.jp</span>
          <p>Business Hours:</p>
          <ul class="list-disc list-inside">
            <li>Monday–Friday: 9:00–18:00</li>
            <li>Saturday: 9:00–17:00</li>
            <li>Sunday, National Holidays, and 2nd Saturday of each month: Closed</li>
          </ul>
        </div>
      </Card>

      <Card title="福岡支店 Fukuoka Branch">
        <div className="text-[13px] text-neutral-500 leading-tight mt-[15px]">
          <p>4-2-15 Sumiyon Bldg., Sumiyoshi, Hakata-ku, Fukuoka City 812-0018, Japan.</p>
          <div class="flex justify-between">
            <span>TEL(092)475-1810</span>
            <span>FAX(092)475-1817</span>
          </div>
          <span class="hover:underline hover:underline-offset-2 hover:opacity-70 transition-opacity">fukuoka@karategi-hirota.co.jp</span>
          <p>Business Hours:</p>
          <ul class="list-disc list-inside">
            <li>Monday–Friday: 9:00–18:00</li>
            <li>Saturday: 9:00–17:00</li>
            <li>Sunday, National Holidays, and 2nd Saturday of each month: Closed</li>
          </ul>
        </div>
      </Card> 

      <Card title="愛知工場 Aichi Factory">
        <div className="text-[13px] text-neutral-500 leading-tight mt-[15px]">
          <p>16-3 Rendai, Yonezu-cho, Nishio City, Aichi 445-0802, Japan.</p>
          <div class="flex justify-between">
            <span>TEL(0563)54-3600</span>
            <span>FAX(0563)54-5822</span>
          </div>
        </div>
      </Card> 

      <Card title="※ Reservations" subtitle="visit us">
        <div className="flex flex-col gap-2 mt-[15px]">
          <div>
            <p className="text-[13px] text-neutral-500 leading-tight">To ensure proper attention and accurate measurement, please make a reservation before visiting any HIROTA location. Please call the branch you plan to visit and make a reservation in advance.</p>
          </div>
          <div>
            <p className="text-[13px] text-neutral-500 leading-tight">If you would like to have your karate-gi measurements taken, please inform us of your height, weight, and preferred fabric type when booking. For measurement sessions, please wear or bring a T-shirt and tight-fitting bottoms (such as spats) to ensure accurate fitting.</p>
          </div>
          <div>
            <p className="text-[13px] text-neutral-500 leading-tight">If you visit without a reservation or during busy periods with many appointments, we may not be able to assist you. Please make sure to book your visit in advance.</p>
          </div>
        </div>
      </Card> 

      <FollowUsCard />  

    </section>
  );
}

export default About