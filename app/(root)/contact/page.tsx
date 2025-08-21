import ContactForm from "./_components/contact-form";
import Image from "next/image";

const page = () => {
  return (
    <div className="container grid lg:grid-cols-2  gap-4">
      <ContactForm />
      <div className="relative h-[80vh] w-full">
        <Image
          src="/test/Conatact_banner.png"
          alt="Contact banner"
          width={500}
          height={900}
          className="object-cover mx-auto"
        />
      </div>
    </div>
  );
};

export default page;
