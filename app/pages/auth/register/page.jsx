'use client'
import React,{useState} from 'react'
import Link from 'next/link'
import CustomButton from '@/app/components/CustomButton'
import CustomLoginInput from '@/app/components/CustomLoginInput'
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { users } from '@/app/data/users'

export default function Register() {
  const[name,setName]=useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')




  const handleRegister = () =>{
    users.push({
      name,
      email,
      password
    })
    console.log(users)
  }

  return (
    <div className="container m-auto px-5 ">

      <div className="h-screen  flex justify-center items-center">
        <div className=" w-full md:w-1/2 shadow-lg rounded-xl border p-4">
           <h3 className='text-center mb-10 font-bold text-2xl'>Register</h3>
          <CustomLoginInput icon={<FaUser />} placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <CustomLoginInput icon={<MdEmail />} placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <CustomLoginInput icon={<IoKey />} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />


          <div className="text-center mt-10">
            <CustomButton title='Register' onClick={ () => handleRegister() } />
          </div>

          <div className="text-center mt-10">
            <Link href='/'>Login</Link>
          </div>





        </div>
      </div>



    </div>
  )
}
