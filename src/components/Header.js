import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Resume from "../img/resume.pdf";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import "./Header.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  list: {
    width: "20rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <Box component="nav">
      <AppBar
        position="absolute"
        style={{ background: "white" }}
        className={classes.appBar}
      >
        <Toolbar>
          <div className="navbar">
            <a
              href="#about"
              className="nav-link"
              style={{ marginRight: "3rem" }}
            >
              <Typography color="primary">About</Typography>
            </a>
            <a
              href="#experience"
              className="nav-link"
              style={{ marginRight: "3rem" }}
            >
              <Typography color="primary">Experience</Typography>
            </a>
            <a
              href="#projects"
              className="nav-link"
              style={{ marginRight: "3rem" }}
            >
              <Typography color="primary">Projects</Typography>
            </a>
            <a
              href="#contact"
              className="nav-link"
              style={{ marginRight: "3rem" }}
            >
              <Typography color="primary">Contact Me</Typography>
            </a>
            <a href={Resume} className="nav-link" target="_blank">
              <Typography color="primary">Resume</Typography>
            </a>
          </div>
          <div className="hamburger">
            <IconButton onClick={toggleDrawer(true)}>
              <MenuRoundedIcon style={{ fontSize: "4rem" }} color="primary" />
            </IconButton>
            <SwipeableDrawer
              anchor="right"
              open={open}
              onClose={toggleDrawer(false)}
              onOpen={toggleDrawer(true)}
            >
              <div
                className={classes.list}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <a
                  href="#about"
                  className="nav-link"
                  style={{ marginTop: "2rem", marginBottom: "2rem" }}
                >
                  <Typography color="primary">About</Typography>
                </a>
                <a
                  href="#experience"
                  className="nav-link"
                  style={{ marginBottom: "2rem" }}
                >
                  <Typography color="primary">Experience</Typography>
                </a>
                <a
                  href="#projects"
                  className="nav-link"
                  style={{ marginBottom: "2rem" }}
                >
                  <Typography color="primary">Projects</Typography>
                </a>
                <a
                  href="#contact"
                  className="nav-link"
                  style={{ marginBottom: "2rem" }}
                >
                  <Typography color="primary">Contact Me</Typography>
                </a>
                <a href={Resume} className="nav-link" target="_blank">
                  <Typography color="primary">Resume</Typography>
                </a>
              </div>
            </SwipeableDrawer>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
