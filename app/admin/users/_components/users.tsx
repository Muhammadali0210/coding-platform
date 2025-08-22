"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import { MoreVertical, Pencil, Trash2, User2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Pagination from "@/components/shared/pagination";
const Users = () => {
  const userdata = [
    {
      first_name: "Abubakir ",
      last_name: "Sobitov",
      email: "abubakirsobitov2002@gmail.com",
      avatar: "/",
      createdata: "21-08-2025",
      updatedata: "22-08-2025",
      materialcount: 13,
      answercount: 7,
    },
    {
      first_name: "Abubakir ",
      last_name: "Sobitov",
      email: "abubakirsobitov2002@gmail.com",
      avatar: "/",
      createdata: "21-08-2025",
      updatedata: "22-08-2025",
      materialcount: 13,
      answercount: 7,
    },
    {
      first_name: "Abubakir ",
      last_name: "Sobitov",
      email: "abubakirsobitov2002@gmail.com",
      avatar: "/",
      createdata: "21-08-2025",
      updatedata: "22-08-2025",
      materialcount: 13,
      answercount: 7,
    },
    {
      first_name: "Abubakir ",
      last_name: "Sobitov",
      email: "abubakirsobitov2002@gmail.com",
      avatar: "/",
      createdata: "21-08-2025",
      updatedata: "22-08-2025",
      materialcount: 13,
      answercount: 7,
    },
    {
      first_name: "Abubakir ",
      last_name: "Sobitov",
      email: "abubakirsobitov2002@gmail.com",
      avatar: "/",
      createdata: "21-08-2025",
      updatedata: "22-08-2025",
      materialcount: 13,
      answercount: 7,
    },
    {
      first_name: "Abubakir ",
      last_name: "Sobitov",
      email: "abubakirsobitov2002@gmail.com",
      avatar: "/",
      createdata: "21-08-2025",
      updatedata: "22-08-2025",
      materialcount: 13,
      answercount: 7,
    },
  ];
  return (
    <div>
      <div className="border dark:border-[#22262F] border-[#E9EAEB] rounded-[20px] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <div className="flex items-center">
                  <span className="ml-2 text-p leading-[18px]">
                    Ism familya
                  </span>
                </div>
              </TableHead>
              <TableHead className="text-p leading-[18px]">
                Yaratilgan vaqti
              </TableHead>
              <TableHead className="text-p leading-[18px]">
                O‘zgartirilgan vaqti
              </TableHead>
              <TableHead className="text-p leading-[18px]">
                Material soni
              </TableHead>
              <TableHead className="text-p leading-[18px] ">
                Savol soni
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {userdata.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <div className="flex items-center gap-3 py-[14px] ml-2">
                    <Image
                      className="rounded-full"
                      src="/test/avatar.jpg"
                      alt="Nav logo"
                      height={40}
                      width={40}
                    />
                    <div>
                      <h1 className="text-sm text-h">
                        {item.first_name} {item.last_name}
                      </h1>
                      <p className="text-sm text-p">{item.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm text-h">
                  {item.createdata}
                </TableCell>
                <TableCell className="text-sm text-h">
                  {item.updatedata}
                </TableCell>
                <TableCell className="text-sm text-h">
                  {item.materialcount} ta
                </TableCell>

                <TableCell className="text-sm text-h">
                  <div className="flex justify-between items-center">
                    <span>{item.answercount} ta</span>
                    <Popover>
                      <PopoverTrigger>
                        <MoreVertical className="text-p cursor-pointer" />
                      </PopoverTrigger>
                      <PopoverContent className="w-[150px] cursor-pointer mr-8 space-y-3">
                        <p className="flex hover:bg-backgraund  gap-2 text-p text-sm">
                          <Pencil height={20} /> O'zgartrish
                        </p>
                        <Separator></Separator>
                        <p className="flex gap-2 text-p text-sm">
                          <Trash2 height={20} /> O'chirish
                        </p>
                        <Separator></Separator>
                        <p className="flex gap-2  text-p text-sm">
                          <User2 height={20} /> Profil
                        </p>
                      </PopoverContent>
                    </Popover>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between mt-8">
        <p className="text-[14px] leading-[20px] font-bold text-[#475569]">
          Showing 1 to 12 of 100 entries
        </p>

        <Pagination
          limit={10}
          total={100}
          currentPage={1}
          onPageChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Users;
