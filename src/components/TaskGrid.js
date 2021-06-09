import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TaskCard from "./TaskCard";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    padding: 15,
  },
}));

export default function TaskGrid() {
  const tasks = useSelector((state) => state.task);
  const classes = useStyles();
  useEffect(() => {
    console.log("Update Tasks: ", tasks);
  }, [tasks]);

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        spacing={3}
        alignItems="center"
      >
        {tasks &&
          tasks.data &&
          tasks.data.map((task) => {
            return (
              <Grid item>
                <TaskCard task={task} />
              </Grid>
            );
          })}
        {/* <Grid item>
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
        </Grid> */}
      </Grid>
    </div>
  );
}
