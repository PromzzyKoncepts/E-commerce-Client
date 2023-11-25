import React, { useContext, useEffect } from "react";
import userContext from "../context/userContext";
import { NavLink, Navigate } from "react-router-dom";

const LogOutButton = () => {
   const {actions: { signOut }} = useContext(userContext);
    signOut()
//    useEffect(() => signOut(), [signOut]);

   return <Navigate to="/login" />;

};

export default LogOutButton;