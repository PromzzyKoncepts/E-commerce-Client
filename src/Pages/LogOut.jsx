import React, { useContext, useEffect } from "react";
import userContext from "../context/userContext";
import { Navigate } from "react-router-dom";

const LogOut = () => {
   const {actions: { signOut }} = useContext(userContext);
    signOut()
//    useEffect(() => signOut(), [signOut]);

   return <Navigate to="/" />;
};

export default LogOut;
