import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";

import { AtSign , Github } from 'lucide-react';
const Page = () => {
  return (
    <>
      <div className="max-h-screen grid grid-cols-2 items center">
        <div className="relative h-screen  ">
          <Image
            src="/Autbanner.jpg"
            alt="Auth-banner"
            fill
            className="object-cover rounded-r-[80px] "
          />
        </div>
        <div className="flex items-center justify-center">
          
           <div className="p-6 border border-border dark:border-border rounded-2xl  w-[450px]">
              <div className="flex item-center justify-center">
                <h1 className="text-2xl  item-center">Log In</h1>
              </div>
             <form action="">
              <Label className="my-2  " htmlFor="email">Your email address</Label>
              <Input className="my-2 " type="text" placeholder="Email" />
              
              <Label className="mt-5 " htmlFor="password">Your email address</Label>
              <Input className="my-2 " type="password" placeholder="Password" />
              

              <Button className="w-full text-white mt-5" >Kirish </Button>


              </form>
              <div className="grid grid-cols-2 gap-2 mt-5">
                 <Button variant="outline"><AtSign />Gmail </Button> 
                   <Button variant="outline"><Github />GitHub</Button>
              </div>
           </div>
          
        </div>
      </div>
    </>
  );
};

export default Page;
