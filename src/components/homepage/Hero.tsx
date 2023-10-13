import clsx from "clsx";
import React, { FunctionComponent } from "react";

import styles from "./Hero.module.scss";

export const Hero: FunctionComponent = () => {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className={clsx("hero__title", styles.title)}>
          Hi. I'm <span className={styles.highlighted}>Naphtali Odinakachi</span>,
          <br />
          Software Engineer.
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          React Enthusiast, interested in building full-stack web and mobile applications.
          <br />
          Personal development and exploring new tech trends.
        </p>
      </div>
    </header>
  );
};
