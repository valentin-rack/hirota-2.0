function SelectRow({ active, onClick, children }) {
  return (
    <div onClick={onClick} className="flex justify-between px-2 py-1 cursor-pointer border-b border-neutral-400 text-neutral-500 last:border-none font-semibold hover:bg-black/10 active:bg-neutral-600 active:text-neutral-200">{children}</div>
  );
}

export default SelectRow