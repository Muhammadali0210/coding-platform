'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Bot, ChevronRight, CircleUserRound, FolderOpen, LayoutDashboard, MessageCircleQuestionMark, MessageSquareCode, Settings, Users } from 'lucide-react'
import { NavUser } from './nav-user'
import { useSidebarStore } from '@/store/sidebar.store'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const { isOpenSidebar, toggleSidebar } = useSidebarStore();
  const pathname = usePathname();

  const sidebarData = [
    {
      name: "General",
      links: [
        {
          name: "Dashboard",
          href: "/admin/dashboard",
          icon: <LayoutDashboard className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C] group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <LayoutDashboard className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
        {
          name: "Materials",
          href: "/admin/materials",
          icon: <FolderOpen className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C]  group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <FolderOpen className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
        {
          name: "Community",
          href: "/admin/community",
          icon: <MessageSquareCode className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C]  group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <MessageSquareCode className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
      ],
    },
    {
      name: "Learning",
      links: [
        {
          name: "Ai mentor",
          href: "/admin/ai",
          icon: <Bot className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C]  group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <Bot className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
        {
          name: "Users",
          href: "/admin/users",
          icon: <Users className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C]  group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <Users className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
        {
          name: "Profile",
          href: "/admin/profile",
          icon: <CircleUserRound className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C]  group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <CircleUserRound className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
      ],
    },
  ]

  const sidebarBottomData = [
    {
      name: "",
      links: [
        {
          name: "Support",
          href: "/admin/ai",
          icon: <MessageCircleQuestionMark className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C]  group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <MessageCircleQuestionMark className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
        {
          name: "Settings",
          href: "/admin/settings",
          icon: <Settings className='w-5 h-5 text-[#A4A7AE] dark:text-[#61656C]  group-hover:text-primary dark:group-hover:text-white' strokeWidth={2.75} />,
          iconActive: <Settings className='w-5 h-5 text-primary dark:text-white' strokeWidth={2.75} />,
        },
      ],
    },
  ]
  return (
    <div className={cn(isOpenSidebar ? 'w-[296px] min-w-[296px]' : 'w-auto', 'h-[100vh] p-[6px] pr-0 transition-all duration-300')}>
      <div className='border border-border rounded-[12px] h-full flex flex-col justify-between relative'>
        <div>
          {isOpenSidebar ? (
              <div className='p-5 mt-0'>
                <Link href={'/'} >
                  <Image src="/brand/codemap-logo-white.svg" alt="Logo" width={180} height={50} className='' />
                </Link>
              </div>
            ) : (
              <div className='w-full flex justify-center mt-[26px]'>
                <Link href={'/'} >
                  <Image src="/brand/logo-outline.png" alt="Logo" width={40} height={40} className='' />
                </Link>
              </div>
          )}

          <div onClick={toggleSidebar} className='cursor-pointer absolute top-[29px] -right-[16px] h-[32px] border border-border w-[32px] bg-background rounded-full flex justify-center items-center z-50 transition-all duration-300'>
            <ChevronRight width={16} height={16} className={isOpenSidebar ? 'rotate-180' : 'rotate-0'} />
          </div>

          {sidebarData.map((section, index) => (
            <div key={index} className='mt-6'>
              {isOpenSidebar ? (
                <div className='px-5 pb-[4px] text-[12px] leading-[18px] uppercase text-[#717680] font-bold'>
                  {section.name}
                </div>
              ) : <div className='h-[1px] w-[70%] mx-auto bg-border mb-6'></div>}
              <div className='px-4 flex flex-col gap-2'>
                {section.links.map((link, linkIndex) => (
                  <Link href={link.href} key={linkIndex}>
                    <Button
                      className={cn(
                        'flex justify-start gap-2 text-left hover:dark:bg-[#22262F] group',
                        isOpenSidebar ? "w-full h-10 p-0 px-3" : "w-10 h-10 p-0",
                        pathname.startsWith(link.href) ? "bg-accent dark:bg-[#22262F]" : "bg-transparent"
                      )}
                      variant='ghost'
                    >
                      {pathname.startsWith(link.href) ? link.iconActive : link.icon }
                      {isOpenSidebar && link.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          {sidebarBottomData.map((section, index) => (
            <div key={index}>
              {isOpenSidebar && (
                <div className='px-5 pb-[4px] mt-4 text-[12px] leading-[18px] uppercase text-[#717680] font-bold'>
                  {section.name}
                </div>
              )}
              <div className='px-4 flex flex-col gap-2'>
                {section.links.map((link, linkIndex) => (
                  <Link href={link.href} key={linkIndex}>
                    <Button
                      className={cn(
                        'flex justify-start gap-2 text-left group hover:dark:bg-[#22262F]',
                        isOpenSidebar ? "w-full h-10 p-0 px-3" : "w-10 h-10 p-0",
                        pathname.startsWith(link.href) ? "bg-accent" : "bg-transparent"
                      )}
                      variant='ghost'
                    >
                      {pathname.startsWith(link.href) ? link.iconActive : link.icon }
                      {isOpenSidebar && link.name}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <NavUser isOpenSidebar={isOpenSidebar} />
        </div>
      </div>
    </div>
  )
}

export default Sidebar