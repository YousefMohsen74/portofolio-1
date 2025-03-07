'use client'
import Link from "next/link";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";

function Links() {
  const links = [
    { href: "/", icon: HiHome },
    { href: "/about", icon: HiUser },
    { href: "/services", icon: HiRectangleGroup },
    { href: "/work", icon: HiViewColumns },
    { href: "/testimonials", icon: HiChatBubbleBottomCenterText },
    { href: "/contact", icon: HiEnvelope },
  ];
  const pathname = usePathname();
  return (
    <div
      className="text-white w-12 z-[200] bg-white/10 backdrop-blur-sm 
      absolute top-1/2 right-10 rounded-full -translate-y-1/2 
      flex flex-col space-y-5 justify-center items-center py-5 
      max-[720px]:top-auto max-[720px]:bottom-5 max-[720px]:right-1/2 
      max-[720px]:translate-x-1/2 max-[720px]:translate-y-0
      max-[720px]:flex-row max-[720px]:h-12 max-[720px]:w-auto 
      max-[720px]:space-y-0 max-[720px]:space-x-5 max-[720px]:py-0 max-[720px]:px-5"
    >
      {links.map(({ href, icon: Icon }) => (
        <Link key={href} href={href} prefetch>
          <Icon
            className={`text-xl transition-colors hover:text-red-700 ${
              pathname === href ? "text-red-700" : "text-white"
            }`}
          />
        </Link>
      ))}
    </div>
  );
}

export default Links;