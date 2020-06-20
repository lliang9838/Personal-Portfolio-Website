import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Resume from "../img/resume.pdf";

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
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <Box component="nav">
      <AppBar
        position="absolute"
        style={{ background: "white" }}
        className={classes.appBar}
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <a href="#" style={{ marginRight: "auto", textDecoration: "none" }}>
              <Typography color="primary">Logo</Typography>
            </a>
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
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </Box>
  );
};
