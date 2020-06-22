import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";
import Divider from "@material-ui/core/Divider";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const darkerPink = pink[700];
const darkestPink = pink[800];

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(3),
  },
  divider: {
    height: ".2rem",
    backgroundColor: `${darkestPink}`,
  },
  robotoBold: {
    fontWeight: 700,
  },
}));

export const Contact = () => {
  const classes = useStyles();
  const smallScreen = useMediaQuery("(max-width: 37.5em)");

  return (
    <div
      id="contact"
      style={{
        paddingBottom: smallScreen ? "10rem" : "25rem",
        alignItems: smallScreen ? "flex-start" : "center",
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
            Reach Out
          </Typography>
          <Divider
            classes={{
              root: classes.divider,
            }}
            style={{
              marginLeft: "1.5rem",
              width: "23rem",
              alignSelf: "center",
            }}
          />
        </div>
      </div>
      <Typography
        color="primary"
        variant="body1"
        style={{ width: "70%", marginTop: "3.5rem" }}
      >
        If you reached all the way here, I just wanted to thank you for taking
        your time to peruse through my website. It wasn't easy coding it up but
        I got to learn a lot of cool tricks and it feels so rewarding. I love
        expanding my network and meeting new people so you can feel free to
        contact me at any time.{" "}
        <span className={classes.robotoBold}>
          I am more than happy to share my experiences as a first-generation
          student with a low gpa who was able to graduate from UCLA in four
          years and land a full-time job at one of the nation's leading defense
          companies.
        </span>
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
          Message Me
        </Button>
      </a>
    </div>
  );
};
