import Image from "next/image";
import Link from "next/link";

const CommunityCard = () => {
  return (
    <div className="border-b border-border pb-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          {/* <div className="w-[max-content] rounded-full bg-[#e4e7f5] mb-[16px] py-[4px] px-[8px] text-[#3761E9] text-[12px] leading-[16px] font-semibold">
            Backend
          </div> */}

          <Link
            className="font-extrabold text-[20px] leading-[28px] text-[#1E293B] "
            href="/"
          >
            Senior Product Designer
          </Link>

          <p className="text-[16px] leading-[20px] text-[#475569] mt-2 line-clamp-2">Maecenas accumsan lacus vel facilisis. Ullamcorper sit amet risus nullam ege. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque reprehenderit, voluptas odit autem magni suscipit neque dolorem, iusto vero exercitationem minus unde. Voluptate voluptatibus tenetur deserunt quisquam mollitia, molestias maxime!</p>

          <div className="flex mt-[8px] gap-2 overflow-x-auto no-scrollbar w-full">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="bg-slate-200 hover:bg-slate-200 border-none px-3 py-1 rounded-[8px]  text-[14px] text-[#475569] font-medium"
              >
                #react
              </div>
            ))}
          </div>
        </div>
        <Link className="p-4 min-w-[64px]" href="/">
          <Image
            src="/icons/ArrowUpRight.svg"
            width={32}
            height={32}
            alt={"arrow"}
          />
        </Link>
      </div>

      <div className="grid grid-cols-2 mt-6">
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
              width={24}
              height={24}
              alt="like"
            />
            <span className="text-[16px] leading-[22px] font-bold text-[#1E293B]">20 k</span>
          </div>
        
      </div>
    </div>
  );
};

export default CommunityCard;
