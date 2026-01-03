import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="loader">
      <motion.h1
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        Techmindz Digital Consulting Pvt Ltd
      </motion.h1>
    </div>
  );
}
