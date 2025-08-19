import { ChevronRight, Home, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { Separator } from "../ui/separator"
interface Props {
    name: string,
    href: string
}
const Header = ({data, isVisable, url}: {data: Props[], isVisable?: boolean, url?: string}) => {
  return (
    <>
        <div className="w-full flex items-center justify-between min-h-10">
            <div className="w-full flex items-center">
                <Link href={"/admin/dashboard"} className="group" >
                    <Home className="w-5 h-5 text-inactive group-hover:text-active transition-all duration-200" />
                </Link>
                {data.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 ml-2">
                        <ChevronRight className="w-5 h-5 text-icon" />
                        <Link href={item?.href} className={cn(data?.length - 1 === index ? "text-active" : "text-inactive", "hover:text-active text-[16px] leading-[24px] font-bold  transition-all duration-200")}>
                            {item?.name}
                        </Link>
                    </div>
                ))}
            </div>

            {isVisable && <Link href={url ? url : "#"} ><Button className="min-h-10 flex items-center gap-2 font-semibold" size={"lg"}>Save<Plus className="w-[22px] h-[22px] text-white" /></Button></Link>}
        </div>

        <Separator className='my-4' />
    </>
  )
}

export default Header