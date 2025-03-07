import { MotionDiv, MotionForm } from "@/components/Motion";
import Corner from "@/public/assets/circles.png";
import Image from "next/image";
import {BsArrowRight} from 'react-icons/bs'
function Page() {
  return (
    <MotionDiv  className="bg-[url(../public/assets/site-bg.svg)] bg-cover bg-no-repeat w-full min-h-screen h-screen max-[720px]:pt-20 flex justify-center items-center max-[720px]:px-5">
      <div className="absolute bottom-0 right-0 mix-blend-color-dodge w-40">
        <Image src={Corner} alt="" />
      </div>
      <MotionForm initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "backInOut" }} className="flex flex-col items-center space-y-5 ">
      <h1 className="text-5xl text-white font-bold">
        Let&#39;s <span className="text-red-600">connect.</span>
      </h1>
        <div className="w-full flex space-x-3">
            <input className="bg-transparent max-[720px]:w-1/2 focus:ring-1 focus:ring-red-600 outline-none  rounded-lg w-64 pl-3 border-2 h-10 border-gray-600 placeholder:text-gray-600" placeholder="Name" type="text">
            </input>
            <input className="bg-transparent max-[720px]:w-1/2 focus:ring-1 focus:ring-red-600 outline-none  rounded-lg w-64 pl-3 border-2 h-10 border-gray-600 placeholder:text-gray-600 " placeholder="Email" type="text">
            </input>
        </div>
        <div className="w-full space-x-3">
            <input className=" bg-transparent w-full rounded-lg  pl-3 border-2 focus:ring-1 focus:ring-red-600 outline-none  h-10 border-gray-600 placeholder:text-gray-600" placeholder="Name" type="text">
            </input>
        </div>
        <textarea placeholder="message" className=" bg-transparent focus:ring-1 focus:ring-red-600 outline-none  resize-none  placeholder:text-gray-600 h-[180px] py-2 px-3 rounded-lg w-full border-2 border-gray-600"></textarea>
        <button className="text-white rounded-full border-2 border-gray-600 px-8 transition-all duration-300 flex items-center overflow-hidden h-10 self-start justify-center hover:border-red-600 group">
            <span className="group-hover:-translate-y-[120%] transition-all group-hover:opacity-0">Let&#39;s talk</span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all absolute"/>
        </button>
      </MotionForm>
    </MotionDiv>
  );
}

export default Page;
