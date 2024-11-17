import { useQuery } from "@tanstack/react-query"
import { useAxios } from "../hooks/useAxios"
import { useEffect, useState } from "react"
import HomeProductItem from "./HomeProductItem"

interface ProductsIdType {
    categoryId: number | string
}

export interface ProductType {
    id: string
    title: string
    img: string
    price: number
    typeId: number
    sizeId: number
    categoryId: number
    savedCount: number
    size?:string
    type?:string
}

const HomeProducts = ({ categoryId }: ProductsIdType) => {
    const { data = [] } = useQuery({
        queryKey: ["products", categoryId],
        queryFn: () => useAxios().get(`/products?categoryId=${categoryId == 1 ? "" : categoryId}`).then(res => res.data)
    })
    const [products, setProducts] = useState<ProductType[]>(data)

    useEffect(() => setProducts(data), [data])

    return (
        <div className="bg-white rounded-b-[10px] pl-[67px] pr-[48px] pb-[31px]">
            <h2 className="text-[32px] leading-[38.98px] font-bold mb-[35px]">Все пиццы</h2>
            <div className="flex flex-wrap justify-between">
                {products.map((item: ProductType) => <HomeProductItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

export default HomeProducts