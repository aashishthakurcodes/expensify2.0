"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Signup() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [btnDisabled, setbtnDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log("SignuP success", res?.data);
      router.push("/login");
    } catch (error: unknown) {
      console.log("Error in signup", error);
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unknown error occurred during signup");
      }
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setbtnDisabled(false);
    } else {
      setbtnDisabled(true);
    }
  }, [user]);


  return <div className="flex flex-col items-center justify-center min-h-screen py-2">


    <h1>{loading ? "Processing":"Signup"}</h1>
    <hr/>
    {/* <label htmlFor="username">Username</label> */}
    <input  className="p-4" id="username" value={user.username} placeholder="Username"
    onChange={(e)=>setUser({...user,username:e.target.value})}/>
    <input  className="p-4" id="email" value={user.email} placeholder="email"
    onChange={(e)=>setUser({...user,email:e.target.value})}/>
    <input  className="p-4" id="password" value={user.password} placeholder="password"
    onChange={(e)=>setUser({...user,password:e.target.value})}/>

    <button  onClick={onSignup}>{btnDisabled ? "No SignUp":"Signup"}</button>
    <Link href={"/login"} >Visit Login Page</Link>
  </div>;
}

export default Signup;
