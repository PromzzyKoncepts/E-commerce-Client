import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { motion } from "framer-motion";

const userContext = createContext(null);

const loadingContainer = {
    width: "4rem",
    height: "4rem",
    display: "flex",
    justifyContent: "space-around",
};
const loadingCircle = {
    display: "block",
    width: "1rem",
    height: "1rem",
    backgroundColor: "#3A36DB",
    borderRadius: "0.5rem",
};

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const loadingCircleVariants = {
    start: {
        y: "0%",
    },
    end: {
        y: "60%",
    },
};
const loadingCircleTransition = {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeInOut",
};

export const UserProvider = (props) => {
    const [authUser, setAuthUser] = useState(false);
    const [loading, setLoading] = useState(true);
    const baseUrl = "https://aphia-dev.onrender.com/api";

    const signIn = async (body) => {
        try {
            const res = await axios.post(`${baseUrl}/users/login`, body);

            if (res.data.success === true){
                const decodedToken = jwtDecode(res.data.message);
                localStorage.setItem("authToken", JSON.stringify(res.data));
                setAuthUser(decodedToken);
                console.log("res.data", res.data);
                return res.data;
            } else {
                throw new Error("Authentication failed");
            }
        } catch (error) {
            return null;
        }
    };

    const signOut = () => {
        localStorage.removeItem("authToken");
        setAuthUser(null);
    };

    useEffect(() => {
        const storedToken = localStorage.getItem("authToken");
        if (storedToken) {
            const decodedToken = jwtDecode(storedToken);
            setAuthUser(decodedToken);
        }
        setLoading(false);
    }, []);

    return (
        <userContext.Provider
            value={{ authUser, actions: { signIn, signOut, setAuthUser } }}
        >
            {loading ? (
                <div className="fixed w-full min-h-screen z-50 bg-black opacity-30 flex justify-center items-center h-screen">
                    <motion.div
                        style={loadingContainer}
                        variants={loadingContainerVariants}
                        initial="start"
                        animate="end"
                    >
                        <motion.span
                            style={loadingCircle}
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}
                        ></motion.span>
                        <motion.span
                            style={loadingCircle}
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}
                        ></motion.span>
                        <motion.span
                            style={loadingCircle}
                            variants={loadingCircleVariants}
                            transition={loadingCircleTransition}
                        ></motion.span>
                    </motion.div>
                </div>
            ) : (
                props.children
            )}
        </userContext.Provider>
    );
};

export default userContext;
