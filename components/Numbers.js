'use client';
import CountUp from "react-countup";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MotionDiv } from "./Motion";

function Numbers() {
    // Use a more sensitive threshold and more options
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px"
    });
    
    // Add a state to track if counting has started
    const [hasStarted, setHasStarted] = useState(false);
    
    useEffect(() => {
        // When the component comes into view, set hasStarted to true
        if (inView && !hasStarted) {
            setHasStarted(true);
        }
    }, [inView, hasStarted]);
    
    return (
        <MotionDiv initial={{ opacity: 0, x: -70 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2.4, delay: 0.6, ease: "backInOut" }} ref={ref} className="flex space-x-3 py-4 max-[720px]:hidden">
            <div className="flex flex-col w-28 space-y-2">
                <p className="font-bold text-red-600 text-3xl">
                    {hasStarted ? (
                        <CountUp start={0} end={10} duration={2} delay={1} />
                    ) : (
                        "0"
                    )}+
                </p>
                <p className="text-lg">YEARS OF EXPERIENCE</p>
            </div>
            <div className="h-full w-[1px] bg-white/10"></div>
            <div className="flex flex-col w-28 space-y-2">
                <p className="font-bold text-red-600 text-3xl">
                    {hasStarted ? (
                        <CountUp start={0} end={250} duration={2}  delay={1}/>
                    ) : (
                        "0"
                    )}+
                </p>
                <p className="text-lg">SATISFIED CLIENTS</p>
            </div>
            <div className="h-full w-[1px] bg-white/10"></div>
            <div className="flex flex-col w-28 space-y-2">
                <p className="font-bold text-red-600 text-3xl">
                    {hasStarted ? (
                        <CountUp start={0} end={650} duration={2} delay={1} />
                    ) : (
                        "0"
                    )}+
                </p>
                <p className="text-lg">FINISHED PROJECTS</p>
            </div>
            <div className="h-full w-[1px] bg-white/10"></div>
            <div className="flex flex-col w-28 space-y-2">
                <p className="font-bold text-red-600 text-3xl">
                    {hasStarted ? (
                        <CountUp start={0} end={8} duration={2} delay={1} />
                    ) : (
                        "0"
                    )}
                </p>
                <p className="text-lg">WINNING AWARDS</p>
            </div>
        </MotionDiv>
    );
}

export default Numbers;