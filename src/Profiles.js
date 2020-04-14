import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import _ from "lodash";
import ReactPaginate from "react-paginate";
import imagePlaceholder from "./images/empty_image.png";

import styles from "./sass/profiles.module.sass";

const Profile = ({ imageSrc, name, occupation, email }) => {
  return (
    <div className={styles["profile"]}>
      <div className={styles["profile__image"]}>
        <img src={imageSrc || imagePlaceholder} />
      </div>
      <p className={cx(styles["profile__text"], styles["profile__text--bold"])}>{name}</p>
      <p className={styles["profile__text"]}>{occupation}</p>
      <p className={styles["profile__text"]}>{email}</p>
    </div>
  )
}

Profile.propTypes = {
  imageSrc: PropTypes.string,
  name: PropTypes.string,
  occupation: PropTypes.string,
  email: PropTypes.email
}

class ProfilesList extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 0,
      offset: 0,
      uploadsPerPage: 10
    }

    this.onPaginationClick = this.onPaginationClick.bind(this);
  }

  getProfilesToDisplay() {
    const { uploadsPerPage, offset } = this.state;
    const { profilesBySkill } = this.props;

    return profilesBySkill.slice(offset, offset + uploadsPerPage);
  }

  onPaginationClick(data){
    const { uploadsPerPage } = this.state;

    this.setState({
      currentPage: data.selected,  
      offset: data.selected * uploadsPerPage
    });
  }

  render() {
    const { currentPage, uploadsPerPage } = this.state;
    const { profilesBySkill, skillName, occupations } = this.props;


    const profilesToDisplay = this.getProfilesToDisplay();
    const pageCount = Math.ceil(profilesBySkill.length / uploadsPerPage);

    return (
      <div className={styles["container"]}>
        <div className={styles["profiles-list"]}>
          <h1 className={styles["profiles-list__header"]}>People with {skillName} skill.</h1>
          <p className={styles["profiles-list__count"]}>Total: {profilesBySkill.length} people.</p>
        
          <div className={styles["profiles-list__list"]}>
            {
              profilesToDisplay.map(profile => {
                const occupation = occupations.find(occ => occ.get("id") === profile.occupation)
                return (
                <Profile
                  key={profile.id}
                  imageSrc={profile.image}
                  name={`${profile.first_name} ${profile.last_name}`} 
                  occupation={!!occupation ? _.startCase(occupation.get("name")) : undefined}
                  email={profile.question_email}
                  />
              )})
            }
          </div>
          {
              pageCount > 1 &&
              <ReactPaginate 
                pageCount={pageCount}
                pageRangeDisplayed={4}
                marginPagesDisplayed={1} 
                onPageChange={this.onPaginationClick}
                forcePage={currentPage}
                previousLabel={""}
                containerClassName={styles["pagination-container"]}
                pageLinkClassName={styles["pagination__link"]}
                activeLinkClassName={cx(styles["pagination__link"], styles["pagination__link--active"])}
                nextLinkClassName={cx(styles["pagination__next-link"], 
                profilesToDisplay.indexOf(profilesBySkill[profilesBySkill.length - 1]) > -1 && styles["pagination__next-link--disabled"])}
              />
            }
        </div>
      </div>
    )
  }
}

export default ProfilesList;

