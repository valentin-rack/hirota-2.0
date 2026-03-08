import { useState } from "react";
import Card from "../ui/Card";

import KarategiCard from "./karate-gi/KarategiCard";
import ObiCard from "./obi/ObiCard";
import EquipmentCardCont from "./equipment/EquipmentCardCont";
import AccesoriesCardCont from "./accesories/AccesoriesCardCont";

function Shop() {
  // Estado = categoría seleccionada; "karate-gi" categoría por defecto
  const [activeCategory, setActiveCategory] = useState("karate-gi");

  // Objeto de categorías
  const categories = {
    "karate-gi": <KarategiCard />,
    "obi": <ObiCard />,
    "equipment": <EquipmentCardCont />,
    "accesories": <AccesoriesCardCont />,
  };

  const linkBaseStyle = "text-sm font-mono text-blue-700 hover:underline cursor-pointer";

  return (
    <section className="flex flex-col gap-2 min-h-screen md:min-h-0 md:h-full md:overflow-y-auto pt-[30px] pb-6">

      <Card title="Shop" subtitle="select category">
        <nav>
          <div className="flex gap-10 justify-evenly mt-4">

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

      {/* 🔹 Render dinámico */}
      {categories[activeCategory] || null}

    </section>
  );
}

export default Shop;