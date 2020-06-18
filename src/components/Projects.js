import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";

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
      <div className={classes.root}>
        <div
          style={{
            backgroundColor: "yellow",
            height: "50rem",
            padding: "1rem",
            display: "flex",
          }}
        >
          <img
            className={classes.imgStyle}
            src="https://images.unsplash.com/photo-1583532452513-a02186582ccd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
          />
          <div>
            <Typography variant="h6" color="secondary">
              Blogging Web App
            </Typography>
          </div>
        </div>
        <div style={{ backgroundColor: "blue", height: "50rem" }}></div>
      </div>
    </div>
  );
};
