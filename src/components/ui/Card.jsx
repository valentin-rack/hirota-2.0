function Card({ title, subtitle, children }) {
  return (
    <div className="flex flex-col p-[15px] backdrop-blur-md bg-black/7 rounded-[8px]">
      
      {(title || subtitle) && (
        <div className="flex items-start">
          {title && (
            <h2 className="text-[13px] text-neutral-600 leading-tight">
              {title}
            </h2>
          )}

          {subtitle && (
            <h2 className="text-[13px] text-neutral-400 leading-tight ml-auto mr-1">
              {subtitle}
            </h2>
          )}
        </div>
      )}

      {children}

    </div>
  );
}

export default Card;