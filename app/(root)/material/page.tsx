'use client'
import MaterialCard from "@/components/cards/material.card";
import Filter from "./_components/filter";
import MainCard from "./_components/main-card";
import Pagination from "@/components/shared/pagination";

function page() {
  return (
    <div className="container">
      <div className="flex gap-[64px]">
        <Filter />

        <div style={{ width: "calc(100% - 280px - 64px)" }}>
          <MainCard />

          <div className="grid grid-cols-3 gap-6 mt-[48px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <MaterialCard key={item} />
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
              <p className="text-[14px] leading-[20px] font-bold text-[#475569]">Showing 1 to 12 of 100 entries</p>

              <Pagination limit={10} total={100} currentPage={1} onPageChange={() => {}} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
