
import Link from "next/link";
import CustomLoginInput from "./components/CustomLoginInput";
import CustomButton from "./components/CustomButton";
import { MdEmail } from "react-icons/md";
import { IoKey } from "react-icons/io5";
export default function Home() {
  return (
    <div className="container m-auto px-5 ">

    <div className="h-screen  flex justify-center items-center">
      <div className=" w-full md:w-1/3 shadow-lg rounded-xl p-4">
         <h3 className='text-center mb-5 font-bold text-2xl'>Login</h3>
        <CustomLoginInput icon={<MdEmail />} />
        <CustomLoginInput icon={<IoKey />} />


        <div className="text-center mt-10">
          <CustomButton title='Login' />
        </div>

        <div className="text-center mt-10">
          <Link href='/pages/auth/register'>Register</Link>
          <hr />
          <Link href='/pages/dashboard'>Dashboard</Link>
          
        </div>





      </div>
    </div>



  </div>
  );
}
