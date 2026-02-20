function Card({ title, subtitle, children }) {
  return (
    <div className="flex flex-col p-[15px] backdrop-blur-md bg-gray-500/10 rounded-[8px] hover:bg-gray-500/8 transition-colors">
      
      {(title || subtitle) && (
        <div className="flex items-start">
          {title && (
            <h2 className="title">
              {title}
            </h2>
          )}

          {subtitle && (
            <h2 className="subtitle">
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