import React from 'react';
import styles from './MovingParagraph.module.css';
import { AnimationAppears } from '../Animations/AnimationAppears';

interface MovingParagraphProps {
  title: string;
  text: string;
  inverted?: boolean;
}

export default function MovingParagraph({
  title,
  text,
  inverted = false,
}: MovingParagraphProps) {
  return (
    <AnimationAppears style={{}} inverted={inverted}>
      <div className={styles.ContainerTitle}>
        <p className={styles.TextTitle}>
          {title}
        </p>
        <p
          className={styles.TextSubtitle}
        >
          {text}
        </p>
      </div>
    </AnimationAppears>
  );
}