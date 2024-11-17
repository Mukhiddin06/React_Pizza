import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hooks/useAxios"
import { SetStateAction, useEffect, useState } from "react"

interface CategoryType {
  id: string | number
  name: string
  isActive: boolean
}

interface CategoryStateType {
  setCategoryId:React.Dispatch<SetStateAction< number| string>>
}


const HomeCategory = ({setCategoryId}:CategoryStateType) => {


  const { data = [] } = useQuery({
    queryKey: ["category"],
    queryFn: () => useAxios().get("/category").then(res => res.data)
  })
  const [categories, setCategories] = useState<CategoryType[]>(data)

  useEffect(() => setCategories(data), [data])

  function handleClick(item:CategoryType){
    setCategoryId(item.id)
    const uptadeCategory = categories.map((category) => ({
      ...category,
      isActive: category.id == item.id
    }))
    setCategories(uptadeCategory)
  }


  return (
      <div className="pt-[40px] px-[50px] pb-[32px] bg-white flex items-center justify-between">
        <div className="flex items-center space-x-[10px]">
          {categories.map((item: CategoryType) => (
            <button onClick={() => handleClick(item)} className={`rounded-[30px] font-bold text-[16px] leading-[19.49px] py-[16px] px-[30px] ${item.isActive ? "text-[#FFFFFF] bg-[#282828]" : "text-[#2C2C2C] bg-[#F9F9F9]"}`} key={item.id}>{item.name}</button>
          ))}
        </div>
        <div className="flex items-center space-x-[10px]">
          <p className="font-bold tetx-[14px] leading-[17.05px] text-[#2C2C2C]">Сортировка по:</p>
          <select className="outline-none text-[#FE5F1E] w-[140px]">
            <option value="популярности">популярности</option>
            <option value="по цене">по цене</option>
            <option value="по алфавиту">по алфавиту</option>
          </select>
        </div>
      </div>
  )
}

export default HomeCategory