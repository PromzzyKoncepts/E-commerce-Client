import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";

import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";

const Login = () => {
  const {
    actions: { signIn },
  } = useContext(userContext);
//   const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");

  // MUI FORM TEMPLATE
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };

    try {
      setIsLoading(true);
      const res = await signIn(body);
      if (res) {
        setIsLoading(false);
        setErrors("");
        navigate("/cart");
      }
    } catch (error) {
      setErrors(`${error.response.data.message}`);
      setIsLoading(false);
      console.log(error.response.data.message);
      
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
