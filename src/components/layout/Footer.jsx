import logo from "../../assets/ui/hirota-footer-logo.svg";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col items-center justify-center gap-0.5 pt-2 pb-4">

      <img src={logo} alt="HIROTA Logo" className="w-full object-contain opacity-50 hover:opacity-100 transition-opacity"/>

      <p className="leading-tight text-center tracking-wider text-[11px] text-black/50">
        Copyright © {year} HIROTA CO., LTD. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;