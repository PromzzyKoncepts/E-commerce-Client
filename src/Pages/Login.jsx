import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import  jwtDecode from "jwt-decode";
import "../stylesheets/Auth.css"


import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
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

      if (res.data.success === true) {
        const decodedToken = jwtDecode(res.data.message);
        const token = res.data.message
        localStorage.setItem("authToken", token);
        setAuthUser(decodedToken);
        setIsLoading(false);
        setErrors("");
        navigate("/cart");
      } else {
        throw new Error("Authentication failed");
      }
    } catch (error) {
      setErrors(``);
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center pt-5">
    <form className="max-w-md w-full p-4 px-5 bg-white mb-4 rounded shadow-lg" data-aos="fade-up" onSubmit={(e) => handleSubmit(e)}>
      <h1 className="text-3xl text-amber-500 mb-3 text-center pb-4">Sign In </h1>
      {errors && <p>{errors}</p>}
      <TextField
        required
        className="w-full mb-4 text-gray-700 rounded"
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
          label="Password"
        />
      </FormControl>
      <button className="p-2  mt-4 w-full text-white bg-amber-500  text-lg from-neutral-900 tracking-wider hover:bg-amber-400 hover:text-white" >{isLoading ? "Loading" : "Submit"}</button>

      <p className="text-center py-2">
        New here?{" "}
        <Link to="/register" className="text-amber-500">
          Sign Up
        </Link>
      </p>
    </form>
    </div>
  );
};

export default Login;