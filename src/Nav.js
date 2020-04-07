import _ from "lodash";
import React from "react";
import styles from "./sass/styles.module.sass";
import classnames from "classnames";

import userSvg from "./images/user.svg";

const Skill = ({ term, freq, total, onClick }) => {
  return (
    <div onClick={onClick} className={styles["skill"]}>
      <div className={styles["skill__term"]}>{term}</div>
      <div className={styles["skill__line"]}>
        <hr />
      </div>
      <div className={styles["skill__freq"]}>{freq}</div>
    </div>
  );
};

const Nav = ({ skillList, focused, onBackToMainClick, onSkillClick, maxHeight }) => {
  return skillList.length === 0 ? (
    <nav style={{ maxHeight: maxHeight, overflow: "auto" }} className={styles["nav"]}>
      <h1>Skills available in your Knowledge Network</h1>
      <div className={styles["list"]}>
        <div>
          Here are all the skills available in your organisation’s Knowledge
          Network, visualised as clusters based on relatedness. <br />
          <br />
          Each cluster is dynamically generated based on how often skills occur
          together on user profiles. Note that clusters are *not* based on
          existing structures within your organisation such as departments or
          teams.
          <br />
          <br />
          The distance between clusters indicates how closely related the skills
          in the clusters are. Overlaps indicate that some skills are shared
          between clusters.
          <br />
          <br />
          The size of a cluster indicates how many people there are in your
          network with the cluster’s skills.
          <br />
          <br />
          If you hover over a cluster, the individual skills within it will
          appear on the right, ordered by frequency.
        </div>
      </div>
    </nav>
  ) : (
    <nav className={styles["nav"]}>
      <h1 className="blue">
        {skillList
          .slice(0, 2)
          .map(item => item.term)
          .join(", ")}
      </h1>

      <a
        onClick={onBackToMainClick}
        className={classnames(styles["nav__back-to-main"], {
          enabled: focused
        })}
      >
        {"< Back to main"}
      </a>

      <div className={styles["nav__sub-header"]}>
        <h2>Skills:</h2>
        <div
          className={styles["nav__user-logo"]}
          style={{ backgroundImage: `url(${userSvg})` }}
        />
      </div>
      <div className={styles["list"]}>
        {skillList.map(skill => (
          <Skill onClick={e => onSkillClick(e, skill.term)} key={skill.term} {...skill} />
        ))}
      </div>
    </nav>
  );
};

export default Nav;
