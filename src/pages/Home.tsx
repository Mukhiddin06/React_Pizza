import { useState } from "react"
import HomeCategory from "../components/HomeCategory"
import HomeProducts from "../components/HomeProducts"


const Home = () => {
   const [categoryId, setCategoryId] = useState<number | string>("")


    return (
        <>
            <div className="pl-[45px] pr-[55px] pb-[63px] bg-[#FFDF8C]">
                <HomeCategory setCategoryId={setCategoryId}/>
                <HomeProducts categoryId={categoryId}/>
            </div>
        </>
    )
}

export default Home