import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LogIn = () => {
 
  return (
    <div className="relative flex flex-col  ">
      {/* Yuqoridagi logo */}
      <div className="">
        <Link href="/" className="flex items-center">
          <Image
            src="/codemap-logo.png"
            alt="Nav logo"
            width={200}
            height={200}
            className="object-cover"
          />
        </Link>
      </div>

      {/* O'rtadagi form */}
      <div className="flex flex-1 items-center justify-center">
        <div className="p-6 rounded-2xl w-[400px]">
          <div className="flex justify-center">
            <Image
              src="/codemap-profille.png"
              alt="Profile"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-[24px]">
            <h1 className="text-[30px] text-[#181D27] font-bold leading-[38px]">
              Welcome back
            </h1>
            <p className="leading-[24px] text-[#535862] text-[16px] mt-[12px]">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form className="mt-[32px]" action="">
            <Label
              className="text-sm text-[#414651] leading-[20px] font-inter"
              htmlFor="email"
            >
              Email
            </Label>
            <Input
              className="mt-[6px] px-[14px] py-[10px] text-[#717680] text-[16px] leading-[24px]"
              type="text"
              placeholder="Email"
            />

            <Label
              className="mt-[20px] text-sm text-[#414651] leading-[20px] font-inter"
              htmlFor="password"
            >
              Password
            </Label>
            <Input
              className="mt-[6px] px-[14px] py-[10px] text-[#717680] text-[16px] leading-[24px]"
              type="password"
              placeholder="Password..."
            />

            <div className="grid grid-cols-2 text-[14px] leanding-[20px] mt-[24px]">
              <div className="flex items-center">
                <input
                  className="border-[#D5D7DA] w-[16px] h-[16px]"
                  type="checkbox"
                />
                <h2 className="text-[#414651]  ml-1">Remember for 30 days</h2>
              </div>
              <Link href="/" className="flex items-center justify-end">
                <h1 className="text-[#6941C6] font-bold">Forgot password</h1>
              </Link>
            </div>

            <Button className="w-full text-white mt-5">Kirish</Button>
          </form>

          <Button
            className="text-[#414651] text-md leanding-md raunded-md border-[#D5D7DA] w-full py-[10px] mt-[16px]"
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
            <h1 className=" text-[14px] text-[#535862] leanding-[20px]">
              Don't have you accaunt?
            </h1>
            <Link href={""} className="ml-1 text-[#6941C6] font-bold">
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Pastdagi matn */}
      <div className="p-6">
        <h1 className="text-[14px] leading-[20px] text-[#535862]">
          United UI 2025
        </h1>
      </div>
    </div>
  );
};

export default LogIn;
