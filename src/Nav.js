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
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus vel
          facilisis volutpat est velit egestas. Eget sit amet tellus cras
          adipiscing enim eu. Fringilla phasellus faucibus scelerisque eleifend
          donec. Mi bibendum neque egestas congue quisque egestas. Leo vel orci
          porta non pulvinar neque laoreet suspendisse. Donec et odio
          pellentesque diam volutpat commodo sed. Aliquet nec ullamcorper sit
          amet. Risus viverra adipiscing at in tellus integer feugiat
          scelerisque. <br />
          <br />
          Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Vel elit
          scelerisque mauris pellentesque pulvinar pellentesque. Magna sit amet
          purus gravida quis blandit turpis cursus in. Eget nulla facilisi etiam
          dignissim diam quis enim. Pellentesque diam volutpat commodo sed
          egestas egestas fringilla. Tellus elementum sagittis vitae et leo duis
          ut diam quam. Sed id semper risus in hendrerit gravida rutrum quisque
          non. Malesuada bibendum arcu vitae elementum curabitur vitae.
          Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper
          eget. Feugiat vivamus at augue eget arcu dictum.
        </div>
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
