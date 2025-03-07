import Image from "next/image";
import Bg from "@/public/assets/bg-explosion.png";
import ParticlesContainer from "@/components/ParticlesContainer";
import Avatar from "@/public/assets/avatar.png";
import { MotionDiv, MotionH1 } from "@/components/Motion";
import Btn from "@/components/Btn";

export default function Page() {
  return (
    <MotionDiv
      className={`w-full h-screen bg-[url(../public/assets/site-bg.svg)] bg-cover bg-no-repeat flex items-center`}
    >
      <Image
        className="max-[720px]:hidden w-full h-full absolute bottom-0 right-0 mix-blend-color-dodge z-10 translate-z-0"
        src={Bg}
        alt=""
      />
      <div className="flex w-full h-full pl-40 max-[720px]:px-10 max-[720px]:justify-center">
        <MotionDiv
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className="max-[720px]:w-full w-1/2 h-full text-white space-y-7 relative flex flex-col justify-center max-[720px]:items-center"
        >
          <MotionH1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            className="font-bold text-5xl w-3/4 max-[720px]:text-3xl leading-16 max-[720px]:leading-10 max-[720px]:text-center max-[720px]:w-full"
          >
            Transforming Ideas Into{" "}
            <span className="text-red-600">Digital Reality</span>
          </MotionH1>
          <MotionDiv
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
            className="w-3/4 text-gray-400 max-[720px]:text-center"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nostrum quam reprehenderit vero, tenetur voluptatem nulla aut
            aspernatur dolores ut.
          </MotionDiv>
          <Btn />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          className="max-[720px]:hidden w-1/2 h-screen flex flex-col justify-end items-start z-40"
        >
          <Image width={550} height={550} src={Avatar} alt="" />
        </MotionDiv>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full z-30 max-[720px]:w-full">
        <ParticlesContainer />
      </div>
    </MotionDiv>
  );
}
