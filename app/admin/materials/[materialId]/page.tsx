import Header from '@/components/admin/header'
import { SimpleEditor } from '@/components/tiptap-templates/simple/simple-editor'
import React from 'react'

const Page = () => {
    const breadckrupData = [
         { name: 'Materials', href: '/admin/materials' },
        { name: 'Create', href: '/admin/materials/create' },
    ]
  return (
    <div className='p-8'>
      <Header data={breadckrupData} />
     <div className='w-[400px]'> <SimpleEditor /></div>
    </div>
  )
}

export default Page