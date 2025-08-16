'use client'
import { ModeToggle } from "@/components/shared/mode-toggle"
import Pagination from "@/components/shared/pagination"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Page = () => {
  return (
    <div className="container min-h-[80vh]">Page
    
      <ModeToggle />
      <div className="mt-10">
        <p>Button</p>

        <Button>Default</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>

        <Input className="mt-4 h-[48px] w-[200px]" placeholder="Input" />
        <br />
        <Input className="mt-4 h-[48px] w-[200px] rounded-[12px]" placeholder="Input" />
        <br />
      </div>
      <Button>Are you sure</Button>

      <div className="w-[400px] border border-gray-200"></div>
      <br />
      <div className="w-[400px] border border-border"></div>


      <div className="mt-2">
        <p>Pagination</p>

        <Pagination total={100} limit={10} currentPage={1} onPageChange={() => {}} />
      </div>
    </div>
  )
}

export default Page