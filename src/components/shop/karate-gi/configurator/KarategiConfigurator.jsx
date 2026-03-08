import ModelSelector from "./ModelSelector";

function KarategiConfigurator({ config, setConfig }) {
  return (
    <div>
      <ModelSelector 
        value={config.model}
        onChange={(newModel) =>
          setConfig((prev) => ({
            ...prev,
            model: newModel,
          }))
        }
      />
    </div>
  );
}

export default KarategiConfigurator;
