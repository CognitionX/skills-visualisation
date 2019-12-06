import _ from "lodash";
import React, { useRef, useEffect } from "react";
import styles from "./sass/styles.module.sass";

const Skill = ({ term, freq, total }) => {
  return (
    <div className={styles["skill"]}>
      <div className={styles["skill__term"]}>{term}</div>
      <div className={styles["skill__line"]}>
        <hr />
      </div>
      <div className={styles["skill__freq"]}>{freq}</div>
    </div>
  );
};

const Nav = ({ skillList }) => {
  return skillList.length === 0 ? (
    <nav className={styles["nav"]}>
      <h1>Your company's skills group</h1>
      <div className={styles["list"]}>
        <div>Here are some example</div>
      </div>
    </nav>
  ) : (
    <nav className={styles["nav"]}>
      <h1>
        {skillList
          .slice(0, 2)
          .map(item => item.term)
          .join(", ")}
      </h1>
      <div>
        <h2>Skills:</h2>
      </div>
      <div className={styles["list"]}>
        {skillList.map(skill => (
          <Skill key={skill.term} {...skill} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
