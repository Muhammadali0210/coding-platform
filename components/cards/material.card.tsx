'use client'

import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import Tag from "../shared/tag"

const MaterialCard = () => {
  return (
    <div className="mb-5">
      <div className="relative rounded-[24px] w-full h-[220px] overflow-hidden">
        <Image
          src="/Frame (1).svg"
          alt="Top Material"
          fill
          className="object-cover"
        />
      </div>

      <div className="mt-5">
        {/* <div className="flex justify-between">
          <div className="w-[max-content] rounded-full bg-[#e4e7f5] py-[4px] px-[8px] text-[#3761E9] text-[12px] leading-[16px] font-semibold">
            Backend
          </div>

          <div className="flex items-center gap-2">
            <Image src="/icons/like-outlined.svg" width={22} height={22} alt="like" />
            <span className="text-[14px] text-[#475569]">20 k</span>
          </div>
        </div> */}

        <h2 className="text-[24px] leading-[32px] text-h font-bold line-clamp-1">Blog post title</h2>

        <div className="flex mt-2 gap-2 overflow-x-auto no-scrollbar w-full">
          {[1, 2, 3, 4].map((item, index) => (
            <Tag key={index} name={"NextJs"} small={true} />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center gap-4 mt-5">
          <div className="flex">
            <Image src="/Avatar.svg" width={40} height={40} alt="avatar" className="rounded-full object-cover" />

            <div className="flex flex-col ml-3">
              <h3 className="text-[14px] leading-[20px] font-bold text-[#475569] dark:text-[#8792a0]">Vermillion White</h3>
              <span className="text-[12px] leading-[16px] text-p">2025.02.10 15:30</span>
            </div>
          </div>

          <Link href="/">
            <Image src="/icons/ArrowUpRight.svg" width={24} height={24} alt={"arrow"} />
          </Link>
      </div>
    </div>
  )
}

export default MaterialCard