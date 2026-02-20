import { useState } from "react";
import Card from "../ui/Card";

import KarategiCard from "./elements/KarateGiCard";
import ObiCard from "./elements/ObiCard";
import EquipmentCardCont from "./elements/EquipmentCardCont";
import AccesoriesCardCont from "./elements/AccesoriesCardCont";

function Shop() {
  const [activeCategory, setActiveCategory] = useState("karate-gi");

  const renderCategory = () => {
    switch (activeCategory) {
      case "karate-gi":
        return <KarategiCard />;
      case "obi":
        return <ObiCard />;
      case "equipment":
        return <EquipmentCardCont />;
      case "accesories":
        return <AccesoriesCardCont />;
      default:
        return null;
    }
  };

  const linkBaseStyle =
    "text-sm font-mono text-blue-700 hover:underline cursor-pointer";

  return (
    <section className="flex flex-col gap-2 min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px] pb-2">

      <Card title="Shop" subtitle="select category">
        <nav>
          <div className="flex gap-2 justify-between mt-2">

            <button
              onClick={() => setActiveCategory("karate-gi")}
              className={`${linkBaseStyle} ${
                activeCategory === "karate-gi" ? "underline" : ""
              }`}
            >
              karate-gi
            </button>

            <button
              onClick={() => setActiveCategory("obi")}
              className={`${linkBaseStyle} ${
                activeCategory === "obi" ? "underline" : ""
              }`}
            >
              obi
            </button>

            <button
              onClick={() => setActiveCategory("equipment")}
              className={`${linkBaseStyle} ${
                activeCategory === "equipment" ? "underline" : ""
              }`}
            >
              equipment
            </button>

            <button
              onClick={() => setActiveCategory("accesories")}
              className={`${linkBaseStyle} ${
                activeCategory === "accesories" ? "underline" : ""
              }`}
            >
              accesories
            </button>

          </div>
        </nav>
      </Card>

      {renderCategory()}

    </section>
  );
}

export default Shop;
