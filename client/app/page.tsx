"use client";
import React, { FC, useState } from "react";
import Heading from "./utils/Heading";

interface Props {}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="LMS"
        description="It is a learning platform for students"
        keywords="LMS, MERN, React Nextjs Express"
      />
    </div>
  );
};

export default Page;
