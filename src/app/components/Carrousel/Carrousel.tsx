import style from "./Carrousel.module.css";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { LiaDocker } from "react-icons/lia";
import { FaGit } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useContext } from "react";
import { ThemingContext } from "@/app/contexts/theme_styles/ThemeAndStyleProvider";
import { THEMES } from "@/app/contexts/theme_styles/dto/theme.dto";


export default function Carrousel() {

    const { theme } = useContext(ThemingContext);

  return (
    <div className={style.carousel}>
      <div className={style.carouselInner}>
      <IconContext.Provider
        value={{
          color: THEMES[theme].primaryColor,
          className: "global-class-name",
          style: { height: "100px", width: "100px" },
        }}
      >
        <div className={style.carouselItem}><FaCss3Alt/></div>
        <div className={style.carouselItem}><BiLogoJavascript/></div>
        <div className={style.carouselItem}><FaReact/></div>
        <div className={style.carouselItem}><FaNode/></div>
        <div className={style.carouselItem}><SiCplusplus/></div>
        <div className={style.carouselItem}><FcLinux/></div>
        <div className={style.carouselItem}><LiaDocker/></div>
        <div className={style.carouselItem}><FaGit/></div>
        </IconContext.Provider>
      </div>
    </div>
  );
}
