import React, { useState, useEffect } from "react";
import axios from "axios";
// import { AccountCircle } from "@mui/icons-material";
import { InputAdornment, MenuItem, TextField } from "@mui/material";
// import { Button } from "@mui/base";
import bankData from "./BankData";

function AdminAuthForm() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    bank_account: "",
    bank_code: "",
    account_number: "",
  });

  const [banks, setBanks] = useState(bankData);

  const [accountNumber, setAccountNumber] = useState("");
  const [customerName, setCustomerName] = useState("");

  //   useEffect(() => {
  // Make API call if needed
  // axios.get('https://api.flutterwave.com/v3/banks/NG', {
  //   headers: {
  //     Authorization: 'FLWSECK-2f1313acdcd54313f5a1a90162852cff-18b5378820fvt-X'
  //   }
  // })
  //   .then((response) => {
  //     setBanks(response.data.data);
  //   })
  //   .catch((error) => {
  //     console.error('Error fetching banks: ', error);
  //   });
  //   }, []);

  useEffect(() => {

    if (accountNumber.length === 10) {
      console.log(typeof(formData.bank_code))
      axios
        .post(
          "https://api.flutterwave.com/v3/accounts/resolve",
          {
            account_number: accountNumber,
            account_bank: formData.bank_code,
          },
          {
            headers: {
              Authorization:
                "FLWSECK-2f1313acdcd54313f5a1a90162852cff-18b5378820fvt-X",
              "Content-Type": "application/json", // Add Content-Type header
            }
            
          }
        )
        .then((response) => {
          console.log(response);
          setCustomerName(response.data.data.account_holder_name);
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    }
  }, [accountNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if the selected field is the bank dropdown, if yes, update bank_code
    if (name === "bank_code") {
      const selectedBank = banks.find((bank) => bank.code === value);
      setFormData({
        ...formData,
        bank_code: selectedBank ? selectedBank.code : "",
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <form className="max-w-md mx-auto p-4 space-y-4">
      <h1>Sign Up</h1>
      <small className="text-center">Sign up as vendor, brand or business</small>
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
          <MenuItem key={bank.id} value={bank.code}>
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

      <button
        variant="contained"
        color="primary"
        type="submit"
        className="w-full bg-amber-400 "
      >
        Submit
      </button>
    </form>
  );
}

export default AdminAuthForm;
