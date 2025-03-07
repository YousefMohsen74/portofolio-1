import Image from "next/image";
import Logo from "@/public/assets/logo.svg";
import { FiYoutube    } from "react-icons/fi";
import { FaFacebookF , FaSquareGithub } from "react-icons/fa6";
import { FaInstagram , FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function NavBar() {
  
  return (
    <div className=" w-4/5 flex justify-between pl-56  absolute top-0 h-20 items-center max-[720px]:flex-col max-[720px]:w-full max-[720px]:pl-0 max-[720px]:py-5 max-[720px]:space-y-5 z-[100]">
      <div>
        <Image width={150} height={100} src={Logo} alt="." />
      </div>
      <div className="flex space-x-5 items-center">
        <Link href={"/"}>
          <FiYoutube className="text-xl text-white hover:text-red-700" />
        </Link>
        <Link href={"/"}>
          <FaFacebookF className="text-xl text-white hover:text-red-700"/>
        </Link>
        <Link href={"/"}>
          <FaLinkedin className="text-xl text-white hover:text-red-700"/>
        </Link>
        <Link href={"/"}>
          <FaSquareGithub className="text-xl text-white hover:text-red-700"/>
        </Link>
        <Link href={"/"}>
          <FaInstagram className="text-xl text-white hover:text-red-700"/>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
