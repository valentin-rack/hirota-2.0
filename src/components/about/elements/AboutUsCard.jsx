import Card from "../../ui/Card"
import unflavoredsimp from "../../../assets/ui/hirota-logo-unflavored-simp.svg"

function AboutUsCard() {
  return(
    <Card title="空手衣のヒロタ" subtitle="about us">
      <div className="flex flex-col gap-2 mt-[15px]">
        <div className="description">
          <img src={unflavoredsimp} alt="HIROTA Logo Simplified" className="inline opacity-50 h-[16px] align-baseline mr-1.5"/>is a Japanese manufacturing house specializing in premium karate-gi and karate equipment.
        </div>
        <div>
          <p className="description">Founded in 1965, the company has established a long-standing reputation for precision craftsmanship, material excellence, and uncompromising quality.</p>
        </div>
        <div>
          <p className="description">HIROTA uniforms are trusted and worn by masters, instructors, and elite competitors at the highest levels of traditional and competitive karate worldwide.</p>
        </div>
      </div>
    </Card>
  )
}

export default AboutUsCard