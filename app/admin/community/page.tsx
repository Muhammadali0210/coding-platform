import Header from '@/components/admin/header'
import React from 'react'

const Page = () => {
  const breadckrupData = [
    { name: 'Community', href: '/admin/community' },
  ]
  return (
    <div className='p-8'>
      <Header data={breadckrupData} isVisable url='/admin/community/create' />
    </div>
  )
}

export default Page