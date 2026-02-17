import logo from "../../assets/ui/hirota-logo-空手衣のヒロタ.svg"

function TopBar({ height = 22 }) {
  return (
    <div className="fixed left-0 w-full bg-black/7 z-50 flex items-center justify-between select-none backdrop-blur-sm" style={{ height: `${height}px` }}>
      <img src={logo} alt="HIROTA Logo" class="h-[18px] ml-1 object-contain object-center" style={{ height: `${height - 4}px` }}/>
    </div>
  );
}

export default TopBar


/*
    <div className="fixed top-1.5 left-1/2 -translate-x-1/2 w-[98%] h-[28px] flex items-center justify-center rounded-[10px] backdrop-blur-md bg-black/7 z-50">
      <img src={logo} alt="HIROTA Logo" className="h-[19px] object-contain"/>
    </div>

    <div className="fixed top-0 left-0 w-full h-[26px] border-y border-neutral-400 bg-white z-50 flex items-center justify-between px-2 pb-[1px] select-none">
      <img src="src\assets\ui\hirota-logo-blue.svg" alt="HIROTA Logo" class="h-[20px] object-contain object-center"/>
    </div>

*/