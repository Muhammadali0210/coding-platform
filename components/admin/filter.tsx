import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ListFilter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Filter = () => {
  return (
    <div className="flex justify-between items-center">
      <Tabs defaultValue="account" className="w-[500px]">
        <TabsList className="bg-card">
          <TabsTrigger
            className="text-p text-sm leading-[20px] px-3 py-2 "
            value="all "
          >
            All
          </TabsTrigger>
          <TabsTrigger
            className="text-p text-sm leading-[20px] px-3 py-2 "
            value="Public"
          >
            Public
          </TabsTrigger>
          <TabsTrigger
            className="text-p text-sm leading-[20px] px-3 py-2 "
            value="Private"
          >
            Private
          </TabsTrigger>
        </TabsList>
      </Tabs>
      <div className="flex items-center gap-6">
        <Input placeholder="Qidirish..." className=" " />

        <Popover>
          <PopoverTrigger>
            <Button>
              <ListFilter className="text-white" />
              Filter
            </Button>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Filter;
