// import React from "react";
// import { useForm } from "react-hook-form";
// import { TextField, Button } from "@material-ui/core";
// const Example = () => {
//   const { handleSubmit, register, errors } = useForm();
//   const onSubmit = (values) => {};

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <TextField
//         label="タイトル"
//         name="title"
//         fullWidth
//         margin="normal"
//         inputRef={register({
//           required: "必須項目です",
//           maxLength: { value: 10, message: "文字数超過です" },
//           pattern: {
//             value: /[^0-9]$/,
//             message: "文字を入力してください",
//           },
//         })}
//         error={Boolean(errors.title)}
//         helperText={errors.title && errors.title.message}
//       />

//       <Button type="submit">Submit</Button>
//     </form>
//   );
// };

// export default Example;
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function () {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <div>
          <h1>hi</h1>
        </div>
      </Modal>
    </>
  );
}
