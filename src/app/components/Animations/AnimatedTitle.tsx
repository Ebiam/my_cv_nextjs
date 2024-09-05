import { useEffect } from "react";
import styles from "./AnimatedTitle.module.css";

interface AnimatedTitleProps {
  title: string;
  textClass?: string;
  textStyles?: any;
}

export default function AnimatedTitle({
  title,
  textClass,
  textStyles,
}: AnimatedTitleProps) {
  
  return (
    <div className={styles.AnimatedTitleContainer}>
      <h1
        className={
          `${styles.AnimatedTitle} ` + (textClass ? `${textClass} ` : "")
        }
        style={textStyles ? textStyles : []}
      >
        {title}
      </h1>
    </div>
  );
}
