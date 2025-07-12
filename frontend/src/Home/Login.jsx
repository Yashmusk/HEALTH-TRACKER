import * as React from "react";
import { Box, TextField } from "@mui/material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// Slide-down animation for dialog
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export default function Login(props) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  // Handles login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    props.onClose(); // ✅ closes the modal properly
  };

  // Handles redirect to register
  const handleRegisterClick = () => {
    props.onClose(); // ✅ closes the modal first
    navigate("/register"); // ✅ navigates to /register route
  };

  return (
    <Dialog
      open={true}
      TransitionComponent={Transition}
      keepMounted
      onClose={props.onClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>{"Login Required"}</DialogTitle>
      <DialogContent>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            mt: 1,
            minWidth: 300,
          }}
        >
          <TextField
            required
            label="Email"
            type="email"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            required
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <DialogActions sx={{ justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleRegisterClick}
            >
              New Here? Register first!
            </Button>

            <Button type="submit" variant="contained" color="primary">
              Login
            </Button>
          </DialogActions>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
