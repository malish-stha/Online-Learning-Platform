import React, { FC } from "react";

type Props = {
  user: any;
  active: number;
  avatar: string | null;
  setActive: (active: number) => void;
  logOutHandler: any;
};

const SideBarProfile: FC<Props> = ({ user }) => {
  return <div>SideBarProfile</div>;
};

export default SideBarProfile;
