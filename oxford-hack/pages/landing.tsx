import { useRouter } from "next/router";
import React, { useState, useContext, useEffect } from "react";


export default function LandingPage(){

  const router=useRouter()

	return <>
  <div className="h-screen w-full flex items-center  justify-center bg-one ">
    <div className="bg-three  h-[40%] font-extrabold justify-center flex items-center rounded-3xl hover:-translate-y-10 :hover transition duration-700 ease-out shadow-xl hover:shadow-zinc-100 w-[60%]">
      <div onClick={()=>router.push("/feed")} className="text-four hover:text-four font-mono scale-[5]">WECOME</div>
  
    </div>
  </div>
  </>
    
}

