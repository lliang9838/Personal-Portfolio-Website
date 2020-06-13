import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

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
  customizeToolbar: {
    minHeight: 52,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export const Header = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <AppBar
        position="absolute"
        style={{ background: "white" }}
        className={classes.appBar}
      >
        >
        <Toolbar className={classes.customizeToolbar}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item style={{ marginRight: "auto" }}>
              <Button color="primary">Logo</Button>
            </Grid>
            <Grid item>
              <Button color="primary">About</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Experience</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Projects</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Contact Me</Button>
            </Grid>
            <Grid item>
              <Button color="primary">Resume</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
};
