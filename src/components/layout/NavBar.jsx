import { useState } from "react";
import { motion } from "framer-motion";

function NavBar() {
  const [active, setActive] = useState("karate-gi");

  const categories = ["karate-gi", "obi", "equipment", "accesories"];

  return (
    <div className="relative flex backdrop-blur-md bg-black/7 rounded-[8px] text-[13px] text-neutral-600 leading-tight tracking-wide overflow-hidden">
      
      {categories.map((category, index) => (
        <div key={category} className="relative flex-1">
          
          <button
            onClick={() => setActive(category)}
            className="relative w-full py-1 text-center cursor-pointer"
          >
            
            {active === category && (
              <motion.div
                layoutId="navbar-highlight"
                className="absolute inset-0 bg-black/50 rounded-[8px]"
                transition={{
                  type: "tween",
                  duration: 0.35,
                  ease: [0.4, 0, 0.2, 1]
                }}
              />
            )}

            <span
              className={`relative z-10 transition-colors ${
                active === category
                  ? "text-neutral-100"
                  : "text-neutral-600"
              }`}
            >
              {category}
            </span>

          </button>

          {index !== 0 && (
            <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[50%] w-px bg-black/15"></span>
          )}

        </div>
      ))}

    </div>
  );
}

export default NavBar;
