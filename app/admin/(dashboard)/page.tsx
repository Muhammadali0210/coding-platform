'use client'
import { DeleteModal } from '@/components/modals/delete.modal'
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'

const Page = () => {
  const [loading, setLoading] = useState(false)
  const [isOpenDialog, setIsOpenDialog] = useState(false)
  const handleDelete = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
    console.log('Delete confirmed')
  }

  return (
    <div className='w-full p-6'>
      <Button
        onClick={() => setIsOpenDialog(true)}
        >Delete</Button>
      Dashboard
      <DeleteModal
        open={isOpenDialog}
        onOpenChange={(setOpen: boolean) => setIsOpenDialog(setOpen)}
        onConfirm={() => handleDelete()}
        loading={loading}
      />
      <p className='text-2xl'>This is the dashboard page.</p>
    </div>
  )
}

export default Page