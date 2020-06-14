import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import pink from "@material-ui/core/colors/pink";
import Divider from "@material-ui/core/Divider";

const darkPink = pink[600];

const drawerWidth = 24;

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerPaper: {
    width: "12rem",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  dividerRoot: {
    height: "9rem",
    backgroundColor: `${darkPink}`,
  },
  rotate: {
    transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
    position: "absolute",
    top: "68%",
  },
}));

export const Body = () => {
  const classes = useStyles();
  return (
    <Box component="content">
      <Box component="left-sidebar">
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
            spacing={3}
          >
            <Grid item>
              <a href="https://github.com/lliang9838" target="_blank">
                <GitHubIcon color="primary" />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.linkedin.com/in/leslieliang9838/"
                target="_blank"
              >
                <LinkedInIcon color="primary" />
              </a>
            </Grid>
            <Grid item>
              <a
                href="https://www.facebook.com/bigballerleslie/"
                target="_blank"
              >
                <FacebookIcon color="primary" />
              </a>
            </Grid>
            <Grid item>
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
                  root: classes.dividerRoot,
                }}
                orientation="vertical"
                flexItem
              />
            </Grid>
          </Grid>
        </Drawer>
      </Box>
      <Box component="right-sidebar">
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
            spacing={3}
          >
            <Grid item>
              <a href="mailto:lliang9838@gmail.com">
                <Typography className={classes.rotate} color="primary">
                  lliang9838@gmail.com
                </Typography>
              </a>
            </Grid>
            <Grid item>
              <Divider
                classes={{
                  root: classes.dividerRoot,
                }}
                orientation="vertical"
                flexItem
              />
            </Grid>
          </Grid>
        </Drawer>
      </Box>
    </Box>
  );
};
