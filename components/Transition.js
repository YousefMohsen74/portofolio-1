import { MotionDiv } from "@/components/Motion";

const transitionVariants = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%","100%"],
    width: ["0%","100%"],
  },
};

const Transition=()=> {
  
  return (
    <>
      <MotionDiv
        className="fixed top-0 bottom-0 right-full w-full min-h-screen z-[999999] bg-[#2e2257]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.6, ease: "easeInOut" }}
      />
      <MotionDiv
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[99999] bg-[#3b2d71]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
      />
      <MotionDiv
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[9999] bg-[#4b3792]"
        variants={transitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.6, duration: 0.6, ease: "easeInOut" }}
      />
    </>
  );
}

export default Transition;