import React from "react";
import BillingSidebar from "../components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import PlanAndBill from "../components/PlanAndBill";

const FreelancerBilling = () => {
  return (
    <div class="content content-page">
      <div class="container">
        <div class="row">
          <div class="col-xl-3 col-lg-4 theiaStickySidebar">
            <BillingSidebar />
          </div>
          <PlanAndBill />
        </div>
      </div>
    </div>
  );
};

export default FreelancerBilling;
