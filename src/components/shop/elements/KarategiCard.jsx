import Card from "../../ui/Card"
import karategi from "../../../assets/ui/karate-gi-vector.svg"

function KarategiCard() {
  return(
    <Card title="Karate-gi">
      <img src={karategi} alt="HIROTA karate-gi" className="opacity-85 h-[600px]"/>
    </Card>
  )
}

export default KarategiCard
