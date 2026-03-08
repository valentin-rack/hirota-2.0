function JacketSizingForm({ config, setConfig }) {
  const handleInputChange = (field, value) => {
    setConfig((prev) => ({
      ...prev,
      jacketMeasurements: {
        ...prev.jacketMeasurements,
        [field]: value,
      },
    }));
  };

  return (
    <div>
      <p className="shop-subtitle">Jacket measurements</p>

      {["A", "B", "C", "D", "E", "F"].map((field) => (
        <input
          key={field}
          type="number"
          placeholder={field}
          value={config.jacketMeasurements[field]}
          onChange={(e) =>
            handleInputChange(field, e.target.value)
          }
        />
      ))}
    </div>
  );
}
