import Corner from "@/public/assets/circles.png";
import Image from "next/image";
import { MotionDiv, MotionH1 , MotionP } from "@/components/Motion";
import Numbers from "@/components/Numbers";
import Skills from "@/components/Skills";
import Avatar from "@/public/assets/avatar.png";
function Page() {
  return (
    <div className="bg-[url(../public/assets/site-bg.svg)] bg-cover bg-no-repeat w-full min-h-screen h-screen max-[720px]:pt-20">
      <div className="absolute -left-60 bottom-0 max-[720px]:hidden ">
        <Image width={500} height={500} src={Avatar} alt="" />
      </div>
      <div className="absolute bottom-0 right-0 mix-blend-color-dodge w-40">
        <Image src={Corner} alt="" />
      </div>
      <div className="flex w-full h-full pl-56 max-[720px]:px-5 max-[720px]:flex-col">
        <MotionDiv
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, delay: 0.6, ease: "backInOut" }}
          className="w-1/2 max-[720px]:w-full h-full text-white space-y-7 relative flex flex-col justify-center"
        >
          <MotionH1 initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.2, delay: 0.6, ease: "backInOut" }} className="font-bold text-5xl w-3/4 leading-16 max-[720px]:w-full max-[720px]:text-3xl max-[720px]:leading-10 max-[720px]:text-center">
            Captivating <span className="text-red-600">stories</span> birth
            magnificent designs.
          </MotionH1>
          <MotionP initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2.4, delay: 0.6, ease: "backInOut" }} className="w-3/4 text-gray-400 max-[720px]:w-full max-[720px]:text-center">
            10 years ago, I began freelancing as a developer. Since then,
            I&#39;ve done remote work for agencies, consulted for startups, and
            collaborated on digital products for business and consumer use.
          </MotionP>

          <Numbers />
        </MotionDiv>
        <Skills />
      </div>
    </div>
  );
}

export default Page;
