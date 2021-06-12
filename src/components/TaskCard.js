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
import { deleteTask } from "../redux";

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

  return (
    <Card className={classes.root}>
      <CardHeader title={task.title} subheader={task.updatedOn} />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {task.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title="Complete Task" placement="top">
          <IconButton aria-label="complete">
            <CheckCircleIcon />
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
