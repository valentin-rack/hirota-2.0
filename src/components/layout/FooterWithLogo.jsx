import logo from "../../assets/ui/hirota-footer-logo.svg";

function FooterWithLogo() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-0.5 pt-2">

      <img src={logo} alt="HIROTA Logo" className="w-full object-contain opacity-50 hover:opacity-100 transition-opacity"/>

      <p className="leading-tight tracking-wider text-[10px] text-black/50 text-justify-all w-full">
        Copyright © {year} HIROTA CO., LTD. All Rights Reserved.
      </p>
    </footer>
  );
}

export default FooterWithLogo;