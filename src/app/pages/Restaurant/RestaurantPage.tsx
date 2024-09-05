import React, { useEffect, useState } from "react";
import introRestau from "@/../public/introRestau.jpg";
import RestauBlock1 from "@/../public/ResteauBlock1.jpg";
import RestauBlock2 from "@/../public/ResteauBlock2.jpg";
import { IconContext } from "react-icons";
import { IoBusinessSharp } from "react-icons/io5";
import { LiaHorseHeadSolid } from "react-icons/lia";
import { MdPersonSearch } from "react-icons/md";
import { VerticalIllustratedParagraph } from "@/app/components/VerticalIllustratedParagraph/VerticalIllustratedParagraph";
import { ThemingContext } from "@/app/contexts/theme_styles/ThemeAndStyleProvider";
import { ThemeEnum } from "@/app/contexts/theme_styles/dto/theme.dto";
import { ContentContext } from "@/app/contexts/content/ContentProvider";
import { Content } from "@/app/contexts/content/dto/content.dto";
import { Experiences } from "../main/MainContent";

/**
 * Represents a menu item in a restaurant menu.
 * @param pos - The position of the menu item. 0 for top, 1 for middle, 2 for bottom.
 * @param content - The content of the menu item.
 */
export function MenuItem({
  pos = 1,
  content,
}: {
  pos: number;
  content: Content;
}) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        backgroundColor: "white",
        color: "rgb(245, 75, 70)",
        padding: "20px",
        borderRadius:
          pos === 0 ? "12px 12px 0 0" : pos === 2 ? "0 0 12px 12px" : "0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p>{content.title}</p>
        <div
          style={{
            flexGrow: 1,
            borderBottom: "1px dotted rgb(245, 75, 70)",
            alignSelf: "center",
            marginInline: "10px",
          }}
        ></div>
        <p>{content.subTitle}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          fontWeight: "200",
          fontStyle: "italic",
        }}
      >
        <p>Ingrédients : {content.description}</p>
      </div>
    </div>
  );
}

export function MenuSelectionButton({
  selected,
  onClick,
  name = "name",
  icon,
}: {
  selected: boolean;
  onClick: any;
  name?: string;
  icon: any;
}) {
  return (
    <IconContext.Provider
      value={{
        color: selected ? "white" : "rgb(245, 75, 70)",
        className: "global-class-name",
        style: { height: "40px", width: "40px" },
      }}
    >
      <button
        onClick={onClick}
        disabled={selected}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "10px",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: selected ? "rgb(245, 75, 70)" : "white",
          color: selected ? "white" : "rgb(245, 75, 70)",
          border: "none",
          borderRadius: "12px",
          padding: "10px",
          height: "100px",
          width: "100px",
          margin: "10px",
        }}
      >
        {icon}
        {name}
      </button>
    </IconContext.Provider>
  );
}
export function MenuSection() {
  const { content, selectedCategory, setSelectedCategory } =
    React.useContext(ContentContext);
  const [category, setCategory] = useState<number>(0);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingInline: "20px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          paddingInline: "0px",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
        <h1>Notre Menu</h1>
        <p>Une cuisine traditionnelle et moderne</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <MenuSelectionButton
            selected={category === 0}
            onClick={() => setCategory(0)}
            name="Professionel"
            icon={<IoBusinessSharp />}
          />
          <MenuSelectionButton
            selected={category === 1}
            onClick={() => setCategory(1)}
            name="Startup"
            icon={<LiaHorseHeadSolid />}
          />
          <MenuSelectionButton
            selected={category === 2}
            onClick={() => setCategory(2)}
            name="Recruteurs"
            icon={<MdPersonSearch />}
          />
        </div>
        {content.map((item, index) => {
          if (item.categories.includes(selectedCategory)) {
            return (
              <MenuItem
                key={index}
                content={item}
                pos={index === 0 ? 0 : (index + 1) >= content.length ? 2 : 1}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export function VerticalSection({
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
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        gap: "10px",
        padding: "20px",
        flexGrow: 1,
      }}
    >
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "1px",
            width: "30px",
            backgroundColor: "rgb(245, 75, 70)",
            content: "",
            alignSelf: "center",
            marginInline: "10px",
          }}
        >
          {" "}
        </div>
        <h3 style={{ color: "rgb(245, 75, 70)", textAlign: "center" }}>
          {title}
        </h3>
      </div>
      <h1 style={{ textAlign: "center" }}>{subTitle}</h1>
      <p style={{ textAlign: "center" }}>{text}</p>
    </div>
  );

  let imgBlock = (
    <div
      style={{
        width: "60%",
        minWidth: "400px",
        overflow: "hidden",
        flexGrow: 1,
      }}
    >
      <img
        src={imgSrc}
        style={{
          height: "500px",
          width: "100%",
          objectFit: "cover",
          //maskImage: `linear-gradient(to bottom, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
          borderRadius: "12px",
        }}
      />
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "flex-start",
        paddingInline: "50px",
        flexWrap: "wrap",
      }}
    >
      {left ? textBlock : imgBlock}
      {left ? imgBlock : textBlock}
    </div>
  );
}

export default function RestaurantMenu() {
  const { theme } = React.useContext(ThemingContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        gap: "2rem",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            backgroundColor: "rgb(245, 75, 70)",
            width: "40%",
            alignContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "70%",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <h1>Enzo&apos;s Café</h1>
            <p>Brewed like in old time</p>
            <button
              style={{
                border: "none",
                borderRadius: "12px",
                backgroundColor: "white",
                color: "rgb(245, 75, 70)",
                fontWeight: "bold",
                padding: "10px",
                width: "100px",
                alignSelf: "center",
              }}
            >
              Voir le Menu
            </button>
          </div>
        </div>

        <div
          style={{
            width: "60%",
            overflow: "hidden",
          }}
        >
          <img
            src={theme === ThemeEnum.DARK ? introRestau.src : introRestau.src}
            style={
              theme === ThemeEnum.DARK
                ? {
                    //width: "100%",
                    height: "500px",
                    width: "100%",
                    objectFit: "cover",
                    maskImage: `linear-gradient(to bottom, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
                  }
                : {
                    //width: "100%",
                    height: "500px",
                    objectFit: "cover",
                    maskImage: `linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)`,
                  }
            }
          />
        </div>
      </div>

      <VerticalIllustratedParagraph
        title="À propos"
        subTitle="Une experience unique et sur mesure"
        text="Plongez au coeur de la start up nation et laissez vous surprendre par un eventail de conseils pour votre business. Je vous accompagne dans votre aventure et vous fait profiter de l'experience que j'ai aquise en participant et en m'informant sur de nombreuses autres projets"
      />
      <VerticalIllustratedParagraph
        left={false}
        imgSrc={RestauBlock2.src}
        title="À propos"
        subTitle="Une experience unique et sur mesure"
        text="Plongez au coeur de la start up nation et laissez vous surprendre par un eventail de conseils pour votre business. Je vous accompagne dans votre aventure et vous fait profiter de l'experience que j'ai aquise en participant et en m'informant sur de nombreuses autres projets"
      />
      <MenuSection />

      <Experiences />
    </div>
  );
}
