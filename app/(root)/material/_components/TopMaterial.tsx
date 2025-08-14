import Image from "next/image";
import React from "react";

function TopMaterial() {
  return (
    <div className="w-full raunded-[24px] grid grid-cols-2">
      <Image
        src="/Autbanner.jpg"
        alt="Auth-banner"
        fill
        className="object-cover rounded-r-[80px] "
      />
      <div>
        <span className="text-[#3761E9] text-[14px] bg-[#F0F2FA] px-[12px] py-[6px]">
          Featured
        </span>
        <h1 className="text-[30px] text-[#1E293B] font-simibold">
          How To Be Lazy Person In The Age of AI/ML
        </h1>
      </div>
    </div>
  );
}

export default TopMaterial;
