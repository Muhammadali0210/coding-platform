const Tag = ({name, small = false}: {name: string, small?: boolean}) => {
  return (
    <div
        className={"bg-slate-200 dark:bg-gray-800 hover:bg-slate-200 border-none text-p font-medium" + (small ? "text-[14px] px-3 py-1 rounded-[6px]" : "py-2 rounded-[8px] p-2 px-5 text-[16px]")}
    >
        #{name}
    </div>
  )
}

export default Tag
