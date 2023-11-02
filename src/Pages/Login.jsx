import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../context/userContext";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; 
// for showpassword to show please run "npm i @heroicons/react@v1" on your terminal

const Login = () => {
  const {
    actions: { signIn },
  } = useContext(userContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

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
    <div className="flex items-center justify-center mt-8">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-3xl text-center text-amber-500 font-semibold mb-6">
          Sign In
        </h1>
        {errors && <p className="text-red-500 mb-4">{errors}</p>}
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="mb-4">
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>

          <div className="mb-4 relative rounded"> 
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
              onClick={() => setShowPassword(!showPassword)} 
            >
              {showPassword ? (
                <EyeOffIcon className="h-6 w-6 text-gray-400" /> // Show EyeOffIcon when password is visible
              ) : (
                <EyeIcon className="h-6 w-6 text-gray-400" /> // Show EyeIcon when password is hidden
              )}
            </button>
          </div>

          <button
            className="w-full bg-amber-500 text-white py-2 rounded hover:bg-amber-600 focus:outline-none"
            type="submit"
          >
            {isLoading ? "Loading" : "Sign In"}
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          New here?{" "}
          <Link to="/register" className="text-amber-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
