import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // MUI FORM TEMPLATE
  const [showPassword, setShowPassword] = useState(false);
  const [showComfPassword, setShowComfPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email,
      username,
      password,
    };

    const baseUrl = "https://lmtechtestauth.onrender.com";

    if (password !== confirmPassword) {
      setPasswordError("passwords do not match");
      setIsLoading(false);
      return;
    }

    setPasswordError("");

    try {
      setIsLoading(true);
      const res = await axios.post(`${baseUrl}/register`, body);
      if (res.data.success === true) {
        setIsLoading(false);
        setErrors(res.data.message);
        navigate("/login");
      }
    } catch (error) {
      setErrors(`${error.response.data.message}`);
      setIsLoading(false);
      console.log(error.response.data.message);
    }
  };

  return (
    <form className="shadow-black" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-4xl text-amber-500">Create an Account</h1>
      {errors && <h3>{errors}</h3>}
      <TextField
        required
        id="outlined-basic"
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        variant="outlined"
      />
      <br />
      <TextField
        required
        id="outlined-basic"
        onChange={(e) => setUsername(e.target.value)}
        label="Username"
        variant="outlined"
      />
      <br />
      <FormControl sx={{ width: "100%" }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <br />
      <FormControl sx={{ width: "100%" }} variant="outlined" required>
        <InputLabel htmlFor="outlined-adornment-password">
          confirm password
        </InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showComfPassword ? "text" : "password"}
          onChange={(e) => setConfirmPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowComfPassword((show) => !show)}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showComfPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Confirm Password"
        />
      </FormControl>
      {/* <input
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder=" confirm password"
      /> */}
      {passwordError && <small>{passwordError}</small>}
      <button>{isLoading ? "Loading" : "Submit"}</button>
      <p className="login-link py-2">
        Already have an account?{" "}
        <Link to="/login" className="text-amber-500">
          Sign in
        </Link>
      </p>
    </form>
  );
};

export default Register;
