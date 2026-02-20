function FooterText() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-1 md:fixed md:bottom-[0px] md:left-[0px] md:backdrop-blur-md md:px-2 md:py-1">
      <p className="leading-tight tracking-wider text-[10px] text-black/50 text-center md:align-baseline">
        Copyright © {year} HIROTA CO., LTD. All Rights Reserved.
      </p>
    </footer>
  );
}

export default FooterText;