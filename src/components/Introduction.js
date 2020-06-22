import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const darkerPink = pink[700];

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  h2Color: {
    color: `${darkerPink}`,
  },
}));

export const Introduction = () => {
  const classes = useStyles();
  const smallScreen = useMediaQuery("(max-width: 37.5em)");

  return (
    <div
      style={{
        paddingTop: "8.5rem",
        paddingBottom: smallScreen ? "10rem" : "25rem",
      }}
      className={classes.content}
    >
      <div className={classes.toolbar} style={{ minHeight: "2rem" }} />
      <Typography color="primary" variant="overline" display="block">
        Hi, my name is
      </Typography>
      <Typography
        style={{ fontFamily: "Noto Sans TC" }}
        color="secondary"
        variant="h1"
        gutterBottom
      >
        Leslie Liang
      </Typography>
      <Typography
        style={{ fontFamily: "Noto Sans TC" }}
        className={classes.h2Color}
        variant="h2"
        gutterBottom
      >
        I love all things web.
      </Typography>
      <Typography
        color="primary"
        variant="body1"
        style={{ width: "50rem" }}
        gutterBottom
      >
        I am a software engineer based in Los Angeles, CA with a passion for
        building intuitive, beautiful and accessible web apps. You can contact
        me regarding any front-end/fullstack job opportunities.
      </Typography>
      <a
        style={{ textDecoration: "none" }}
        href="https://www.linkedin.com/in/leslieliang9838/"
        target="_blank"
      >
        <Button
          style={{ marginTop: "5rem" }}
          size="large"
          variant="outlined"
          color="primary"
        >
          Let's Connect
        </Button>
      </a>
    </div>
  );
};
