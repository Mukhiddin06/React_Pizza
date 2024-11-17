import { Segmented } from "antd";
import { ProductType } from "./HomeProducts"
import { useDispatch} from "react-redux";
import { createSave } from "../store/SavedSlice";
import { useState } from "react";

const HomeProductItem: React.FC<{ item: ProductType }> = ({ item }) => {

    const typeName:string[] = ['тонкое', 'традиционное'] 
    const sizeName:string[] = ['26 см.', '30 см.', '40 см.']
    const [selectedType, setSelectedType] = useState<string>(typeName[0]);
    const [selectedSize, setSelectedSize] = useState<string>(sizeName[0]);

    const [count, setCount] = useState<number>(0)

    const dispatch = useDispatch()

    function handleClick(item:ProductType){
        const updatedItem = {
            ...item,
            size: selectedSize,
            type: selectedType
        };
        
        dispatch(createSave(updatedItem))
        setCount(count + 1)
    }
    
    return (
        <div className="w-[280px] text-center mb-[65px]">
            <img className="rounded-[10px]" src={item.img} alt="Pizza" width={260} height={260} />
            <h3 className="font-bold text-[20px] leading-[24.36px] mt-[11px] mb-[22px]">{item.title}</h3>
            <Segmented<string>
                options={typeName}
                size="large"
                className="font-bold"
                onChange={(value) => {
                    setSelectedType(value)
                }}
            />
            <Segmented<string>
                options={sizeName}
                size="large"
                className="font-bold"
                onChange={(value) => {
                    setSelectedSize(value)
                }}
            />
            <div className="flex items-center space-x-[45px] pt-[17px]">
                <p className="font-bold text-[22px] leading-[26.8px]">от {item.price} ₽</p>
                <button onClick={() => handleClick(item)} className={`relative font-bold text-[16px] leading-[19.49px] rounded-[30px] py-[11px] ${count == 0 ? "px-[18px]" : "pl-[5px] pr-[31px]"} text-[#EB5A1E] border-[2px] border-[#EB5A1E] bg-white hover:bg-[#EB5A1E] hover:text-white duration-300`}> + Добавить <span className={`absolute px-[5px] bg-[#FE5F1E] right-1 rounded-full text-white top-3 ${count == 0 ? "hidden": ""}`}>{count}</span></button>
            </div>
        </div>
    )
}

export default HomeProductItem