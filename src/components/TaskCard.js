import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch } from "react-redux";
import { deleteTask, completeTask } from "../redux";
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));

export default function TaskCard({ task }) {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    console.log("CardTask: ", task);
  }, [task]);

  const deleteHandler = (key) => {
    dispatch(deleteTask(key));
  };

  const completeHandler = (key) => {
    dispatch(completeTask(key));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={task.completed ? <strike>{task.title}</strike> : task.title}
        subheader={task.updatedOn}
      />

      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          style={task.completed ? { textDecorationLine: "line-through" } : {}}
        >
          {task.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title={task.completed ? "Restore Task" : "Complete Task"} placement="top">
          <IconButton
            aria-label="complete"
            onClick={() => completeHandler(task.id)}
          >
            {task.completed ? <RestoreIcon /> : <CheckCircleIcon />}
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete Task" placement="top">
          <IconButton
            aria-label="delete"
            onClick={() => deleteHandler(task.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
