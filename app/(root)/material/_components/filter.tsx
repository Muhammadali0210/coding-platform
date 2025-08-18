"use client"
import SearchInput from "@/components/shared/search-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HelpCircle, User2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Filter = () => {
  const materialMenu = [
    { name: "All Category", path: "all" },
    { name: "UI/UX Design", path: "uiux" },
    { name: "Machine Learning", path: "ml" },
    { name: "Marketing", path: "marketing" },
    { name: "Human Resources", path: "hr" },
  ];
  const [active, setActive] = useState(materialMenu[0].path)
  return (
    <div className="w-[280px] h-[max-content] min-w-[280px] sticky top-[calc(8vh+24px)]">
      <SearchInput />

      {/*saidbar*/}
      <div className="mt-[40px]">
        <Link href={"/"} className="text-[#3761E9] text-[14px] mb-[16px] cursor-pointer">
          Browse By Categories
        </Link>
        {materialMenu.map((item, key) => (
          <Button
            key={key}
            variant="ghost"
            value={item.path}
            onClick={() => setActive(item.path)}
            className={` flex flex-col font-bold text-[16px] border-l-[2px] rounded-none px-[13px] py-[20px] 
            ${active === item.path ? "border-[#3761E9] text-[#1E293B]" : "border-[#CBD5E1] text-[#475569]"}`}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default Filter;
