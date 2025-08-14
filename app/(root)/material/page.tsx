import React from "react";
import SaidbarMaterial from "./_components/filter";
import MainMaterial from "./_components/main-card";

function page() {
  return (
    <div className="mt-[8.3vh] mb-[9vh] container grid grid-cols-12 gap-[64px]">
      
      <div className="col-span-3 ">
        <SaidbarMaterial  />
        </div>
       
     <div className="col-span-9 p-0">
       <MainMaterial />
       
       {/* <div className="grid grid-cols-3 gap-4 mt-[48px]">
        <MainCard/>
       </div> */}
     </div>
    </div>
  );
}

export default page;
