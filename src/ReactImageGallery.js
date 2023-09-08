// @ts-nocheck

import { motion } from "framer-motion";
// @ts-ignore
import React, { useEffect, useRef, useState } from "react";
import { arr } from "image";
import "./ReactImageGallery.css";

function ReactImageGallery() {
  const [m, setm] = useState(0);
  useEffect(() => {
    setm(n.current.scrollWidth - n.current.offsetWidth);
  }, []);
  const n = useRef();

  return (
    <div className="gallery">
      <motion.div ref={n} className="container">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -m }}
          className="inner"
        >
          {arr.map((e) => (
            <motion.div className="image">
              <img src={e} />
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}

export default ReactImageGallery;
