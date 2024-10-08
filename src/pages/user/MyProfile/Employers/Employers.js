import React from "react";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";

export const Employers = () => {
  return (
    <div>
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Freelancer Grid" page="Member" />
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              <div class="company-detail-block pt-0">
                <div>Employers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
