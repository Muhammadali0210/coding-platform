
import Users from './_components/users'
import UserFilter from './_components/user-filter'

const Page = () => {
  return (
    <div className='w-full p-8'>
      <UserFilter/>
      <Users/>
    </div>
  )
}

export default Page