import { motion } from "framer-motion";
import { paths } from "../../utils/effects/paths.js"
import { colors } from "../../utils/colors/colors.js"
import styles from "./BackgroundLineWrapperStyles.module.css"


const pathVariants = {
  initial: {
    strokeDashoffset: 9999,
    strokeDasharray: "1600 9999"
  },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "400 9999",
    opacity: [0, 1, 1, 0]
  }
}

// eslint-disable-next-line react/prop-types
const SVG = ({ svgOptions }) => {
  return (
    <motion.svg
      viewBox="0 0 35000 36800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={styles.svgMotion}
    >
      {/* Path source 1 */}
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx]}
          strokeWidth="120"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            // eslint-disable-next-line react/prop-types
            duration: svgOptions?.duration || 10,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.floor(Math.random() * 10),
            repeatDelay: Math.floor(Math.random() * 10 + 2),
          }}
          key={`path-first-${idx}`}
        />
      ))}
    </motion.svg>
  )
}

// eslint-disable-next-line react/prop-types
const BackgroundLineWrapper = ({ children }) => {
  return (
    <div>
      <SVG svgOptions={{ duration: 3 }} />
      {children}
    </div>
  )
}

export default BackgroundLineWrapper