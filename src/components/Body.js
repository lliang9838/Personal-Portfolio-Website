import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import List from "@material-ui/core/List";

const useStyles = makeStyles((theme) => ({
  drawer: {
    flexShrink: 0,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export const Body = () => {
  const classes = useStyles();
  return (
    <Box component="body">
      <Typography> hey</Typography>
      <Box component="left-sideBar">
        {/* <AppBar position="fixed" color="primary" className={classes.appBar}>
          <Toolbar></Toolbar>
        </AppBar> */}

        <Drawer className={classes.drawer} variant="permanent">
          <Toolbar />
          <div className={classes.drawerContainer}>
            <InboxIcon />
          </div>
        </Drawer>
        <Drawer className={classes.drawer} variant="permanent" anchor="right">
          <Toolbar />
          <div className={classes.drawerContainer}>
            <MailIcon />
          </div>
        </Drawer>
      </Box>
    </Box>
  );
};
