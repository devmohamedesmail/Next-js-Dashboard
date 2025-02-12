'use client'
import Link from "next/link";
import CustomLoginInput from "./components/CustomLoginInput";
import CustomButton from "./components/CustomButton";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { useState } from "react";
import { users } from "./data/users";
import { redirect } from "next/navigation";
export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handlelogin = () => {
    users.map((user) => {
      if (user.email === email && user.password === password) {
        redirect('/pages/dashboard')
      } else {
        console.log('not login')
      }
    })
  }



  return (
    <div className="container m-auto px-5 ">
      <div className="h-screen  flex justify-center items-center">
        <div className=" w-full md:w-1/2 shadow-lg rounded-xl p-4">
          <h3 className='text-center mb-5 font-bold text-2xl'>Login</h3>
          <CustomLoginInput icon={<MdEmail />} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
          <CustomLoginInput icon={<IoKey />} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />


          <div className="text-center mt-10">
            <CustomButton title='Login' onClick={() => handlelogin()} />
          </div>

          <div className="text-center mt-10">
            <Link href='/pages/auth/register'>Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
