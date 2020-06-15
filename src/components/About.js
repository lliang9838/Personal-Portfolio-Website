import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import pink from "@material-ui/core/colors/pink";
import Avatar from "../img/avatar.jpg";
import "./About.css";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const myPink = pink[300];
const darkPink = pink[600];
const darkestPink = pink[800];

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  divider: {
    height: ".2rem",
    backgroundColor: `${darkestPink}`,
  },
  avatar: {
    boxSizing: "content-box",
    width: "30rem", // width used to be 30
    height: "30rem",
    opacity: "0.7",
  },
  avatarBackground: {
    alignSelf: "center",
    // width: "30rem", // width used to be 30
    // height: "30rem",
    borderRadius: "50%",
    backgroundColor: `${myPink}`,
    overflow: "hidden",
  },
  robotoBold: {
    fontWeight: 700,
  },
  listItemIcon: {
    minWidth: "3rem",
  },
  listItemPadding: {
    paddingRight: "0",
  },
}));

export const About = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        paddingBottom: "25rem",
        display: "flex",
        justifyContent: "space-between",
        width: "95rem",
      }}
      className={classes.content}
    >
      <div>
        <div style={{ display: "flex" }}>
          <Typography
            style={{ fontFamily: "Noto Sans TC" }}
            color="secondary"
            variant="h3"
          >
            About Me
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
        <Typography
          color="primary"
          variant="body1"
          style={{ width: "50rem", marginTop: "3.5rem" }}
        >
          Hey there! Thanks for visiting my website. My name is Leslie and I am
          a software engineer in Los Angeles.
          <br />
          <br />
          My passion for developing web applications began during my undergrad.
          After building applications for class assignments using both the
          traditional tech stack (Linux, Apache Tomcat, MySQL, PHP) and the
          modern tech stack (Angular, Express, Node, MongoDB), I found myself
          enamored with the web ecosystem. On one side, I could create aesthetic
          features to attract users to the website (front-end) and on the other,
          I could write efficient algorithms to process and manipulate and our
          data (backend-end).
          <br />
          <br />I graduated in June 2019 with a Bachelor's in Computer Science
          from <span className={classes.robotoBold}>UCLA</span> and I have been
          working at{" "}
          <span className={classes.robotoBold}>Northrop Grumman</span> ever
          since. I am humbled and blessed to be able to work for such a
          fantastic organization where we tackle meaningful and appealing
          problems related to national security. I feel like I am doing
          impactful work.
          <br />
          <br />
          Here are a languages and technologies that I am fairly familiar with:
        </Typography>
        <div style={{ width: "51rem" }}>
          <List
            dense
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "70%",
              color: `${darkPink}`,
            }}
          >
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="React" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Angular" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Node.js" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="HTML & (S)CSS" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="JavaScript" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="TypeScript" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="Express" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="MongoDB" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="MySQL" />
            </ListItem>
            <ListItem
              classes={{
                gutters: classes.listItemPadding,
              }}
              style={{ flex: "0 0 50%" }}
            >
              <ListItemIcon
                classes={{
                  root: classes.listItemIcon,
                }}
              >
                <ChevronRightRoundedIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary="C++" />
            </ListItem>
          </List>
        </div>
      </div>
      <div className={classes.avatarBackground}>
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/lliang9838"
          target="_blank"
        >
          <img className={classes.avatar} src={Avatar} alt="avatar" />
        </a>
      </div>
    </div>
  );
};
