import React, { useContext } from "react";
import {  Navigate } from "react-router-dom";
import userContext from "../context/userContext";

const Protected = ({ children }) => {
  const { authUser } = useContext(userContext);
  
  return (
    authUser ? children   : <Navigate to="/login" />
  );
};

export default Protected;