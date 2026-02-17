function Card({ children }) {
  return (
    <div className="flex flex-col p-[15px] pt-2 gap-[15px] backdrop-blur-md bg-black/7 rounded-[10px]">
      {children}
    </div>
  );
}

export default Card;