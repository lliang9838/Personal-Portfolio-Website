import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import pink from "@material-ui/core/colors/pink";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";

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
  },
}));

export const Projects = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingBottom: "25rem" }} className={classes.content}>
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
      <div className={classes.root} style={{ marginTop: "4rem" }}>
        <div
          style={{
            height: "35rem",
            display: "flex",
          }}
        >
          <img
            style={{ borderRadius: "1%" }}
            className={classes.imgStyle}
            src="https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <div
            style={{
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
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
                  console.log("github");
                }}
              >
                <GitHubIcon color="primary" />
              </IconButton>
              <IconButton
                onClick={() => {
                  console.log("link");
                }}
              >
                <LinkIcon style={{ fontSize: "3.3rem" }} color="primary" />
              </IconButton>
            </div>
          </div>
        </div>
        {/* SECOND PROJECT, PORTFOLIO WEBSITE */}
        <div className={classes.root} style={{ marginTop: "2rem" }}>
          <div
            style={{
              height: "35rem",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
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
                now! It's responsive, creative and informative. I picked the
                color scheme myself to make it look appealing. It also has a
                theme toggler that switches between light and dark mode.
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
                    console.log("github");
                  }}
                >
                  <GitHubIcon color="primary" />
                </IconButton>
                <IconButton
                  onClick={() => {
                    console.log("link");
                  }}
                >
                  <LinkIcon style={{ fontSize: "3.3rem" }} color="primary" />
                </IconButton>
              </div>
            </div>
            <img
              style={{ marginLeft: "2rem", borderRadius: "1%" }}
              className={classes.imgStyle}
              src="https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
