import { motion } from "framer-motion";

function RevealOnScroll({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export default RevealOnScroll;