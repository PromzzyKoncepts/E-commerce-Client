import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { jwtDecode } from "jwt-decode";


import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

const Login = () => {
  const {
    actions: { setAuthUser },
  } = useContext(userContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const res = await axios.post(
        "https://aphia-dev.onrender.com/api/users/login",
        {
          username,
          password,
        }
      );

      // console.log(res.data.message);
      if (res.data.success === true) {
        const decodedToken = jwtDecode(res.data.message);
        localStorage.setItem("authToken", res.data.message);
        setAuthUser(decodedToken)
        setIsLoading(false);
        setErrors("");
        navigate("/cart");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      setErrors("");
      setIsLoading(false);
      console.log(error);
    }
  };


  return (
    <form
      className="mt-[7rem]"
      data-aos="fade-up"
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1 className="text-4xl text-amber-500">Sign In </h1>
      {errors && <h3>{errors}</h3>}
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
          required
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
      <button>{isLoading ? "Loading" : "Submit"}</button>

      <p className="login-link py-2">
        New here?{" "}
        <Link to="/register" className="text-amber-500">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default Login;
