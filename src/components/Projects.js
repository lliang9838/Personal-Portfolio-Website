import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import pink from "@material-ui/core/colors/pink";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Divider from "@material-ui/core/Divider";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

const darkPink = pink[600];
const darkerPink = pink[700];
const darkestPink = pink[800];

const useStyles = makeStyles((theme) => ({
  divider: {
    height: ".2rem",
    backgroundColor: `${darkestPink}`,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  gridList: {
    marginTop: "3rem !important",
    width: "95%",
    height: "60rem",
  },
  smoothCorners: {
    borderRadius: ".5rem",
  },
}));

export const Projects = () => {
  const classes = useStyles();
  return (
    <div style={{ paddingBottom: "25rem" }} className={classes.root}>
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
      <GridList cellHeight="280" className={classes.gridList} cols={3}>
        <GridListTile
          classes={{ tile: classes.smoothCorners }}
          key="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
        >
          {/* <a href="https://github.com/lliang9838" target="_blank"> */}
          <img
            src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
            alt="temp"
          />
          {/* </a> */}
          <GridListTileBar
            title="Blogging Web App"
            subtitle="Angular, MongoDB, Express, Node"
          />
        </GridListTile>
        <GridListTile
          classes={{ tile: classes.smoothCorners }}
          key="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
        >
          <img
            src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
            alt="temp"
          />
          <GridListTileBar
            title="Blogging Web App"
            subtitle="Angular, MongoDB, Express, Node"
          />
        </GridListTile>
        <GridListTile
          classes={{ tile: classes.smoothCorners }}
          key="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
        >
          <img
            src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
            alt="temp"
          />
          <GridListTileBar
            title="Blogging Web App"
            subtitle="Angular, MongoDB, Express, Node"
          />
        </GridListTile>
        <GridListTile
          classes={{ tile: classes.smoothCorners }}
          key="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
        >
          <img
            src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
            alt="temp"
          />
          <GridListTileBar
            title="Blogging Web App"
            subtitle="Angular, MongoDB, Express, Node"
          />
        </GridListTile>
        <GridListTile
          classes={{ tile: classes.smoothCorners }}
          key="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
        >
          <img
            src="https://images.unsplash.com/photo-1583585635793-0e1894c169bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=913&q=80"
            alt="temp"
          />
          <GridListTileBar
            title="Blogging Web App"
            subtitle="Angular, MongoDB, Express, Node"
          />
        </GridListTile>
      </GridList>
    </div>
  );
};
