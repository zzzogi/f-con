import React from "react";
import BreadCrumb from "../../../../components/user/BreadCrumb/BreadCrumb";
import "../layout.css";
import Ava1 from "../../../../assets/images/avatar/avatar-2.jpg";
import MapPin from "../../../../assets/images/icon/map-pin.svg";
import Star from "../../../../assets/images/icon/star.svg";
import Calendar from "../../../../assets/images/icon/calendar.svg";
import ComputerLine from "../../../../assets/images/icon/computer-line.svg";
import TimeLine from "../../../../assets/images/icon/time-line.svg";
import UserHeartLine from "../../../../assets/images/icon/user-heart-line.svg";
import TranslateTwo from "../../../../assets/images/icon/translate-2.svg";
import TranslateOne from "../../../../assets/images/icon/translate.svg";
import Experience from "../../../../assets/images/icon/expereience.png";
import Report from "../../../../assets/images/icon/report.png";

export const DeverloperProfile = () => {
  const userData = {
    image: Ava1,
    name: "Michael Stewart",
    description: "UI UX Designer",
    info: {
      address: "Los Angles",
      createdDate: "22 September 2023",
      rating: "5.0",
      numsOfReviews: 245,
      recommended: 89,
      completed_project: 220,
      ongoing_project: 10,
      feedbacks: 78,
      rehied: "Rehired",
      response_time: 123, //in minutes
    },
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    experiences: [
      {
        title: "Team Leader",
        fromYear: 2017,
        toYear: 2023,
        role: "UI UX Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      {
        title: "Senior UI UX Designer",
        fromYear: 2019,
        toYear: 2021,
        role: "UI UX Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      {
        title: "Junior UI UX Designer",
        fromYear: 2016,
        toYear: 2019,
        role: "UI UX Designer",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
    ],
    educations: [
      {
        title: "Master Degree",
        fromYear: 2013,
        toYear: 2016,
        address: "Arizona State University",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
      {
        title: "Bachelor Degree",
        fromYear: 2010,
        toYear: 2013,
        address: "Arizona State University",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
      },
    ],
  };

  const convertMinsToHrsMins = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    // Add leading zero if minutes is less than 10
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedHours = hours < 10 ? `0${hours}` : hours;

    return `${formattedHours}h${formattedMinutes}`;
  };

  return (
    <div>
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Freelancer Details" page="Freelancer Details" />
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="custom-column">
              <div class="company-detail-block">
                <div class="company-detail">
                  <div class="company-detail-image">
                    <img src={userData.image} class="img-fluid" alt="logo" />
                  </div>
                  <div class="company-title">
                    <h4>{userData.name}</h4>
                    <p>{userData.description}</p>
                  </div>
                </div>
                <div class="company-address">
                  <ul>
                    <li>
                      <img src={MapPin} alt="icons" class="icon" />
                      {userData.info.address}
                    </li>
                    <li>
                      <img src={Calendar} alt="icons" class="icon" />
                      {userData.info.createdDate}
                    </li>
                    <li>
                      <img src={Star} alt="icons" class="icon" />
                      {userData.info.rating + " "},
                      {userData.info.numsOfReviews + " reviews"}
                    </li>
                  </ul>
                </div>
                <div class="project-proposal-detail">
                  <ul>
                    <li>
                      <div class="proposal-detail-img">
                        <img src={ComputerLine} alt="icons" />
                      </div>
                      <div class="proposal-detail text-capitalize">
                        <span style={{ display: "block" }}>Recommended</span>
                        <p style={{ marginBottom: 0 }}>
                          {userData.info.recommended}%
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="proposal-detail-img">
                        <img src={TimeLine} alt="icons" />
                      </div>
                      <div class="proposal-detail text-capitalize">
                        <span style={{ display: "block" }}>
                          Completed Projects
                        </span>
                        <p style={{ marginBottom: 0 }}>
                          {userData.info.completed_project}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="proposal-detail-img">
                        <img src={TimeLine} alt="icons" />
                      </div>
                      <div class="proposal-detail text-capitalize">
                        <span style={{ display: "block" }}>
                          Ongoing Projects
                        </span>
                        <p style={{ marginBottom: 0 }}>
                          {userData.info.ongoing_project}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="proposal-detail-img">
                        <img src={UserHeartLine} alt="icons" />
                      </div>
                      <div class="proposal-detail text-capitalize">
                        <span style={{ display: "block" }}>Feedbacks</span>
                        <p style={{ marginBottom: 0 }}>
                          {userData.info.feedbacks}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="proposal-detail-img">
                        <img src={TranslateTwo} alt="icons" />
                      </div>
                      <div class="proposal-detail text-capitalize">
                        <span style={{ display: "block" }}>Rehired</span>
                        <p style={{ marginBottom: 0 }}>
                          {userData.info.rehied}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div class="proposal-detail-img">
                        <img src={TranslateOne} alt="icons" />
                      </div>
                      <div class="proposal-detail text-capitalize">
                        <span style={{ display: "block" }}>Response Times</span>
                        <p style={{ marginBottom: 0 }}>
                          ~{convertMinsToHrsMins(userData.info.response_time)}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="company-detail-block company-description">
                <h4 class="company-detail-title">Description</h4>
                <p>{userData.about}</p>
              </div>
              <div class="company-detail-block company-description">
                <h4 class="company-detail-title">Experience</h4>
                {userData.experiences.map((experience) => {
                  return (
                    <div class="experience-set">
                      <div class="experience-set-img">
                        <img src={Experience} alt="img" />
                      </div>
                      <div class="experience-set-content">
                        <h5>
                          {experience.title}
                          <span>
                            {experience.fromYear} - {experience.toYear}
                          </span>
                        </h5>
                        <span>{experience.role}</span>
                        <p>{experience.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="company-detail-block company-description">
                <h4 class="company-detail-title">Education</h4>
                {userData.educations.map((education) => {
                  return (
                    <div class="experience-set">
                      <div class="experience-set-img">
                        <img src={Report} alt="img" />
                      </div>
                      <div class="experience-set-content">
                        <h5>
                          {education.title}
                          <span>
                            {education.fromYear} - {education.toYear}
                          </span>
                        </h5>
                        <span>{education.address}</span>
                        <p>{education.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
