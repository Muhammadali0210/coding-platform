'use client'
import Filter from '@/components/admin/filter'
import Header from '@/components/admin/header'
import MaterialCard from '@/components/cards/material.card'
import Pagination from '@/components/shared/pagination'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const Page = () => {
  const breadckrupData = [
    { name: 'Materials', href: '/admin/materials' },
  ]
  return (
    <div className='p-8'>
      <Header data={breadckrupData} isVisable url='/admin/materials/create' />
      
      <Filter/>
      <div className="grid grid-cols-4 gap-6 mt-[48px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
              <MaterialCard key={item} />
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
              <p className="text-[14px] leading-[20px] font-bold text-[#475569]">Showing 1 to 12 of 100 entries</p>

              <Pagination limit={10} total={100} currentPage={1} onPageChange={() => {}} />
          </div>
    </div>
  )
}

export default Page