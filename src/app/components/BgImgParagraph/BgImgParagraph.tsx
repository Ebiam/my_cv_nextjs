import styles from "./BgImgParagraph.module.css";
import BgImg from '../../../../public/code.jpg';
import { CSSProperties } from "react";

interface ParagraphWithBgImageProps {
    title: string;
    text: string;
    image?: string;
    altMovment?: boolean;
    className?: string;
}  

export default function ParagraphWithBgImage({
    title,
    text,
    image = "",
    altMovment = false,
    className,
  }: ParagraphWithBgImageProps) {
    //let panImage = altMovment ? "pan-image" : "pan-image";
    return (
      <div className={`${styles.Screen + ' ' + className}`}>
        <div
          className={`${styles.ScreenBg} ` + (altMovment ? styles.ScreenBgAlt : ``)}
          style={{
            backgroundImage: `url(${image !== "" ? image : BgImg.src})`,
         }}
        />
        <div className={styles.ScreenOverlay} />
        <div className={styles.ScreenContent}>
          <h1 className={styles.ScreenTitle}>{title}</h1>
          <p className={styles.ScreenText}>{text}</p>
        </div>
      </div>
    );
  }