"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathname = usePathname();
  const NAV_ITEMS = [
    { label: "Asosiy", href: "/" },
    { label: "Materiallar", href: "/material" },
    { label: "Community", href: "/community" },
    { label: "Kontaktlar", href: "/kontaktlar" },
  ];

  return (
    <div className="bg-white h-[8vh]  fixed top-0 left-0 right-0  z-30">
      <div className="container flex justify-between items-center h-full ">
        <Link href={"/"}>
          <div className="flex items-center   ">
            <Image
              src="/codemap-logo.png"
              alt="Nav logo"
              width={200} 
              height={200}
              className="object-cover "
            />
            {/* <span className="text-[22px] font-bold text-[#5D5FEF]">
             PLATFORM
            </span> */}
          </div>
        </Link>

        <div className="flex items-center justify-between gap-4  ">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link href={item.href} key={item.href}>
                <span
                  className={`text-[17px] ${
                    isActive ? "text-[#5D5FEF]" : "text-black"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
        <Link
          href={"/auth/register"}
          className=" flex items-center py-[16px] px-[24px] bg-[#F3F4FF] rounded-[12px]"
        >
          <span className="text-[#5D5FEF] border-none">Kirish</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
