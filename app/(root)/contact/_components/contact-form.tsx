import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


const ContactForm = () => {
  return (
    <div className="flex justify-center">
      <form action="" className="flex flex-col justify-center p-10 w-[550px]">
        <h1 className="text-h font-bold leading-[44px] text-[36px]">
          Get in touch
        </h1>
        <p className="text-p text-[20px] leading-[30px] mt-[20px]">
          Our friendly team would love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-[48px]">
          <div>
            <Label className="text-[14px] text-p leading-[20px]">Ism *</Label>
            <Input type="text" placeholder="Ism" className="mt-4 h-[44px]" />
          </div>
          <div>
            <Label className="text-[14px] text-p leading-[20px]">Ism *</Label>
            <Input type="text" placeholder="Ism" className="mt-4 h-[44px]" />
          </div>
        </div>

        <Label className="mt-[24px] text-[14px] text-p leading-[20px]">
          Email *
        </Label>
        <Input type="email" placeholder="Email..." className="mt-4 h-[44px]" />

        <div className="mt-[24px]">
          <Label className="text-[14px] text-p leading-[20px]">
            Telefon nomer *
          </Label>

          <div className="flex relative items-center mt-4">
            <select className="absolute left-2 text-[14px] leading-[20px] text-p top-1/2 -translate-y-1/2 bg-transparent pr-2 focus:outline-none">
              <option
                className="bg-background text-[14px] leading-[20px] text-p  "
                value="+998"
              >
                UZ
              </option>
              <option
                className="bg-background text-[14px] leading-[20px] text-p  "
                value="+7"
              >
                RU
              </option>
              <option
                className="bg-background text-[14px] leading-[20px] text-p  "
                value="+1"
              >
                KR
              </option>
            </select>

            <Input
              type="number"
              placeholder="Telefon nomer..."
              className="h-[44px] pl-20"
            />
          </div>
        </div>

        <Label className="mt-[24px]  text-[14px] text-p leading-[20px]">
          Xabar *
        </Label>
        <Textarea placeholder="Xabar..." className="mt-4 h-[134px]" />

        <div className=" mt-[24px]  flex justify-start items-center">
          <Checkbox className="dark:text-white" />
          <p className="ml-2 text-p text-md leading-[24px]">
            You agree to our friendly
            <span className="underline">privacy policy.</span>
          </p>
        </div>

        <Button className="h-[44px] mt-[38px]" type="submit">
          Yuvorish
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
