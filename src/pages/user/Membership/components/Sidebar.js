/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../layout.css";
import Ava1 from "../../../../assets/images/user/avatar-1.jpg";
import Verified from "../../../../assets/images/icon/verified-badge.svg";
import Sidebar1 from "../../../../assets/images/icon/sidebar-icon-01.svg";
import Sidebar2 from "../../../../assets/images/icon/sidebar-icon-02.svg";
import Sidebar3 from "../../../../assets/images/icon/sidebar-icon-03.svg";
import Sidebar4 from "../../../../assets/images/icon/sidebar-icon-04.svg";
import Sidebar5 from "../../../../assets/images/icon/sidebar-icon-05.svg";
import Sidebar6 from "../../../../assets/images/icon/sidebar-icon-06.svg";
import Sidebar7 from "../../../../assets/images/icon/sidebar-icon-07.svg";
import Sidebar8 from "../../../../assets/images/icon/sidebar-icon-08.svg";
import Sidebar9 from "../../../../assets/images/icon/sidebar-icon-09.svg";
import Sidebar10 from "../../../../assets/images/icon/sidebar-icon-10.svg";
import Sidebar11 from "../../../../assets/images/icon/sidebar-icon-11.svg";
import $ from "jquery";

const BillingSidebar = () => {
  // useEffect(() => {
  //   $("#sidebar-menu a").on("click", function (e) {
  //     if ($(this).parent().hasClass("submenu")) {
  //       e.preventDefault();
  //     }
  //     if (!$(this).hasClass("subdrop")) {
  //       $("ul", $(this).parents("ul:first")).slideUp(350);
  //       $("a", $(this).parents("ul:first")).removeClass("subdrop");
  //       $(this).next("ul").slideDown(350);
  //       $(this).addClass("subdrop");
  //     } else if ($(this).hasClass("subdrop")) {
  //       $(this).removeClass("subdrop");
  //       $(this).next("ul").slideUp(350);
  //     }
  //   });
  //   $("#sidebar-menu ul li.submenu a.active")
  //     .parents("li:last")
  //     .children("a:first")
  //     .addClass("active")
  //     .trigger("click");
  // }, []);

  return (
    <div class="settings-widget">
      <div class="settings-header d-sm-flex flex-row flex-wrap text-center text-sm-start align-items-center">
        <a href="freelancer-profile.html">
          <img alt="profile" src={Ava1} className="avatar-lg rounded-circle" />
        </a>
        <div class="ms-sm-3 ms-md-0 ms-lg-3 mt-2 mt-sm-0 mt-md-2 mt-lg-0">
          <h3 class="mb-0">
            <a href="freelancer-profile.html">Bruce Bush</a>
            <img src={Verified} class="ms-1" alt="Img" />
          </h3>
          <p class="mb-0">@brucebush</p>
        </div>
      </div>
      <div class="settings-menu">
        <div id="sidebar-menu" class="sidebar-menu">
          <ul>
            <li class="nav-item">
              <a href="freelancer-dashboard.html" class="nav-link">
                <img src={Sidebar1} alt="Img" class="icon" />
                Dashboard
              </a>
            </li>
            <li class="nav-item submenu">
              <a href="#" class="nav-link">
                <img src={Sidebar2} alt="Img" class="icon" />
                Projects
                <span class="menu-arrow"></span>
              </a>
              <ul class="sub-menu-ul d-block">
                <li>
                  <a href="#">My Proposal</a>
                </li>
                <li>
                  <a href="#">Ongoing Projects</a>
                </li>
                <li>
                  <a href="#">Completed Projects</a>
                </li>
                <li>
                  <a href="#">Cancelled Projects</a>
                </li>
              </ul>
            </li>
            <li class="nav-item submenu">
              <a href="#" class="nav-link">
                <img src={Sidebar3} alt="Img" class="icon" />
                Favourites
                <span class="menu-arrow"></span>
              </a>
              <ul class="sub-menu-ul d-block">
                <li>
                  <a href="#">Bookmarked Projects</a>
                </li>
                <li>
                  <a href="#">Invitations</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img src={Sidebar4} alt="Img" class="icon" />
                Reviews
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img src={Sidebar5} alt="Img" class="icon" />
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img src={Sidebar6} alt="Img" class="icon" />
                Chat
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img src={Sidebar7} alt="Img" class="icon" />
                Payments
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img src={Sidebar8} alt="Img" class="icon" />
                Payout
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img src={Sidebar9} alt="Img" class="icon" />
                Statement
              </a>
            </li>
            <li class="nav-item submenu">
              <a href="#" class="nav-link active">
                <img src={Sidebar10} alt="Img" class="icon" />
                Settings
                <span class="menu-arrow"></span>
              </a>
              <ul class="sub-menu-ul d-block">
                <li>
                  <a href="#">Profile Setting</a>
                </li>
                <li>
                  <a class="active" href="freelancer-membership">
                    Plan & Billing
                  </a>
                </li>
                <li>
                  <a href="#">Verify Identity</a>
                </li>
                <li>
                  <a href="#">Changes Password</a>
                </li>
                <li>
                  <a href="#">Delete Account</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link">
                <img src={Sidebar11} alt="Img" class="icon" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BillingSidebar;
