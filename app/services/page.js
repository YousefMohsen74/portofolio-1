import Bulb from "@/public/assets/bulb.png";
import Image from "next/image";
import Corner from "@/public/assets/circles.png";
import Swiper from "@/components/Swiper";
import { MotionDiv, MotionP } from "@/components/Motion";
function Page() {
  return (
    <div className="relative flex gap-5 bg-[url(../public/assets/site-bg.svg)] bg-cover bg-no-repeat w-full min-h-screen overflow-hidden max-[720px]:pt-0 items-center pl-56 max-[720px]:px-5 max-[720px]:justify-center  max-[720px]:flex-col max-[720px]:items-center ">
      <div className="absolute -left-24 mix-blend-color-dodge -bottom-20 max-[720px]:hidden ">
        <Image width={200} height={200} src={Bulb} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 mix-blend-color-dodge w-48">
              <Image  src={Corner} alt="" />
            </div>
      <MotionDiv initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "backInOut" }} className="w-1/4 flex flex-col space-y-5 max-[720px]:w-full max-[720px]:items-center">
            <p className="text-5xl text-white font-bold max-[720px]:text-3xl">My services<span className="text-red-600 text-6xl max-[720px]:text-3xl">.</span></p>
            <MotionP initial={{ opacity: 0, y: 71 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "backInOut" }} className="text-gray-400 max-[720px]:text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehemderit maiores facere officiis labore ullam.</MotionP>
      </MotionDiv>
      <Swiper/>
    </div>
  );
}

export default Page;
