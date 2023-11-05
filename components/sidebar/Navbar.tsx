import { useState } from "react";
import { UnstyledButton, Tooltip, Title, rem } from "@mantine/core";
import { BiHomeCircle, BiLogOutCircle } from "react-icons/bi";
import { MdManageAccounts } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import { HiOutlineSupport } from "react-icons/hi";

import classes from "./DoubleNavbar.module.scss";

const renderIcon = (icon) => {
  switch (icon) {
    case "BiHomeCircle":
      return <BiHomeCircle />;
    case "MdManageAccounts":
      return <MdManageAccounts />;
    case "BsPersonWorkspace":
      return <BsPersonWorkspace />;
    case "RiAccountCircleLine":
      return <RiAccountCircleLine />;
    case "HiOutlineSupport":
      return <HiOutlineSupport />;
    case "BiLogOutCircle":
      return <BiLogOutCircle />;
    default:
      return null;
  }
};

const linksMockdata = [
  { icon: "BiHomeCircle", h: "Home" },
  { icon: "MdManageAccounts", h: "Accounts" },
  { icon: "BsPersonWorkspace", h: "Workspaces" },
  { icon: "RiAccountCircleLine", h: "Account" },
];

const bottomLinks = [
  { icon: "HiOutlineSupport", h: "Support" },
  { icon: "BiLogOutCircle", h: "Logout" },
];

export function DoubleNavbar() {
  const [active, setActive] = useState("BORD");
  const [activeLink, setActiveLink] = useState("Settings");

  const links = linksMockdata.map((link) => (
    <>
      <a
        className={classes.link}
        data-active={activeLink === link.h || undefined}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link.h);
        }}
        key={link.h}
      >
        {renderIcon(link.icon)}
        {link.h}
      </a>
    </>
  ));
  const btmLinks = bottomLinks.map((link) => (
    <>
      <a
        className={classes.link}
        data-active={activeLink === link.h || undefined}
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setActiveLink(link.h);
        }}
        key={link.h}
      >
        {renderIcon(link.icon)}
        {link.h}
      </a>
    </>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.wrapper}>
        {/* <next type="mark" size={30} /> */}

        <div className={classes.main}>
          <Title order={2} className={classes.title}>
            {active}
          </Title>
          <hr />
          <div className={classes.parent}>
            {links}
            <hr />
            <hr />
            <div className={classes.linksContainer}>{btmLinks}</div>
          </div>
        </div>
      </div>
    </nav>
  );
}
