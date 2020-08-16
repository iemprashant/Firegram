import React from "react";
import useFirestore from "../Hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setSelectedimg }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            whileHover={{ opacity: 1 }}
            layout
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedimg(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="uploaded-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
