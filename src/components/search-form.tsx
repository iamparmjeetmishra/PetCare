'use client'

import { useSearchContext } from "@/lib/hooks";
import { Input } from "./ui/input";

export default function SearchForm() {
  const { searchQuery, handleChangeSearchQuery} = useSearchContext()
  return (
    <form className="h-full w-full">
      <Input
        className=" bg-white/20 rounded-md px-5 border-none outline-none transition focus:bg-white/50 hover:bg-white/30 placeholder:text-white/50 "
        placeholder="Search pet"
        type="search"
        value={searchQuery}
        onChange={(e) => handleChangeSearchQuery(e.target.value)}
      />
    </form>
  )
}
