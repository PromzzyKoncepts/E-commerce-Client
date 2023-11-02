import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showComfPassword, setShowComfPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

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
      setPasswordError("Passwords do not match");
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
    <div className="flex items-center justify-center mt-3">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl text-center text-amber-500 mb-4">Create an Account</h1>
        {errors && <p className="text-red-500 mb-2">{errors}</p>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>
          <div className="mb-4">
            <div className="relative rounded">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border rounded"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-2"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-6 w-6 text-gray-400" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <div className="relative rounded">
              <input
                type={showComfPassword ? "text" : "password"}
                className="w-full px-3 py-2 pr-10 border rounded"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center pr-2"
                onClick={() => setShowComfPassword(!showComfPassword)}
              >
                {showComfPassword ? (
                  <EyeOffIcon className="h-6 w-6 text-gray-400" />
                ) : (
                  <EyeIcon className="h-6 w-6 text-gray-400" />
                )}
              </button>
            </div>
          </div>
          {passwordError && <p className="text-red-500 mb-2">{passwordError}</p>}
          <button
            type="submit"
            className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 focus:outline-none"
          >
            {isLoading ? "Loading" : "Submit"}
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-amber-500 hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
