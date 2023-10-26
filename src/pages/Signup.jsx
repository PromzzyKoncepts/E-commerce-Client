import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Login from "./Login";

function SignUp() {
    const baseUrl = "htttp://lmtechtestauth.onrender.com";
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleUsername = (e) => {
        setUsername(e.target.value);
    };
    const handleFirstname = (e) => {
        setFirstname(e.target.value);
    };
    const handleLastname = (e) => {
        setLastname(e.target.value);
    };
    const handlePhonenumber = (e) => {
        setPhonenumber(e.target.value);
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //  try {
        //       if (password === confirmPassword) {
        //       const res = axios.post(`${baseUrl}/register`);
        //           console.log(res);
        //           if (res.data.success === true) {
        //               toast.success("successfully signed up", {
        //                 autoClose: 3000,
        //               });
        //               setTimeout(() => {
        //                   navigate("/Login");
        //               }, 3000);
        //           }
        //       }
        //   } catch (err) {
        //   console.log(err);
        //  }
       
}
return (
    <>
        <div className="container">
            <div className="top">
                <h3>SIGN UP FORM</h3>
            </div>
            <form onSubmit={handleSubmit}className='flex flex-col w-full items-center' >
                <input
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={handleEmail}
                    className="text-[16px] w-[200px] my-[10px] border border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
                />

                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={handleUsername}
                    className="text-[16px] w-[200px] border my-[10px] border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
        
                />
                <input
                    type="text"
                    placeholder="firstname"
                    value={firstname}
                    onChange={handleFirstname}
                    className="text-[16px] w-[200px] border my-[10px] border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
        
                />
                <input
                    type="text"
                    placeholder="lastname"
                    value={lastname}
                    onChange={handleLastname}
                    className="text-[16px] w-[200px] border my-[10px] border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
        
                />
<input
                    type="tel"
                    placeholder="phone number"
                    value={phonenumber}
                    onChange={handlePhonenumber}
                    className="text-[16px] w-[200px] my-[10px] border border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
        
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={handlePassword}
                    className="text-[16px] w-[200px] my-[10px] border border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
        
                />
                

                <input
                    type="password"
                    placeholder="confirm password"
                    value={confirmPassword}
                    onChange={handleConfirmPassword}
                    className="text-[16px]  w-[200px]  my-[10px]border border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
                />

                <button type="submit"className="text-[16px] bg-blue-500 my-[10px] w-[200px] border border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 border-2"
          > submit</button>
          <Login/>
            </form>
        </div>
    </>
);
};
export default SignUp;
