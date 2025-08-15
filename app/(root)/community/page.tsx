import CommunityCard from "@/components/cards/community.card";
import Filter from "./_components/filter";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


const page = () => {
  return (
    <div className="container">
      <div className="flex gap-[64px]">
        <Filter />

        <div style={{ width: "calc(100% - 360px - 64px)" }}>
          <div className="border-b border-[#E4E7F5] pb-6 flex items-center justify-between w-full mb-8">
            <h1 className="text-[32px] font-bold text-[#1E293B]">Community</h1>

            <Button className="h-[48px] px-8 flex items-center gap-2 text-white text-[16px] leading-[22px] font-bold">
              Ask a Question
              <Plus className="w-[22px] h-[22px] text-white" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <CommunityCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
