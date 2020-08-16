import React from "react";
import { motion } from "framer-motion";

const Modal = ({ selectedimg, setSelectedimg }) => {
  const handleclick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedimg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleclick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedimg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
