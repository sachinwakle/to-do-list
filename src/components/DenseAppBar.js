import React, { createRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import { requestDarkTheme, requestLightTheme, deleteAllTasks, completeAllTasks } from "../redux";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function DenseAppBar({ setTodoform, todoform }) {
  const barref = createRef();
  const classes = useStyles();

  const [state, setState] = useState(false);
  const appTheme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem
          button
          key={"Complete Tasks"}
          onClick={() => dispatch(completeAllTasks())}
        >
          <ListItemIcon>
            <ListAltIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText primary={"Complete"} secondary="mark all tasks complete" />
        </ListItem>

        <ListItem
          button
          key={"Delete Tasks"}
          onClick={() => dispatch(deleteAllTasks())}
        >
          <ListItemIcon>
            <DeleteForeverIcon fontSize="large" />
          </ListItemIcon>
          <ListItemText
            primary={"Delete"}
            secondary="delete all tasks"
          />
        </ListItem>
      </List>
    </div>
  );

  const handleThemeChange = () => {
    appTheme.isOn
      ? dispatch(requestDarkTheme())
      : dispatch(requestLightTheme());
  };

  return (
    <div className={classes.root} ref={barref}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.title}>
            To-Do List
          </Typography>
          <Fab
            color="secondary"
            className={classes.menuButton}
            aria-label="themeChange"
            size="small"
            onClick={handleThemeChange}
          >
            {appTheme.isOn ? <Brightness4Icon /> : <Brightness7Icon />}
          </Fab>
          <Fab
            color="secondary"
            aria-label="add"
            size="small"
            onClick={() => setTodoform(true)}
          >
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Drawer anchor="left" open={state} onClose={toggleDrawer(false)}>
        {list("left")}
      </Drawer>
    </div>
  );
}
