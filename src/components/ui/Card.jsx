function Card({ title, subtitle, children }) {
  return (
    <div className="flex flex-col p-[15px] pt-2 backdrop-blur-md bg-black/7 rounded-[10px]">
      
      {(title || subtitle) && (
        <div className="flex justify-between items-start mb-[15px]">
          {title && <h2 className="text-[13px] text-neutral-600 leading-tight">{title}</h2>}
          {subtitle && <h2 className="text-[13px] text-neutral-400 leading-tight">{subtitle}</h2>}
        </div>
      )}

      {children}

    </div>
  );
}

export default Card;