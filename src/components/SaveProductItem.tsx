import React from "react"
import { ProductType } from "./HomeProducts"
import { ClearIcons, DecIcon, IncrIcon } from "../assets/Icons"
import { useDispatch } from "react-redux"
import { decrementItem, incrementItem, removeItem } from "../store/SavedSlice"

const SaveProductItem: React.FC<{ item: ProductType }> = ({ item }) => {
    const dispatch = useDispatch()

    return (
        <div className="flex justify-between items-center py-[30px] border-t-[2px] border-t-[#F4F4F4]">
            <div className="flex items-center space-x-[15px]">
                <img className="h-[80px] rounded-lg" src={item.img} alt="Pizza Img" width={80} height={80} />
                <div className="flex flex-col w-[300px]">
                    <h2 className="font-bold text-[22px] leading-[26.8px]">{item.title}</h2>
                    <div className="flex space-x-2">
                        <p className="text-[18px] leading-[22px] text-[#8D8D8D]">{item.type}  тесто,</p>
                        <p className="text-[18px] leading-[22px] text-[#8D8D8D]">{item.size}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center space-x-[12px]">
                <button onClick={() => dispatch(decrementItem(item))}><IncrIcon/></button>
                <p className="text-[22px] leading-[26.8px] font-bold">{item.savedCount}</p>
                <button onClick={() => dispatch(incrementItem(item))}><DecIcon/></button>
            </div>
            <p className="font-bold text-[22px] leading-[26.8px]">{item.price} ₽</p>
            <button onClick={() => dispatch(removeItem(item.id))}><ClearIcons/></button>
        </div>
    )
}

export default SaveProductItem