import { Input } from '@/components/ui/input'
import { HelpCircle, Search } from 'lucide-react'
import React from 'react'

const SearchInput = () => {
  return (
    <div className='relative w-full'>
        <Input
          type="text"
          placeholder="Search article..."
          className="pl-[40px] pr-[40px] py-[6px] h-[50px] text-[18px] leading-[20px] font-medium"
        />
        <Search className="w-[20px] h-[20px] text-gray-500 absolute top-[14px] left-[10px]" />
        <HelpCircle className="w-[20px] h-[20px] text-gray-500 absolute top-[14px] right-[10px]" />
    </div>
  )
}

export default SearchInput