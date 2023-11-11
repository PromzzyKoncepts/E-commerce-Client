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
import EmailVerf from "./EmailVerf";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [userNameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // MUI FORM TEMPLATE
  const [showPassword, setShowPassword] = useState(false);
  const [showComfPassword, setShowComfPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    localStorage.setItem("email", JSON.stringify(newEmail));
  };

  const navigate = useNavigate();
  console.log(password.length);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      email,
      username,
      password,
      first_name,
      last_name,
      phone_number,
    };

    function containsSpace(inputString) {
      for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === " ") {
          return true; // Found a space
        }
      }
      return false; // No space found
    }

    const baseUrl = "https://aphia-dev.onrender.com/api";

    setPasswordError("");

    if (containsSpace(username) === true) {
      setUsernameError("username must not contain spaces");
      if (password.length < 8) {
        setIsLoading(false);
        setPasswordError("password should be atleast 8 characters");
        if (password !== confirmPassword) {
          setIsLoading(false);
          setPasswordError("passwords do not match");
        }
      }
    } else {
      try {
        setIsLoading(true);
        const res = await axios.post(`${baseUrl}/users/register`, body);
        console.log(res, "hgjfjfyxf");
        if (res.data.success === true) {
          setIsLoading(false);
          setErrors(res.data.message);
          navigate("/verify");
        }
      } catch (error) {
        // setErrors(`${error.response.data.message}`);
        setIsLoading(false);
        // console.log(error.response.data.message);
      }
    }
  };

  return (
    <form data-aos="fade-up" className="shadow-black" onSubmit={(e) => handleSubmit(e)}>
      <h1  className="text-4xl text-amber-500">Create an Account</h1>
      {errors && <h3>{errors}</h3>}
      <TextField
        required
        id="outlined-basic"
        onChange={(e) => setFirstName(e.target.value)}
        label="Firstname"
        variant="outlined"
      />
      <br />
      <TextField
        required
        id="outlined-basic"
        onChange={(e) => setLastName(e.target.value)}
        label="Lastname"
        variant="outlined"
      />
      <br />
      <TextField
        required
        id="outlined-basic"
        onChange={(e) => setPhoneNumber(e.target.value)}
        label="Phonenumber"
        variant="outlined"
      />
      <br />
      <TextField
        required
        id="outlined-basic"
        onChange={handleEmailChange}
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
      {userNameError && <small className="text-red-500">{userNameError}</small>}
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
      {passwordError && <small className="text-red-500">{passwordError}</small>}

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
