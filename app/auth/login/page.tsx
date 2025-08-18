'use client';
import Banner from "@/components/auth/banner";
import Image from "next/image";
import LoginForm from "@/components/form/login.form";
import Link from "next/link";
const Page = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 p-[24px] ">
      <div className="relative flex flex-col  ">
        {/* Yuqoridagi logo */}
        <div>
          <Link href="/">
            <Image
              src="/brand/codemap-logo.png"
              alt="Nav logo"
              width={200}
              height={50}
              className="object-cover"
            />
          </Link>
        </div>
        <LoginForm />
        <div className="p-6">
          <h1 className="text-[14px] leading-[20px] text-p">
            United UI 2025
          </h1>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Page;

