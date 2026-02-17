import Card from "../ui/Card";

function About() {
  return (
    <section className="flex flex-col gap-[8px] min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px]">
      <Card>
        <h2 className="text-[13px] text-neutral-600">About Us</h2>
        <p className="text-[13px] text-neutral-600 leading-tight">
          Founded in 1965, the company has established a long-standing reputation for precision craftsmanship, material excellence, and uncompromising quality. HIROTA uniforms are trusted and worn by masters, instructors, and elite competitors at the highest levels of traditional and competitive karate worldwide.
        </p>
      </Card>
    </section>
  );
}

export default About;