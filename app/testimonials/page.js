import { MotionDiv } from "@/components/Motion";
import Swiper2 from "@/components/Swiper2";
import Corner from "@/public/assets/circles.png";
import Image from "next/image";
function Page() {
  return (
    <div className="bg-[url(../public/assets/site-bg.svg)] bg-cover bg-no-repeat w-full min-h-screen h-screen flex justify-center items-center flex-col max-[720px]:space-y-5 max-[720px]:pt-7">
      <div className="absolute bottom-0 right-0 mix-blend-color-dodge w-40">
        <Image src={Corner} alt="" />
      </div>
      <MotionDiv initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2.5, delay: 0.6, ease: "backInOut" }}>
      <h1 className="text-5xl text-white max-[720px]:text-3xl">What clients <span className="text-red-600">say.</span></h1>
      </MotionDiv>
      <Swiper2/>
    </div>
  );
}

export default Page;
