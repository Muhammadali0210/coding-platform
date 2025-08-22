import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const UserFilter = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-xl font-semibold">User Filter</h1>
      
      <div className="relative w-[250px]">
        <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input 
          type="text" 
          placeholder="Search users..." 
          className="pl-8" 
        />
      </div>
    </div>
  )
}

export default UserFilter
