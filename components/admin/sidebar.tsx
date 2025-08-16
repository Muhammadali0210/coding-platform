import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { FolderOpen, LayoutDashboard, ListTree } from 'lucide-react'
import { NavUser } from './nav-user'

const Sidebar = () => {
  return (
    <div className='w-[296px] min-w-[296px] h-[100vh] p-[6px] pr-0'>
        <div className='border border-border rounded-[12px] h-full flex flex-col justify-between'>
          <div>
            <div className='p-5'>
              <Link href={'/admin'} >
                <Image src="/brand/codemap-logo.svg" alt="Logo" width={200} height={50} className='' />
              </Link>
            </div>

            <div className='px-5 pb-[4px] mt-4 text-[12px] leading-[18px] uppercase text-[#717680] font-bold' >
              General
            </div>

            <div className='px-4'>
              <Link href={'/admin'}>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <LayoutDashboard className='w-4 h-4 mr-2 text-gray-400' />
                  Dashboard
                </Button>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <FolderOpen className='w-4 h-4 mr-2 text-gray-400' />
                  Materials
                </Button>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <ListTree className='w-4 h-4 mr-2 text-gray-400' />
                  Community
                </Button>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <LayoutDashboard className='w-4 h-4 mr-2 text-gray-400' />
                  Dashboard
                </Button>
              </Link>
            </div>

            <div className='px-5 pb-[4px] mt-4 text-[12px] leading-[18px] uppercase text-[#717680] font-bold' >
              Learning
            </div>

            <div className='px-4'>
              <Link href={'/admin'}>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <LayoutDashboard className='w-4 h-4 mr-2 text-gray-400' />
                  Dashboard
                </Button>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <FolderOpen className='w-4 h-4 mr-2 text-gray-400' />
                  Materials
                </Button>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <ListTree className='w-4 h-4 mr-2 text-gray-400' />
                  Community
                </Button>
                <Button className='w-full h-10 justify-start text-left' variant='ghost' size='sm'>
                  <LayoutDashboard className='w-4 h-4 mr-2 text-gray-400' />
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>

          <NavUser />
        </div>
    </div>
  )
}

export default Sidebar