import { useDispatch, useSelector } from "react-redux"
import { BasketIcon, TrashIcon } from "../assets/Icons"
import { RootState } from "../store/Store"
import { removeSave } from "../store/SavedSlice"
import Shop from "../assets/images/shop.png"
import { useNavigate } from "react-router-dom"
import SaveProductItem from "../components/SaveProductItem"
import { ProductType } from "../components/HomeProducts"


const SavePage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const saved:ProductType[] = useSelector((state: RootState) => state.saved)
  const totalPirce = saved.reduce((a: number, item: ProductType) => a + item.price, 0)


  return (
    <div className="pl-[45px] pr-[55px] pb-[63px] bg-[#FFDF8C]">
      <div className="pl-[290px] pr-[210px] pt-[94px] bg-white">
        {
          saved.length == 0 ?
            <div className="text-center pb-[163px] w-[547px] mx-auto">
              <p className="font-bold text-[32px] leading-[38.98px] mb-[10px]">Корзина пустая </p>
              <p className="text-[18px] leading-[26px] text-[#777777] mb-[47px]">Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
              <img className="h-[255] mb-[74px] mx-auto" src={Shop} alt="Shopping" width={300} height={255} />
              <button onClick={() => navigate(-1)} className="rounded-[30px] bg-[#282828] text-white w-[210px] mx-auto py-[15px] font-bold">Вернуться назад</button>
            </div> :
            <div>
              <div className="pb-[30px] flex items-center justify-between">
                <div className="flex items-center space-x-[17px]">
                  <BasketIcon />
                  <p className="font-bold text-[32px] leading-[38.98px]">Корзина</p>
                </div>
                <button onClick={() => dispatch(removeSave())} className="flex items-center space-x-[5px] hover:scale-150 duration-300 active:scale-100">
                  <TrashIcon />
                  <p className="text-[16px] leading-[19.5px] text-[#B6B6B6]">Очистить корзину</p>
                </button>
              </div>
              {
                saved.map((item: ProductType, index:number) => <SaveProductItem key={index + 1} item={item}/> )
              }
              <div className="flex items-center justify-between mt-[10px] pb-[40px]">
                <p className="text-[22px] leading-[26.8px]">Всего пицц: <span className="font-bold">{saved.length} шт.</span></p>
                <p className="text-[22px] leading-[26.8px]">Сумма заказа: <span className="font-bold text-[#FE5F1E]">{totalPirce}  ₽</span></p>
              </div>
              <div className="flex items-center justify-between pb-[131px]">
                <button onClick={() => navigate(-1)} className="w-[220px] text-center text-[16px] leading-[19.5px] text-[#CACACA] border-[#D3D3D3] border-[2px] py-[18px] rounded-[30px]">Вернуться назад</button>
                <button onClick={() => navigate(-1)} className="w-[220px] text-center text-[16px] leading-[19.5px] text-white py-[18px] bg-[#FE5F1E] rounded-[30px]">Оплатить сейчас</button>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default SavePage