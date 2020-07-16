import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import pink from "@material-ui/core/colors/pink";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import blogging from "../img/blogging.png";
import portfolio from "../img/portfolio.png";
import restaurant from "../img/restaurant.png";

const darkPink = pink[600];
const darkerPink = pink[700];
const darkestPink = pink[800];

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(3),
  },
  divider: {
    height: ".2rem",
    backgroundColor: `${darkestPink}`,
  },
  root: {
    display: "flex",
    flexDirection: "column",
  },
  imgStyle: {
    width: "50%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    border: `.1rem solid ${darkPink}`,
  },
  robotoBold: {
    fontWeight: 700,
  },
}));

export const Projects = () => {
  const classes = useStyles();
  const smallScreen = useMediaQuery("(max-width: 37.5em)");
  return (
    <div
      id="projects"
      style={{
        paddingBottom: smallScreen ? "10rem" : "25rem",
        display: "flex",
        flexDirection: "column",
      }}
      className={classes.content}
    >
      <div style={{ display: "flex" }}>
        <Typography
          style={{ fontFamily: "Noto Sans TC" }}
          color="secondary"
          variant="h3"
        >
          Notable Projects
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
      {/* FIRST PROJECT, BLOGGING WEB APP */}
      <div
        className={classes.root}
        // for other projects, this marginTop does not need to be 4rem, can be 2rem
        style={{ marginTop: "4rem", height: "100%" }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: smallScreen ? "column" : "row",
          }}
        >
          <img
            alt="blogging web app"
            style={{ borderRadius: "1%", width: smallScreen ? "80%" : "50%" }}
            className={classes.imgStyle}
            src={blogging}
          />
          <div
            style={{
              marginLeft: smallScreen ? "0rem" : "2rem",
              marginTop: smallScreen ? "2rem" : "0rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: smallScreen ? "80%" : "50%",
            }}
          >
            <Typography
              variant="h4"
              color="secondary"
              style={{ fontWeight: 700 }}
            >
              Blogging Web App
            </Typography>
            <Typography
              style={{ marginTop: "1em" }}
              color="primary"
              variant="body1"
            >
              A blogging web app that allows users to log in and create, update,
              read and delete posts. Verified user's login credentials and
              established an authenticated session by setting a JWT as a cookie.
              Used Angular Router to create a smooth SPA by enabling navigation
              from one view to the next and rendering different components each
              time. (If you want to play around with the web app, email me for
              login crendentials)
            </Typography>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                width: "95%",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                Angular
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                MongoDB
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                Express
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                Node.js
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                JWT
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                Bootstrap
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://github.com/lliang9838/Blogging-Web-App-Frontend"
                  );
                }}
              >
                <GitHubIcon color="primary" />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("https://stark-atoll-95378.herokuapp.com/");
                }}
              >
                <LinkIcon style={{ fontSize: "3.3rem" }} color="primary" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      {/* SECOND PROJECT, PORTFOLIO WEBSITE */}
      <div
        className={classes.root}
        style={{ marginTop: "2rem", height: "100%" }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: smallScreen ? "column-reverse" : "row",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: smallScreen ? "80%" : "50%",
              marginLeft: smallScreen ? "0rem" : "2rem",
              marginTop: smallScreen ? "2rem" : "0rem",
            }}
          >
            <Typography
              variant="h4"
              color="secondary"
              style={{ fontWeight: 700 }}
            >
              My Portfolio Website
            </Typography>
            <Typography
              style={{ marginTop: "1rem" }}
              color="primary"
              variant="body1"
            >
              My own personal website coded from scratch. You're looking at it
              now! It's responsive, creative and informative. I picked the color
              scheme myself to make it look appealing. Applied concepts such as
              React Hooks, Material UI themes, Flexbox and media queries to
              create this masterpiece.
            </Typography>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                width: "80%",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                React
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                Material UI
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                Flexbox
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                HTML
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                CSS
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <IconButton
                onClick={() => {
                  window.open(
                    "https://github.com/lliang9838/Personal-Portfolio-Website"
                  );
                }}
              >
                <GitHubIcon color="primary" />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("https://leslieliang.dev");
                }}
              >
                <LinkIcon style={{ fontSize: "3.3rem" }} color="primary" />
              </IconButton>
            </div>
          </div>
          <img
            alt="portfolio website"
            style={{
              borderRadius: "1%",
              width: smallScreen ? "80%" : "50%",
              marginLeft: smallScreen ? "0rem" : "2rem",
            }}
            className={classes.imgStyle}
            src={portfolio}
          />
        </div>
      </div>
      {/* THIRD PROJECT, RESTAURANT WEB PAGE */}
      <div
        className={classes.root}
        style={{ marginTop: "2rem", height: "100%" }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            flexDirection: smallScreen ? "column" : "row",
          }}
        >
          <img
            alt="restaurant web page"
            style={{ borderRadius: "1%", width: smallScreen ? "80%" : "50%" }}
            className={classes.imgStyle}
            src={restaurant}
          />
          <div
            style={{
              marginLeft: smallScreen ? "0rem" : "2rem",
              marginTop: smallScreen ? "2rem" : "0rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              width: smallScreen ? "80%" : "50%",
            }}
          >
            <Typography
              variant="h4"
              color="secondary"
              style={{ fontWeight: 700 }}
            >
              Restaurant Website
            </Typography>
            <Typography
              style={{ marginTop: "1em" }}
              color="primary"
              variant="body1"
            >
              An interactive and dynamic restaurant web page created using
              Vanilla JavaScript, HTML and CSS. I listened to events using{" "}
              <span className={classes.robotoBold}>addEventListener</span> and
              used DOM Manipulations to dynamically update our web page when the
              user clicked on certain areas of the website.
            </Typography>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                width: "95%",
                justifyContent: "space-evenly",
              }}
            >
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                JavaScript
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                DOM Manipulations
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                HTML
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                CSS
              </Typography>
              <Typography
                style={{ color: `${darkerPink}` }}
                variant="subtitle1"
              >
                Flexbox
              </Typography>
            </div>
            <div style={{ display: "flex" }}>
              <IconButton
                onClick={() => {
                  window.open("https://github.com/lliang9838/Restaurant-Page");
                }}
              >
                <GitHubIcon color="primary" />
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("https://restaurant-dom.web.app/");
                }}
              >
                <LinkIcon style={{ fontSize: "3.3rem" }} color="primary" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
