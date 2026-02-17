import logo from "../assets/ui/hirota-logo-blue.svg";

function TopBar() {
  return (
    <div className="fixed top-1.5 left-1/2 -translate-x-1/2 w-[98%] h-[30px] flex items-center justify-center rounded-full backdrop-blur-md bg-black/10 z-50">
      <img src={logo} alt="HIROTA Logo" className="h-[21px] object-contain"/>
    </div>
  );
}

export default TopBar


/*
    <div className="fixed top-0 left-0 w-full h-[26px] border-y border-neutral-400 bg-white z-50 flex items-center justify-between px-2 pb-[1px] select-none">
      <img src="src\assets\ui\hirota-logo-blue.svg" alt="HIROTA Logo" class="h-[20px] object-contain object-center"/>
    </div>
*/