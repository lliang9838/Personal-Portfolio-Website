import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import pink from "@material-ui/core/colors/pink";
import Divider from "@material-ui/core/Divider";
import { Introduction } from "./Introduction";
import { About } from "./About";
import { Experience } from "./Experience";
import { Projects } from "./Projects";
import { Contact } from "./Contact";
import "./Body.css";

const darkPink = pink[600];
const darkerPink = pink[700];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    flexShrink: 0,
    width: "12rem",
  },
  drawerPaper: {
    width: "12rem",
  },
  divider: {
    height: "9rem",
    backgroundColor: `${darkPink}`,
  },
  rotate: {
    transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
    position: "absolute",
    top: "68%",
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const Body = () => {
  const classes = useStyles();
  return (
    <Box component="content" className={classes.root}>
      <div className="sidebar">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <Grid
            style={{ height: "100%" }}
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item style={{ marginBottom: "1.2rem", marginTop: "1.2rem" }}>
              <a href="https://github.com/lliang9838" target="_blank">
                <GitHubIcon color="primary" />
              </a>
            </Grid>
            <Grid item style={{ marginBottom: "1.2rem", marginTop: "1.2rem" }}>
              <a
                href="https://www.linkedin.com/in/leslieliang9838/"
                target="_blank"
              >
                <LinkedInIcon color="primary" />
              </a>
            </Grid>
            <Grid item style={{ marginBottom: "1.2rem", marginTop: "1.2rem" }}>
              <a
                href="https://www.facebook.com/bigballerleslie/"
                target="_blank"
              >
                <FacebookIcon color="primary" />
              </a>
            </Grid>
            <Grid item style={{ marginBottom: "1.2rem", marginTop: "1.2rem" }}>
              <a
                href="https://www.instagram.com/bigballerleslie/"
                target="_blank"
              >
                <InstagramIcon color="primary" />
              </a>
            </Grid>
            <Grid item>
              <Divider
                classes={{
                  root: classes.divider,
                }}
                orientation="vertical"
                flexItem
              />
            </Grid>
          </Grid>
        </Drawer>
      </div>
      <main style={{ width: "100%" }}>
        <Introduction />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <div className="sidebar">
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
          anchor="right"
        >
          <Toolbar />
          <Grid
            style={{ height: "100%" }}
            container
            direction="column"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item style={{ marginBottom: "1.2rem", marginTop: "1.2rem" }}>
              <a href="mailto:lliang9838@gmail.com">
                <Typography
                  style={{ fontFamily: "'Roboto Mono'" }}
                  className={classes.rotate}
                  color="primary"
                >
                  lliang9838@gmail.com
                </Typography>
              </a>
            </Grid>
            <Grid item>
              <Divider
                classes={{
                  root: classes.divider,
                }}
                orientation="vertical"
                flexItem
              />
            </Grid>
          </Grid>
        </Drawer>
      </div>
    </Box>
  );
};
