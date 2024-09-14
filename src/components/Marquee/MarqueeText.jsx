import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./MarqueeTextStyles.module.css";

const MarqueeText = ({title}) => {
     const AnimatedLetters = ({ title, disabled }) => (
          <span className={styles.rowTitle}>
               {[...Array(4)].map((_, idx) => (
                    <motion.span
                         initial={{ x: "100%" }}
                         animate={{ x: "-100%" }}
                         transition={{duration:10, repeat:Infinity, ease:"linear"}}
                         className={styles.rowLetter} key={idx}>
                         {title}&nbsp;
                    </motion.span>
               ))}
          </span>
     );

     return (
          <div className={styles.marqueeContainer}>
               < AnimatedLetters title={title} />
          </div>
     )
}

export default MarqueeText;