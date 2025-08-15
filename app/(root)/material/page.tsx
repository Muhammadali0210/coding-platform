import MaterialCard from "@/components/cards/material.card";
import Filter from "./_components/filter";
import MainCard from "./_components/main-card";

function page() {
  return (
    <div className="container">
      <div className="flex gap-[64px]">
        <Filter />

        <div style={{ width: "calc(100% - 280px - 64px)" }}>
          <MainCard />

          <div className="grid grid-cols-3 gap-6 mt-[48px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
              <MaterialCard key={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
