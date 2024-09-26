"use client";
import React, { useEffect } from "react";
import { useTranslation } from 'next-i18next';
import styles from "./AnimationAppears.module.css";

export function AnimationAppears({ children, style, inverted = false } : {
  children: any;
  style: any;
  inverted: boolean;
}) {
  const { t } = useTranslation('common');

  useEffect(() => {
    let elems = Array.prototype.slice.call(document.querySelectorAll(".myhidden"));
    var inverted = Array.prototype.slice.call(document.querySelectorAll('.inverted'));
    elems.push.apply(elems, inverted);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(`${styles.myshow}`);
          } else {
            entry.target.classList.remove(`${styles.myshow}`);
          }
        });
      },
      {
        threshold: 0, // Adjust this threshold as needed
      }
    );
    elems.forEach((elem) => {
      observer.observe(elem);
    });
  }, []);

  return (
    <div
      className={
         `container ${styles.container} ` + (inverted ? ` inverted ${styles.inverted} ` :  ` myhidden ${styles.myhidden} `)
      }
      style={style}
    >
      {children}
    </div>
  );
}
