import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import Divider from "@material-ui/core/Divider";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import HotelIcon from "@material-ui/icons/Hotel";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const darkestPink = pink[800];
const darkerPink = pink[700];
const darkPink = pink[600];

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  divider: {
    height: ".2rem",
    backgroundColor: `${darkestPink}`,
  },
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.primary.main,
  },
  listItemIcon: {
    minWidth: "3rem",
  },
  listItemPadding: {
    paddingRight: 0,
  },
  listItemText: {
    margin: 0,
  },
}));

export const Experience = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        paddingBottom: "25rem",
      }}
      className={classes.content}
    >
      <div style={{ display: "flex" }}>
        <Typography
          style={{ fontFamily: "Noto Sans TC" }}
          color="secondary"
          variant="h3"
        >
          Work Experience
        </Typography>
        <Divider
          classes={{
            root: classes.divider,
          }}
          style={{
            marginLeft: "1.5rem",
            width: "29rem",
            alignSelf: "center",
          }}
        />
      </div>
      <div style={{ marginTop: "4rem" }}>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" color="secondary">
                June 2019 - Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector style={{ backgroundColor: darkPink }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" color="secondary">
                  Software Engineer at Northrop Grumman
                </Typography>
                <List
                  dense
                  style={{
                    width: "95%",
                    color: `${darkPink}`,
                  }}
                >
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Work with a variety 
                        of different frameworks, languages and technologies such as
                        React, Material UI, Angular, Express, MongoDB, Node, TypeScript, 
                        JavaScript, Bootstrap, C++, Linux, TCSH"
                      />
                    </div>
                  </ListItem>
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Write performant, efficient, readable and maintainable code to 
                        satisfy customers' needs"
                      />
                    </div>
                  </ListItem>
                </List>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" color="secondary">
                April 2019 - Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LocalLibraryIcon />
              </TimelineDot>
              <TimelineConnector style={{ backgroundColor: darkPink }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" color="secondary">
                  CS Tutor, Data Structures and Algorithms
                </Typography>
                <List
                  dense
                  style={{
                    width: "95%",
                    color: `${darkPink}`,
                  }}
                >
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Explain concepts such as recursion, inheritance, polymorphism,
                        hash tables, trees and runtime complexity in a succinct and comprehensible manner"
                      />
                    </div>
                  </ListItem>
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Teach students how to break down a complicated problem 
                        into smaller actionable tasks so that they can learn to build 
                        their codebase up incrementally"
                      />
                    </div>
                  </ListItem>
                </List>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" color="secondary">
                June 2018 - September 2018
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector style={{ backgroundColor: darkPink }} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" color="secondary">
                  Software Engineering Intern at Alcatera
                </Typography>
                <List
                  dense
                  style={{
                    width: "95%",
                    color: `${darkPink}`,
                  }}
                >
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Worked closely with hardware engineers and senior software engineers to meet
                        company deadlines to secure funding by completing tasks in a timely and efficient manner"
                      />
                    </div>
                  </ListItem>
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Architected and built an entire server in C++ to handle multiple incoming client connections. The connections
                        established uses the SSL protocol to ensure data is encrypted to provide privacy."
                      />
                    </div>
                  </ListItem>
                </List>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="h6" color="secondary">
                December 2015 - March 2018
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <HotelIcon />
              </TimelineDot>
              <Timeline />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" color="secondary">
                  Front Desk Clerk at Royal Pagoda Motel
                </Typography>
                <List
                  dense
                  style={{
                    width: "95%",
                    color: `${darkPink}`,
                  }}
                >
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Single-handedly managed check ins and check outs 
                        during my twelve hour shifts."
                      />
                    </div>
                  </ListItem>
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Coordinated with maids by speaking in Chinese to 
                        ensure the guests' needs are met instantaneously"
                      />
                    </div>
                  </ListItem>
                  <ListItem
                    classes={{
                      gutters: classes.listItemPadding,
                    }}
                  >
                    <div style={{ display: "flex" }}>
                      <ListItemIcon
                        classes={{
                          root: classes.listItemIcon,
                        }}
                      >
                        <ChevronRightRoundedIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ root: classes.listItemText }}
                        primary="Interacted with guests from all walks
                        of life in a friendly and cordial manner so that they
                        can feel safe and homely at our motel"
                      />
                    </div>
                  </ListItem>
                </List>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};
