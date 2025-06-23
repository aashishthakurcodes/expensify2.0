'use client';
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Profilepage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");
  const getUserDetails = async () => {
    const res = await axios.post("/api/users/userDashboard");
    console.log(res.data.data._id);
    setData(res.data.data._id);
  };

  const logout=async()=>{
    try {
        await axios.get('/api/users/logout')
        toast.success("logout Success")
        router.push("/login")
    } catch (error) { 
        if (error instanceof Error) {
            console.log(error.message)
            toast.error(error.message)
        } else {
            console.log(error)
            toast.error("An unknown error occurred")
        }
    }
  }
  return(
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1>Profile page</h1>
        <hr/>
        <h2>{data === "nothing" ? "Nothing" : <Link href={`/profile/${data}`}>{data }</Link> }
        </h2>
        <hr/>
        <button className="bg-blue-300 px-4 py-2" onClick={logout}>Logout</button>
        <button className="bg-green-300 px-4 py-2" onClick={getUserDetails}>Get User Details</button>
    </div>

  );
}
