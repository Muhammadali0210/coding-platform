"use client"

import { useMemo } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

type PaginationProps = {
    total: number
    limit: number
    currentPage?: number
    onPageChange: (page: number) => void
}

const Pagination = ({ total, limit, currentPage = 1, onPageChange }: PaginationProps) => {
    const totalPages = Math.ceil(total / limit)

    const paginationRange = useMemo(() => {
        const range: (number | "...")[] = []
        const delta = 2

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) range.push(i)
        } else {
            const left = Math.max(2, currentPage - delta)
            const right = Math.min(totalPages - 1, currentPage + delta)

            range.push(1)

            if (left > 2) range.push("...")

            for (let i = left; i <= right; i++) {
                range.push(i)
            }

            if (right < totalPages - 1) range.push("...")

            range.push(totalPages)
        }

        return range
    }, [totalPages, currentPage])
    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages || page === currentPage) return
        onPageChange(page)
    }

    return (
        <div className="flex items-center justify-center gap-4 w-[max-content]">
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center cursor-pointer"
            >
                <ChevronLeft className="w-[20px] h-[20px] font-bold" />
            </button>

            <div className="flex items-center">
                {paginationRange.map((item, index) =>
                    typeof item === "number" ? (
                        <button
                            key={index}
                            className={cn('w-10 h-10 rounded-full cursor-pointer flex items-center justify-center text-[16px] leading-[22px] font-medium', item === currentPage ? "text-[#2563EB] border border-[#A4B8F8]" : "text-[#475569] bg-transparent border border-transparent")}
                            onClick={() => goToPage(item)}
                        >
                            {item}
                        </button>
                    ) : (
                        <span key={index} className="font-semibold text-[#475569] text-[14px] leading-[20px] tracking-tighter">
                            ...
                        </span>
                    )
                )}
            </div>

            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10 border border-border rounded-full flex items-center justify-center cursor-pointer"
            >
                <ChevronRight className="w-[20px] h-[20px] font-bold" />
            </button>
        </div>
    )
}

export default Pagination
