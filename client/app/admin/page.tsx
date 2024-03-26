"use client";
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/Sidebar/AdminSidebar";
import DashboardHero from "../components/Admin/DashboardHero";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="LMS- Admin"
        description="Admin page for LMS"
        keywords="Admin, LMS, Admin page"
      />
      <div className="flex h-[200vh]">
        <div className="150px:w-[16%] w-1/5">
          <AdminSidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHero />
        </div>
      </div>
    </div>
  );
};

export default page;
