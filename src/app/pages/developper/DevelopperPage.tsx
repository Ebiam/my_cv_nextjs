import React from "react";
import BgImgParagraph from "@/app/components/BgImgParagraph/BgImgParagraph";
import Carrousel from "@/app/components/Carrousel/Carrousel";
import devImg from "@/../public/dev.png";
import MovingParagraph from "@/app/components/MovingParagraph/MovingParagraph";
import { ContentContext } from "@/app/contexts/content/ContentProvider";
import { useTranslation } from 'next-i18next';

import style from "./DevelopperPage.module.css";

function PresentationBlocks() {
  const { t } = useTranslation('common');
  return (
    <div className={style.PresentationBlocksContainer}>
      <BgImgParagraph
        altMovment={true}
        className={`${style.PresentationBlock + " " /*+ style.tv*/}`}
        title={t("presentations")}
        text={t("presentations_text")}
      />

      <BgImgParagraph
        className={`${style.PresentationBlock}`}
        image={devImg.src}
        title={t("experiences")}
        text={t("experiences_text")}
      />
    </div>
  );
}

export function Experiences() {
  const { content } = React.useContext(ContentContext);
  return (
    <div
      className={style.MovingParagraphsContainer}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {content && content.length > 0
        ? content.map((item, index) => (
            <MovingParagraph
              key={index}
              title={item.title}
              text={item.description}
              inverted
            />
          ))
        : null}
    </div>
  );
}

export function DevelopperContent() {
  return (
    <div
      style={{
        //backgroundColor: "black",
        /*background:
                "linear-gradient(rgba(20,53,163,1) 0%, rgba(2,0,36,1) 80%, rgba(2,0,36,1) 100%)",*/
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/*<Image src={profilePic} alt="Logo" width={500} height={500} />*/}
      <PresentationBlocks />
      <Carrousel />
      <Experiences />
    </div>
  );
}
