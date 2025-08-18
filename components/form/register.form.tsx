'use client';
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
        <div className="p-6 rounded-2xl w-[400px]">
          <div className="flex justify-center">
            <Image
              src="/brand/logo-outline.svg"
              alt="Profile"
              width={60}
              height={60}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-[24px]">
            <h1 className="text-[30px] text-h font-bold leading-[38px]">
                Create an account
            </h1>
            <p className="leading-[24px] text-p text-[16px] mt-[12px]">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="mt-[32px]" action="">
            <Label
              className="text-sm text-p leading-[20px] font-inter"
              htmlFor="name"
            >
              Name
            </Label>
            <Input
              id="name"
              className="mt-[6px] px-[14px] h-[44px] py-[10px] text-p text-[16px] leading-[24px]"
              type="text"
              placeholder="Name"
            />

            <Label
              className="mt-5 text-sm text-p leading-[20px] font-inter"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
                id="email"
              className="mt-[6px] px-[14px] h-[44px] py-[10px] text-p text-[16px] leading-[24px]"
              type="email"
              placeholder="Email"
            />

            <Label
              className="mt-[20px] text-sm text-p leading-[20px] font-inter"
              htmlFor="password"
            >
              Password
            </Label>
            <Input
                id="password"
              className="mt-[6px] px-[14px] h-[44px] py-[10px] text-p text-[16px] leading-[24px]"
              type="password"
              placeholder="Password..."
            />

            <div className="grid grid-cols-2 text-[14px] leanding-[20px] mt-[24px]">
              <div className="flex items-center">
                <input
                  className="border-[#D5D7DA] w-[16px] h-[16px]"
                  type="checkbox"
                />
                <h2 className="text-p  ml-1">Remember for 30 days</h2>
              </div>
              <Link href="/" className="flex font-bold text-[#6941C6] items-center justify-end">
                Forgot password
              </Link>
            </div>

            <Button className="w-full  h-[44px] text-white mt-5">Kirish</Button>
          </form>

          <Button
            className="text-h text-md h-[44px] leanding-md raunded-md border-[#D5D7DA] w-full py-[10px] mt-[16px]"
            variant="outline"
          >
            <Image
              src="/google.svg"
              alt="Profile"
              width={24}
              height={24}
              className="object-cover"
            />
            Sign in width Google
          </Button>

          <div className=" mt-[32px] flex items-center justify-center ">
            <h1 className=" text-[14px] text-p leanding-[20px]">
              Don't have you accaunt?
            </h1>
            <Link href={""} className="ml-1 text-[#6941C6] font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
  )
}

export default RegisterForm