import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import Image from "next/image";

function Btn() {
  return (
    <div>
      <Link
        href="/work"
        className="w-28 h-28 absolute z-[99999] left-10 bottom-32 max-[720px]:left-1/2 -translate-x-1/2 bg-[url(/assets/circle-star.svg)] bg-cover p-3 bg-center cursor-pointer bg-no-repeat group flex items-center justify-center"
      >
        <Image
          width={100}
          height={100} // Explicitly set height
          src="/assets/rounded-text.png"
          className="spin-slow w-full h-full"
          alt="button"
        />
        <HiArrowRight className="absolute text-4xl transition-all duration-300 group-hover:translate-x-2" />
      </Link>
    </div>
  );
}

export default Btn;
