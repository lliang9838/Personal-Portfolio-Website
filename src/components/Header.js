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
          <Grid
            container
            spacing={5}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item style={{ marginRight: "auto" }}>
              <Button color="primary">Logo</Button>
            </Grid>
            <Grid item>
              <a href="#about" className="nav-link">
                <Typography color="primary">About</Typography>
              </a>
            </Grid>
            <Grid item>
              <a href="#experience">
                <Typography color="primary">Experience</Typography>
              </a>
            </Grid>
            <Grid item>
              <a href="#projects">
                <Typography color="primary">Projects</Typography>
              </a>
            </Grid>
            <Grid item>
              <a href="#contact">
                <Typography color="primary">Contact Me</Typography>
              </a>
            </Grid>
            <Grid item>
              <a href={Resume} target="_blank">
                <Typography color="primary">Resume</Typography>
              </a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <Toolbar /> */}
    </Box>
  );
};
