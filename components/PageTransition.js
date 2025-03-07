"use client";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "@/components/Motion";
import { usePathname } from "next/navigation";
import Transition from "./Transition";

export default function PageTransition({ children }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <MotionDiv key={pathname}>
        <Transition />
        {children}
      </MotionDiv>
    </AnimatePresence>
  );
}