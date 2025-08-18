import Header from '@/components/admin/header'
import React from 'react'

const Page = () => {
    const breadckrupData = [
         { name: 'Community', href: '/admin/community' },
        { name: 'Create', href: '/admin/community/create' },
    ]
  return (
    <div className='p-8'>
      <Header data={breadckrupData} />
    </div>
  )
}

export default Page