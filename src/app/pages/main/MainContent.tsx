"use client";
import React, { useEffect } from "react";

import { IconContext } from "react-icons";
import { AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import styles from "@/app/page.module.css";

import devImg from "@/../public/dev.png";

import localFont from "next/font/local";
import BgImgParagraph from "@/app/components/BgImgParagraph/BgImgParagraph";
import AnimatedTitle from "@/app/components/Animations/AnimatedTitle";
import MovingParagraph from "@/app/components/MovingParagraph/MovingParagraph";

import Carrousel from "@/app/components/Carrousel/Carrousel";
import SaasBg from "@/../public/littleSaas.jpg";
import SaasBg_white from "@/../public/littleSaas_white2.jpg";
import RestaurantPage from "@/app/pages/Restaurant/RestaurantPage";

import ToggleDarkMode from "@/app/components/Animations/Toogle/ToggleDarkMode";
import { ThemingContext } from "@/app/contexts/theme_styles/ThemeAndStyleProvider";
import { Style, STYLES } from "@/app/contexts/theme_styles/dto/style.dto";
import { ThemeEnum, THEMES } from "@/app/contexts/theme_styles/dto/theme.dto";

const myFont = localFont({
  src: "../../../../public/fonts/aquire-font/AquireBold-8Ma60.otf",
  //src: '../../public/fonts/nero-font/Nero-gaoR.ttf',
  display: "swap",
});

export function StyleToggleButtonGroup() {
  const { theme, style, setTheme, setStyle } = React.useContext(ThemingContext);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newStyle: string
  ) => {
    setStyle(newStyle as Style);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "1rem",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {Object.keys(STYLES).map((key, index) => {
        return (
          <button
            key={index}
            onClick={() => setStyle(key as Style)}
            disabled={style === key}
            style={{
              padding: "10px",
              border: "1px solid black",
              borderRadius:
                index === 0
                  ? "12px 0 0 12px"
                  : index === Object.keys(STYLES).length - 1
                  ? "0 12px 12px 0"
                  : "0",
              backgroundColor:
                style === key
                  ? THEMES[theme].secondaryColor
                  : THEMES[theme].primaryColor,
              color: "white",
            }}
          >
            {key}
          </button>
        );
      })}
    </div>
  );

  /*return (
    <ToggleButtonGroup
      color="secondary"
      style={{
        backgroundColor: THEMES[theme].backgroundColor,
      }}
      value={style}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      {Object.keys(STYLES).map((key) => {
            return <ToggleButton value={key} 
            style={{
              color: THEMES[theme].color,
            }}>{key}</ToggleButton>;
      })}
    </ToggleButtonGroup>
  );*/
}

function PresentationBlocks() {
  return (
    <div
      style={{
        display: "flex",
        color: "white",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      <BgImgParagraph
        altMovment={true}
        title={"Présentations"}
        text={
          "Bienvenue sur mon site ! Je suis un développeur full stack passionné, récemment diplômé d'Epitech. Mon parcours dans le monde de la technologie est motivé par une curiosité insatiable et un désir incessant de donner vie à des idées innovantes. J'aime apprendre de nouvelles technologies et explorer des domaines variés, ce qui m'a permis d'acquérir une expérience précieuse dans un large spectre de domaines technologiques."
        }
      />

      <BgImgParagraph
        image={devImg.src}
        title={"Experiences"}
        text={
          "Mon parcours et mes expériences m'ont permis d'acquérir des compétences dans la gestion de projets, le développement, l'intégration, la migration et la maintenance de projets web et mobile, mais aussi sur des projets de développement embarqué et de la recherche et développement."
        }
      />
    </div>
  );
}

export function Experiences() {
  return (
    <div
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
      <MovingParagraph
        title="Développement de sites et d'applications web"
        text="Du site vitrine au site e-commerce, je vous accompagne dans la création de votre site web. Je vous propose des solutions sur mesure, adaptées à vos besoins et à votre budget."
        inverted
      />
      <MovingParagraph
        title="Application mobiles Android et IOS"
        text="Créez votre application sur mesure. Je vous accompagne dans la création de votre application mobile, de la conception à la publication sur les stores."
      />
      <MovingParagraph
        title="Serveur et base de données"
        text="Besoin de gérer les données de vos utilisateurs ? Je vous propose des solutions d'hébergement et de stockage de données adaptées à vos besoins."
        inverted
      />
      <MovingParagraph
        title="Solutions sur mesure"
        text="Vous avez un projet spécifique ? Je vous propose des solutions sur mesure pour réaliser votre projet."
      />
    </div>
  );
}

export function TopBar() {
  const { theme, setTheme } = React.useContext(ThemingContext);

  const email = "enzo.biamonti@epitech.eu";
  const subject = encodeURIComponent("[Contact] Demande de devis");
  const body = encodeURIComponent(
    "Bonjour, je souhaiterais obtenir un devis pour une mission de développement. Quelles sont vos disponibilités ?"
  );

  return (
    <div
      className={styles.HeaderContainer}
      style={{
        backgroundColor: THEMES[theme].backgroundColor,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <ToggleDarkMode
          checked={theme === ThemeEnum.LIGHT}
          onClick={() => {
            setTheme(
              theme === ThemeEnum.LIGHT ? ThemeEnum.DARK : ThemeEnum.LIGHT
            );
          }}
        />
      </div>
      <IconContext.Provider
        value={{
          color: THEMES[theme].color,
          className: "global-class-name",
          style: { height: "100%", width: "100%" },
        }}
      >
        <div
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            height: "35px",
            gap: 20,
          }}
        >
          <a href="tel:+33669487093" style={{ height: "100%", width: "100%" }}>
            <AiOutlinePhone />
          </a>
          <a
            href={`mailto:${email}?subject=${subject}&body=${body}`}
            style={{ height: "100%", width: "100%" }}
          >
            <AiOutlineMail />
          </a>
          <AiFillLinkedin />
        </div>
      </IconContext.Provider>
    </div>
  );
}

export function Dot({
  color = "green",
  size = "1rem",
}: {
  color?: string;
  size?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: color,
        width: size,
        height: size,
        borderRadius: "50%",
      }}
    ></div>
  );
}

export function StatusPills() {
  const { theme, style } = React.useContext(ThemingContext);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        marginTop: "10px",
        paddingBottom: "10px",
        flexDirection: "row",
        gap: "1rem",
        justifyContent: "center",
        fontSize: "1rem",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <h5
        style={{
          alignSelf: "center",
        }}
      >
        Disponibilités :
      </h5>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          gap: "10px",
          backgroundColor: THEMES[theme].primaryColor,
          color: "white",
          padding: "7px",
          borderRadius: "1rem",
        }}
      >
        <p>Mission / Devis</p>
        <Dot color="orange" />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          gap: "10px",
          backgroundColor: THEMES[theme].primaryColor,
          color: "white",
          padding: "7px",
          borderRadius: "1rem",
        }}
      >
        <p>CDI / CDD</p>
        <Dot color="lightgreen" />
      </div>
    </div>
  );
}

export function SAASContent() {
  const { theme } = React.useContext(ThemingContext);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <img
        src={theme === ThemeEnum.DARK ? SaasBg.src : SaasBg_white.src}
        style={
          theme === ThemeEnum.DARK
            ? {
                width: "100%",
                height: "500px",
                objectFit: "cover",
                maskImage: `linear-gradient(to bottom, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
              }
            : {
                width: "100%",
                height: "500px",
                objectFit: "cover",
                maskImage: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
              }
        }
      ></img>
      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          paddingBlock: "1rem",
          width: "70%",
        }}
      >
        <h1>
          Grâce à
          <span
            style={{
              color: THEMES[theme].primaryColor,
              fontWeight: "bold",
            }}
          >
            {" "}
            Enzo Biamonti
          </span>
          ,
        </h1>{" "}
        <h1>donnez enfin vie</h1>
        <h1> à vos idées</h1>
      </div>
      <Experiences />
    </div>
  );
}

export function NameHeader() {
  return (
    <div
      style={{
        fontSize: "7vw",
        padding: "1rem",
        paddingTop: "20px",
        gap: "15rem",
        alignContent: "center",
        width: "100%",
      }}
    >
      <AnimatedTitle
        title="Enzo Biamonti"
        textClass={myFont.className}
        textStyles={{ textAlign: "center", fontWeight: "bold" }}
      />
      <p
        style={{
          fontSize: "4vw",
          padding: "0rem",
          alignContent: "center",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Développeur Freelance Web et Mobile
      </p>
      <StatusPills />
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

export function ContentSelector() {
  return <></>;
}

export function MainContent() {
  const { theme, style } = React.useContext(ThemingContext);

  useEffect(() => {
    console.log("theme changed", theme);
    let mainContainer = document.getElementById("mainContainer");
    if (mainContainer) {
      mainContainer.style.backgroundColor = THEMES[theme].backgroundColor;
    }
  }, [theme]);

  return (
    <div
      id="mainContainer"
      style={{
        backgroundColor: THEMES[theme].backgroundColor,
        color: THEMES[theme].color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "35px",
        gap: "30px",
      }}
    >
      <NameHeader />
      <h2>Choisissez votre style :</h2>
      <StyleToggleButtonGroup />

      {style === Style.DEV ? (
        <DevelopperContent />
      ) : style === Style.SAAS ? (
        <SAASContent />
      ) : (
        <RestaurantPage />
      )}
      <div
        style={{
          backgroundColor: THEMES[theme].backgroundColor,
          width: "100%",
        }}
      >
        <p style={{ textAlign: "center" }}>
          Enzo Biamonti - enzo.biamonti@epitech.eu
        </p>
      </div>
    </div>
  );
}
