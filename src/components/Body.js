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
  dividerRoot: {
    height: "9rem",
    backgroundColor: `${darkPink}`,
  },
  rotate: {
    transform: "translateX(-50%) translateY(-50%) rotate(90deg)",
    position: "absolute",
    top: "68%",
  },
  // necessary for content to be below app bar
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
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
      </main>
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
