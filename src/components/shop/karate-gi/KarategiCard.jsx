import { useState } from "react";
import Card from "../../ui/Card";

import KarategiConfigurator from "./configurator/KarategiConfigurator";
import KarategiImage from "./KarategiImage";
import KarategiModelDescription from "./KarategiModelDescription";

function KarategiCard() {
  const [config, setConfig] = useState({
    model: "tsubasa-evo-1",
  });

  return (
    <Card title="Karate-gi (fully-tailored)">
      <div className="flex w-full">

        <div className="basis-[53%] flex flex-col pt-5 px-2.5 pb-5 leading-tight">
          <KarategiConfigurator config={config} setConfig={setConfig}/>
        </div>

        <div className="basis-[47%] flex flex-col mt-4 mb-5">
          <KarategiImage model={config.model} />
          <KarategiModelDescription model={config.model} />
        </div>

      </div>
    </Card>
  );
}

export default KarategiCard;
