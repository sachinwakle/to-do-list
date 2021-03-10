import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TaskCard from "./TaskCard";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 15,
  },
}));

export default function TaskGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        spacing={3}
        alignItems="center"
      >
        <Grid item>
          <TaskCard />
        </Grid>
        <Grid item>
          <TaskCard />
        </Grid>
        <Grid item>
          <TaskCard />
        </Grid>
        <Grid item>
          <TaskCard />
        </Grid>
      </Grid>
    </div>
  );
}
