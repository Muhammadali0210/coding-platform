import Header from '@/components/admin/header'
import React from 'react'

const Page = () => {
    const breadckrupData = [
         { name: 'Materials', href: '/admin/materials' },
        { name: 'Create', href: '/admin/materials/create' },
    ]
  return (
    <div className='p-8'>
      <Header data={breadckrupData} />
    </div>
  )
}

export default Page