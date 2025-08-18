import RegisterForm from "@/components/form/register.form";
import Banner from "@/components/auth/banner";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className="min-h-screen grid md:grid-cols-2 p-[24px] ">
      <div className="relative flex flex-col  ">
        {/* Yuqoridagi logo */}
        <div>
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
        <RegisterForm />
        <div className="p-6">
          <h1 className="text-[14px] leading-[20px] text-[#535862]">
            United UI 2025
          </h1>
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Page;
