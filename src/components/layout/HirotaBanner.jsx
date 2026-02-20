import logo from "../../assets/ui/hirota-logo-unflavored-vertical.svg"

function HirotaBanner() {
  return (
    <div className="hidden 2xl:flex items-center justify-center min-h-0 h-full">
      <img src={logo} alt="HIROTA Vertical Logo" className="max-h-full object-contain opacity-50 px-1.5"/>
    </div>
  );
}

export default HirotaBanner;