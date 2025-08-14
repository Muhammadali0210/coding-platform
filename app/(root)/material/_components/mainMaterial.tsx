import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function TopMaterial() {
  const tags = [
    { tag: "#flutter" },
    { tag: "#javascript" },
    { tag: "#typescript" },
    { tag: "#react" },
    { tag: "#vue" },
    { tag: "#nodejs" },
    { tag: "#nextjs" },
    { tag: "#tailwindcss" },
    { tag: "#python" },
  ];
  return (
    <div className="w-full mt-5 ml-[32px] rounded-[24px] grid grid-cols-[488px_384px]  overflow-hidden">
      <div className="relative w-full h-[300px]">
        <Image
          src="/Frame (1).svg"
          alt="Top Material"
          fill
          className="object-cover rounded-[24px] "
        />
      </div>
      <div className="p-4">
        <span className="text-[#3761E9] text-[14px] rounded-full bg-[#F0F2FA] px-[12px] py-[6px]">
          Featured
        </span>
        <h1 className="text-[30px] text-[#1E293B] font-semibold">
          How To Be Lazy Person In The Age of AI/ML
        </h1>

        <div className="flex mt-[24px] gap-2 overflow-x-auto no-scrollbar">
          {tags.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              className=" bg-slate-200 border-none px-4 py-1 text-[18px] flex-shrink-0 text-[#475569]"
            >
              {item.tag}
            </Button>
          ))}
        </div>

        <div className="mt-[32px] flex items-center">
          <Image
            src="/Avatar.svg"
            alt="Nav logo"
            width={40}
            height={40}
            className="object-cover "
          />
          <div className=" ml-3 flex flex-col">
            <Link  href={""} className="text-[14px] font-bold ">
            Azunyan U. Wu
          </Link>
           <p className="text-[#94A3B8] text-[14px]">5min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopMaterial;
