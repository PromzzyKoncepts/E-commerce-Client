import React,{useState} from 'react'
import axios from 'axios'

function Login(){
    const [username, setUsername]  = useState('')
    const [password, setPassword] = useState('')

    const handleusername = (e) =>{
        setUsername(e.target.value)
    } 

    const handlePassword = (e) =>{
        setPassword(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username !== '' && password !== ''){ 
            const body = {username, password}
            const baseurl = 'htttp://lmtechtestauth.onrender.com'
            axios.post(`${baseurl}/login`,body).then((res)=>{
                console.log(res)
            })
        }

    }

    return(
        <>
        <div className="container">
        <div className="top">
            <h3>LOGIN FORM</h3>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col w-full items-center'>
        <input
         type="text"
         placeholder="username"
         value={username}
         onChange = {handleusername}
         className="text-[16px] w-[200px] my-[10px] border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' border-2"
         />

        <input 
         type="password"
         placeholder="password"
         value={password}
         onChange = {handlePassword}
         className="text-[16px]  w-[200px] my-[10px] border border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' border-2"
         />

        <button type='submit'
         className="text-[16px] w-[200px] bg-green-500 border my-[10px] border-gray-300 px-3 py-2 rounded-lg shadow-sn focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500' border-2"
        
        > submit </button>
        </form>
        </div>
        </>
    )
    }

export default Login;