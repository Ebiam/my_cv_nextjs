import { useEffect } from "react";
import { useTranslation } from 'next-i18next';
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
  const { t } = useTranslation('common');
  
  return (
    <div className={styles.AnimatedTitleContainer}>
      <h1
        className={
          `${styles.AnimatedTitle} ` + (textClass ? `${textClass} ` : "")
        }
        style={textStyles ? textStyles : []}
      >
        {t(title)}
      </h1>
    </div>
  );
}
