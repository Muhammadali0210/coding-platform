import Header from '@/components/admin/header'
import TailwindAdvancedEditor from '@/components/tailwind/advanced-editor'
const Page = () => {
  const breadckrupData = [
    { name: 'Materials', href: '/admin/materials' },
    { name: 'Create', href: '/admin/materials/create' },
  ]
  return (
    <div className='p-8'>
      <Header data={breadckrupData} />
           <TailwindAdvancedEditor />
    </div>
  )
}

export default Page