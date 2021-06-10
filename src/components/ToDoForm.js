import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Button } from "@material-ui/core";
import { saveTask } from "../redux";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    width: "100%",
  },
  buttonGrp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: "2em",
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function ToDoForm({ setTodoform, todoform }) {
  const [taskData, setTaskData] = useState(initialTask);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleTaskFields = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
      id: Date.now(),
      updatedOn: new Date().toLocaleString(),
    });
  };

  const handleOnSave = (e) => {
    e.preventDefault();
    setTodoform(false);
    dispatch(saveTask(taskData));
  };

  return (
    <div>
      <Dialog
        onClose={() => setTodoform(false)}
        aria-labelledby="customized-dialog-title"
        open={todoform}
        scroll="body"
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => setTodoform(false)}
        >
          Task
        </DialogTitle>
        <DialogContent dividers>
          <form className={classes.root} onSubmit={handleOnSave}>
            <TextField
              id="title"
              label="Title"
              fullWidth
              name="title"
              onChange={handleTaskFields}
            />

            <TextField
              id="contents"
              label="Write here..."
              multiline
              rows={3}
              fullWidth
              name="description"
              onChange={handleTaskFields}
            />
            <Box className={classes.buttonGrp}>
              <Button variant="outlined" color="secondary" type="submit">
                save
              </Button>
              <Button variant="outlined" color="secondary" type="reset">
                reset
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const initialTask = {
  id: undefined,
  title: "",
  description: "",
  updatedOn: "",
};
