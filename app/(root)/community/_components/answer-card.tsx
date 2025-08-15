import Image from "next/image";
import Link from "next/link";

const AnswerCard = () => {
  return (
    <div className="py-[32px] ">
      <div className="flex items-center justify-between">
        <div>
          <div className="w-[max-content] rounded-full bg-[#e4e7f5] mb-[16px] py-[4px] px-[8px] text-[#3761E9] text-[12px] leading-[16px] font-semibold">
            Backend
          </div>

          <Link
            className="font-extrabold text-[20px] leading-[28px] text-[#1E293B] "
            href="/"
          >
            Senior Product Designer
          </Link>

          <div className="flex mt-[8px] gap-2 overflow-x-auto no-scrollbar w-full">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="bg-slate-200 hover:bg-slate-200 border-none px-4 py-2 rounded-[8px]  text-[14px] text-[#475569] font-medium"
              >
                #react
              </div>
            ))}
          </div>
        </div>
        <Link className="flex justify-end" href="/">
          <Image
            src="/icons/ArrowUpRight.svg"
            width={32}
            height={32}
            alt={"arrow"}
          />
        </Link>
      </div>

      <div className="grid grid-cols-2 mt-[32px]">
        
          <div className="flex justify-start">
            <Image
              src="/Avatar.svg"
              width={40}
              height={40}
              alt="avatar"
              className="rounded-full object-cover"
            />

            <h3 className="text-[14px] ml-[8px] flex items-center leading-[20px] font-bold text-[#475569]">
              Vermillion White
            </h3>
          </div>

          
          <div className="flex items-center justify-end gap-2">
            <Image
              src="/icons/like-outlined.svg"
              width={28}
              height={28}
              alt="like"
            />
            <span className="text-[18px] text-[#343d49]">20 k</span>
          </div>
        
      </div>
    </div>
  );
};

export default AnswerCard;
