import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaHamburger } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { IoCheckmarkDone } from "react-icons/io5";
import { CgArrowLongLeftC } from "react-icons/cg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typgraphy from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  const router = useRouter();
  const isHome = router.route === "/";
  return (
    <div id="mainNav">
      <Link href="/">
        <span style={{ padding: "10px" }}>DevOps Notes</span>
      </Link>
      <FaHamburger id="hamburgerIcon" onClick={handleClick} />{" "}
      {/* <CgArrowLongLeftC style={{ fontSize: "25px", marginRight: "10px" }} /> */}
      <IoCheckmarkDone style={{ fontSize: "25px", marginRight: "10px" }} />
      <Typgraphy>An actual hamburger menu</Typgraphy>
      <Menu
        id="hamburger-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Link href="what-is-devops">
          <MenuItem onClick={handleClose}>What is DevOps?</MenuItem>
        </Link>
        <Link href="agile">
          <MenuItem onClick={handleClose}>Agile - One Team</MenuItem>
        </Link>
        <hr />
        <Link href="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link href="about">
          <MenuItem onClick={handleClose}>About</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
