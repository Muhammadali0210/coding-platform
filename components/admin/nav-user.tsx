"use client"

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function NavUser({isOpenSidebar}: {isOpenSidebar: boolean}) {

  return (
    <div className="p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
              {isOpenSidebar ? (
                <div className="flex items-center gap-2 border border-border rounded-lg p-3 cursor-pointer">
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={'/test/Avatar.svg'} alt={"John"} />
                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                  </Avatar>
                    <>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">Muhammadali</span>
                        <span className="truncate text-xs">test01@gmail.com</span>
                      </div>
                      <ChevronsUpDown className="ml-auto size-4" />
                    </>
                </div>
              ) : (
                <Avatar className="h-10 w-10 rounded-lg mx-auto cursor-pointer">
                  <AvatarImage src={'/test/Avatar.svg'} alt={"John"} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
              )}
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg border border-border"
            side={"right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage src={'/test/Avatar.svg'} alt={"John"} />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">Muhammadali</span>
                <span className="truncate text-xs">test01@gmail.com</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Sparkles />
                Upgrade to Pro
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCard />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}
