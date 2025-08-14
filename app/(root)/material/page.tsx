import React from "react";
import SaidbarMaterial from "./_components/saidbarMaterial";
import MainMaterial from "./_components/mainMaterial";

function page() {
  return (
    <div className="mt-[8.3vh] mb-[9vh] container grid grid-cols-[280px_64px_872px] ">
      <SaidbarMaterial />
      <div></div> {/* bo'sh joy (64px) */}
      <MainMaterial />
    </div>
  );
}

export default page;
