import Tag from "@/components/shared/tag";
import Image from "next/image";
import Link from "next/link";

function MainCard() {
  return (
    <div className="flex gap-8 overflow-hidden">
      <div className="relative rounded-[24px] w-[488px] h-[320px] overflow-hidden">
        <Image
          src="/Frame (1).svg"
          alt="Top Material"
          fill
          className="object-cover"
        />
      </div>
      <div className="overflow-hidden flex-1">
        {/* <div className="flex justify-between">
          <div className="w-[max-content] rounded-full bg-[#e4e7f5] py-[4px] px-[8px] text-[#3761E9] text-[12px] leading-[16px] font-semibold">
            Backend
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/like-outlined.svg" width={28} height={28} alt="like" />
            <span className="text-[18px] text-[#343d49]">20 k</span>
          </div>
        </div> */}
        <h1 className="mt-6 text-[30px] leading-[38px] text-h font-extrabold">
          How To Be Lazy Person In The Age of AI/ML
        </h1>

        <div className="flex mt-2 gap-2 overflow-x-auto no-scrollbar w-full">
          {[1, 2, 3, 4].map((item, index) => (
            <Tag key={index} name={"NextJs"} />
          ))}
        </div>

        <div className="flex justify-between items-center gap-4 mt-10">
          <div className="flex">
            <Image src="/Avatar.svg" width={40} height={40} alt="avatar" className="rounded-full object-cover" />

            <div className="flex flex-col ml-3">
              <h3 className="text-[14px] leading-[20px] font-bold text-[#475569]">Vermillion White</h3>
              <span className="text-[12px] leading-[16px] text-[#475569]">2025.02.10 15:30</span>
            </div>
          </div>

          <Link href="/">
            <Image src="/icons/ArrowUpRight.svg" width={24} height={24} alt={"arrow"} />
          </Link>
      </div>
      </div>
    </div>
  );
}

export default MainCard;
