import { useEffect, useState } from "react";
import SelectRow from "../../../ui/SelectRow";

function ModelSelector({ value, onChange }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}api/karategiModels.json`)
      .then((res) => res.json())
      .then((data) => setModels(data));
  }, []);

  return (
    <div>
      <p className="shop-subtitle pb-2">Karate-gi material</p>

      <div className="border border-neutral-400">
        {models.map((model) => (
          <SelectRow
            key={model.id}
            active={value === model.id}
            onClick={() => onChange(model.id)}
          >
            <span>{model.name}</span>
            <span>${model.basePrice}</span>
          </SelectRow>
        ))}
      </div>
    </div>
  );
}

export default ModelSelector;