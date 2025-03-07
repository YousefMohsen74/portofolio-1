'use client'
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaFigma } from "react-icons/fa6";
import { SiAdobephotoshop } from "react-icons/si";
import { useState } from "react";
import { MotionDiv } from "./Motion";

function Skills() {
    const [num , setNum]=useState(0);
    return (
        <MotionDiv  initial={{ opacity: 0, x: 70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2, delay: 0.6, ease: "backInOut" }} className="w-1/2 flex flex-col h-full py-40 space-y-5 max-[720px]:py-0 max-[720]:w-full max-[720px]:items-center">
            <div className="flex space-x-3">
                <div className="flex flex-col cursor-pointer" onClick={()=>setNum(0)}>
                    <p className={` ${num===0?"text-red-700":"text-white"}`}>Skills</p>
                    <div className={`${num===0?"w-full":"w-1/2"} bg-white h-0.5 transition-all duration-300`}></div>
                </div>
                <div className="flex flex-col cursor-pointer" onClick={()=>setNum(1)}>
                    <p className={` ${num===1?"text-red-700":"text-white"}`}>Awards</p>
                    <div className={`${num===1?"w-full":"w-1/2"} bg-white h-0.5 transition-all duration-300`}></div>
                </div>
                <div className="flex flex-col cursor-pointer" onClick={()=>setNum(2)}>
                    <p className={` ${num===2?"text-red-700":"text-white"}`}>Experience</p>
                    <div className={`${num===2?"w-full":"w-1/2"} bg-white h-0.5 transition-all duration-300`}></div>
                </div>
                <div className="flex flex-col cursor-pointer" onClick={()=>setNum(3)}>
                    <p className={` ${num===3?"text-red-700":"text-white"}`}>Credentials</p>
                    <div className={`${num===3?"w-full":"w-1/2"} bg-white h-0.5 transition-all duration-300`}></div>
                </div>
            </div>
            {num===0 && <div className="space-y-3">
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Web Development</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div className="flex space-x-3 ">
                    <FaReact/>
                    <RiNextjsFill/>
                    <RiTailwindCssFill/>
                    <FaCss3/>
                    <IoLogoJavascript/>
                    </div>
                </div>
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">UI/UX Design</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div className="flex space-x-3">
                    <FaFigma/>
                    <SiAdobephotoshop/>
                    </div>
                </div>
            </div>}
            {num===1 && <div className="space-y-3">
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Webby Awards - Honoree</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div className="text-white">2011 - 2012</div>
                </div>
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Adobe Design Achevement Awards - Finalist</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div >2009 - 2010</div>
                </div>
            </div>}
            {num===2 && <div className="space-y-3">
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">UX/UI Designer - XYZ Company</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div className="text-white">2012 - 2032</div>
                </div>
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Web Developer - ABC Agency</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div >2010 - 2012</div>
                </div>
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Intern - DEF Corporation</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div >2008 - 2010</div>
                </div>
            </div>}
            {num===3 && <div className="space-y-3">
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Web Development - ABC University, LA, CA</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div className="text-white">2011</div>
                </div>
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Computer Science Diploma - AV Technical Institute</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div >2009</div>
                </div>
                <div className="flex text-white items-center space-x-3 max-[720px]:flex-col max-[720px]:space-y-2 max-[720px]:space-x-0">
                    <p className="text-white/60">Certified Graphic Designer - ABC Institute, Los Angeles, CA</p>
                    <p className="max-[720px]:hidden">-</p>
                    <div >2006</div>
                </div>
            </div>}

        </MotionDiv>
    )
}

export default Skills
