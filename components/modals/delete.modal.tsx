"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "../ui/button"
import { Trash2, X } from "lucide-react"

interface DeleteModalProps {
    open: boolean
    onOpenChange: (open: boolean) => void
    onConfirm: () => void
    loading: boolean
    title?: string
    description?: string
}

export function DeleteModal({
    open,
    onOpenChange,
    onConfirm,
    loading,
    title,
    description
}: DeleteModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[426px] p-6 bg-white dark:bg-sidebar">
                <DialogHeader className="sr-only">
                    <DialogTitle>hidden</DialogTitle>
                    <DialogDescription>hidden</DialogDescription>
                </DialogHeader>

                <div className="w-full flex flex-col">
                    <div className="w-full flex justify-between mb-4">
                        <div className="w-[48px] h-[48px] rounded-full flex justify-center items-center bg-[#FFF1F2] dark:bg-[#F43F5E]/10">
                            <Trash2 className="text-[#F43F5E] w-6 h-6" />
                        </div>

                        <Button variant={"ghost"} onClick={() => onOpenChange(false)} size={"icon"} className="w-[44px] h-[44px] p-0 px-0 py-0">
                            <X className="w-6 h-6 min-w-6 min-h-6 text-gray-500" />
                        </Button>

                    </div>

                    <h2 className="text-[16px] leading-[24px] text-h font-semibold">{title ? title : "Delete blog post"}</h2>
                    <p className="text-[14px] leading-[20px] text-p mt-[2px]">{description ? description : "Are you sure you want to delete this blog post?"}</p>

                    <div className="w-full grid grid-cols-2 gap-2 mt-8">
                        <Button onClick={() => onOpenChange(false)} className="h-[48px]" variant={"outline"}>Yo'q</Button>
                        <Button onClick={onConfirm} className="bg-[#F43F5E] hover:opacity-85 hover:bg-[#F43F5E] h-[48px] p-0">
                            {loading ? (
                                <div className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <p>O'chirilmoqda</p>
                                </div> ) : (
                                <p>Ha</p>
                            )}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}