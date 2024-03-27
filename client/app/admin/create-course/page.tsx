"use client";
import React from "react";
import Sidebar from "@/app/components/Admin/Sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import CreateCourse from "@/app/components/Admin/Course/CreateCourse";
import DashboardHeader from "@/app/components/Admin/DashboardHeader";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Heading
        title="LMS"
        description="LMS is a platform for students  to learn"
        keywords="LMS, learn, students"
      />
      <div className="flex">
        <div className="1500px:w-[16%] w-1/5">
          <Sidebar />
        </div>
        <div className="w-[85%]">
          <DashboardHeader />
          <CreateCourse />
        </div>
      </div>
    </div>
  );
};

export default page;
