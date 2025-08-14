import Link from "next/link";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
function footer() {
  const SCIAL_LINK = [
    { icon: Instagram, href: "/" },
    { icon: Facebook, href: "/" },
    { icon: Twitter, href: "/" },
    { icon: Linkedin, href: "/" },
  ];

  const FOOTER_LINKS = [
    {
      title: "Kompanya",
      links: [
        { label: "Biz haqimizda", href: "/about" },
        { label: "Blog", href: "/blog" },
        { label: "Ommaviy oferta", href: "/offer" },
      ],
    },
    {
      title: "Ma’lumot",
      links: [
        { label: "Bog‘lanish", href: "/contact" },
        { label: "Bo‘lib to‘lash", href: "/installment" },
        { label: "FAQ", href: "/faq" },
        { label: "Fikrlar", href: "/reviews" },
      ],
    },
    {
      title: "Manzil",
      address: "Toshkent shahar, Uchtepa tumani, Tashabbuskor ko‘chasi 4-uy",
    },
  ];

  return (
    <div className="container">
      <div className="w-full bg-[#090127] rounded-[32px] p-[40px]">
        <div className="grid grid-cols-2 py-[39px] border-b border-[#4D5560]">
          <Link href={"/"}>
            <div className="flex items-center  ">
              <Image
                            src="/codemap-logowhite.png"
                            alt="Nav logo"
                            width={200} 
                            height={200}
                            className="object-cover "
                          />
            </div>
          </Link>
          <div className="flex justify-end gap-[24px]">
            {SCIAL_LINK.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <IconComponent size={24} className="text-[#D4D4DD]" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="border-b border-[#4D5560] grid grid-cols-2 py-[40px]">
          <div>
            <h1 className="text-[40px] text-white">abubakrsobitov2002@gmail.com</h1>
            <h1 className="text-[40px] text-white">+998 20 020 4935</h1>
          </div>

          <div className="grid grid-cols-3 gap-[80px]">
            {FOOTER_LINKS.map((section, index) => (
              <div key={index}>
                <h3 className="text-[20px] mb-[16px] text-white font-simibold">
                  {section.title}
                </h3>
                {section.links ? (
                  <ul className="space-y-[8px] text-[16px] text-[#D4D4DD]">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href} className="">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[16px] text-[#D4D4DD]">{section.address}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-[#9498A7] mt-[24px] text-[16px] grid grid-cols-2">
          <span className="flex justify-start">Lorem ipsum dolor sit amet.</span>
          <span className="flex justify-end">
            Lorem ipsum<span className="text-white"> dolorsit amet.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default footer;
