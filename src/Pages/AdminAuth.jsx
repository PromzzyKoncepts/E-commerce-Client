import React, { useState, useEffect } from "react";
import axios from "axios";
// import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
// import { Button } from "@mui/base";
import bankData from "./BankData";
import { useNavigate } from "react-router-dom";
import RedirectComponent from "../HOC/Redirection";

function AdminAuthForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    business_name:"",
    bank_account: "",
    bank_code: "",
    account_number: "",
  });

  const [banks, setBanks] = useState(bankData);

  const [accountNumber, setAccountNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const [userNameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    if (accountNumber.length === 10) {
      axios
        .post("https://aphia-dev.onrender.com/api/users/verify_bank", {
          account_number: accountNumber,
          account_bank: formData.bank_code,
        })
        .then((response) => {
          // console.log(response);
          setCustomerName(response.data.message);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    }
  }, [accountNumber]);

  const handleChange = (e) => {
    const { name, id, value } = e.target;
    // console.log(name);
    // Check if the selected field is the bank dropdown, if yes, update bank_code
    if (name === "bank_code") {
      const selectedBank = banks.find((bank) => bank.code === value);
      // console.log(id)
      console.log(selectedBank.name)
      setFormData({
        ...formData,
        bank_code: selectedBank ? selectedBank.code : "",
        bank_account: selectedBank ? selectedBank.name : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(customerName, "dskjh");
    const baseUrl = "https://aphia-dev.onrender.com/api";
    
    const body = {
      email:formData.email,
      username: formData.username,
      password:formData.password,
      first_name:formData.first_name,
      last_name:formData.last_name,
      phone_number:formData.phone_number,
      business_name:formData.business_name,
      account_number: accountNumber,
      bank: formData.bank_account,
      bank_code: formData.bank_code,
      account_name: customerName.account_name,
    };
    console.log(body);
    function containsSpace(inputString) {
      for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === " ") {
          return true; // Found a space
        }
      }
      return false; // No space found
    }


    // setPasswordError("");

    // if (containsSpace(formData.username) === true) {
    //   setUsernameError("username must not contain spaces");
    //   if (formData.password.length < 8) {
    //     setIsLoading(false);
    //     setPasswordError("password should be atleast 8 characters");
    //   }
    // } else {
      try {
        setIsLoading(true);
        const res = await axios.post(`${baseUrl}/users/sell`, body);
        console.log(res, "hgjfjfyxf");
        if (res.data.success === true) {
          setIsLoading(false);
          setErrors(res.data.message);
          RedirectComponent()
        }
      } catch (error) {
        // setErrors('error:', error);
        setIsLoading(false);
        console.error('error:', error);
      }
    // }
  };

  return (
    <form
      className="max-w-md mx-auto p-12 space-y-4 shadow-lg "
      onSubmit={(e) => handleSubmit(e)}
    >
      <h1>Create an Account</h1>
      <small className="text-center ">
        Sign up as vendor, brand or business
      </small>
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        fullWidth
        className="w-full"
      />
      <TextField
        label="Username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        fullWidth
        className="w-full"
      />
      <TextField
        label="Password"
        name="password"
        value={formData.password}
        type="password"
        onChange={handleChange}
        fullWidth
        className="w-full"
      />
      <TextField
        label="First Name"
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        fullWidth
        className="w-full"
      />
      <TextField
        label="Last Name"
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        fullWidth
        className="w-full"
      />
      <TextField
        label="Phone Number"
        name="phone_number"
        value={formData.phone_number}
        onChange={handleChange}
        fullWidth
        className="w-full"
      />
    <TextField
    label="business name"
    name="business_name"
    value={formData.business_name}
    onChange= {handleChange}
    fullWidth
    className="w-full"
    />

      <TextField
        select
        label="Bank Name"
        name="bank_code"
        value={formData.bank_code}
        onChange={handleChange}
        fullWidth
        className="w-full"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              {/* <AccountCircle /> */}
            </InputAdornment>
          ),
        }}
      >
        {/* // this is the dropdown menu for listing all banks, kindly target the bank code of the bank that is selected */}
        {banks.map((bank) => (
          <MenuItem key={bank.id} id={bank.name} value={bank.code}>
            {bank.name}
          </MenuItem>
        ))}
      </TextField>

      <TextField
        label="Account Number"
        name="Phone_Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        fullWidth
        className="w-full"
      />
      {customerName && (
        <small className="font-bold text-slate-900">
          {customerName.account_name}
        </small>
      )}

      <button
        variant="contained"
        color="primary"
        type="submit"
        className="w-full bg-amber-400 border-r-amber-200 p-2 "
      >
        Submit
      </button>

        
  <small className="text-bold p-3 m-2">if you are already a vendor</small>
  <small>
    <a href="http://aphia-vendor.vercel.app">click here</a>
  </small>
</form>


  
  );
}





export default AdminAuthForm;
