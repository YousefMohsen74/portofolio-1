"use client"
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { MotionDiv } from "./Motion";
function Test() {
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (pathname === "/") {
      setIsActive(!isActive);
    }
  }, [pathname]);
  return (
    <>
      {isActive && (
        <MotionDiv
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 200 }}
          transition={{ duration: 1.6, delay: 1, ease: "backInOut" }}
          className="w-3/4 text-gray-400 max-[720px]:text-center"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
          nostrum quam reprehenderit vero, tenetur voluptatem nulla aut
          aspernatur dolores ut.
        </MotionDiv>
      )}
    </>
  );
}

export default Test;
