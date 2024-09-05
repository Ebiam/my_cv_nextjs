import RestauBlock1 from "@/../public/ResteauBlock1.jpg";
import style from './VerticalIllustratedParagraph.module.css';

export function VerticalIllustratedParagraph({
    left = true,
    imgSrc = RestauBlock1.src,
    title = "title",
    subTitle = "subtitle",
    text = "text",
  }: {
    left?: boolean;
    imgSrc?: string | undefined;
    title?: string;
    subTitle?: string;
    text?: string;
  }) {
    let textBlock = (
      <div
      className={style.TextBlockContainer}
      >
        <div style={{ display: "flex" }}>
          <div
          className={style.TitleBar}
          >
            {" "}
          </div>
          <h3 style={{ color: "rgb(245, 75, 70)", textAlign: "center"}}>{title}</h3>
        </div>
        <h1 style={{ textAlign: "center"}}>{subTitle}</h1>
        <p style={{ textAlign: "center"}}>{text}</p>
      </div>
    );
  
    let imgBlock = (
      <div
      className={style.ImgBlock}
      >
        <img
          src={imgSrc}
          className={`${style.Img} ${left ? '' :  style.ImgRight}`}
        />
      </div>
    );
  
    return (
      <div
      className={`${style.VerticalBlocksContainer} ${left ? '' :  style.VerticalRight}`}
      >
        {textBlock}
        {imgBlock}
      </div>
    );
  }