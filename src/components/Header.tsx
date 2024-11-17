import { useSelector } from 'react-redux'
import { SaveIcon } from '../assets/Icons'
import Logo from "../assets/images/Logo.svg"
import { RootState } from '../store/Store'
import { ProductType } from './HomeProducts'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const saved = useSelector((state: RootState) => state.saved)
    const totalPirce = saved.reduce((a: number, item: ProductType) => a + item.price, 0)
    return (
        <header className="pt-[43px] pl-[45px] pr-[55px] bg-[#FFDF8C]">
            <div className="bg-white rounded-t-[10px] flex items-center justify-between pl-[77px] pr-[38px] pt-[50px] pb-[40px] border-b-[1px] border-b-[#F6F6F6]">
                <div className="flex items-center space-x-[18px]">
                    <a href="/">
                        <img src={Logo} alt="Logo" width={38} height={38} />
                    </a>
                    <div>
                        <h2 className="font-extrabold  leading-[29.23px] text-[24px]">REACT PIZZA</h2>
                        {!pathname.includes("savepage") ? <p className="text-[#7B7B7B] text-[16px] leading-[19.49px]">самая вкусная пицца во вселенной</p> : <p className="text-[#7B7B7B] text-[16px] leading-[19.49px]">Самая реактивная пицца</p>}
                    </div>
                </div>
                {!pathname.includes("savepage") ? <button onClick={() => navigate("/savepage")} className={` rounded-[30px] bg-[#FE5F1E] flex items-center py-[13px] px-[22px]`}>
                    <strong className="text-[#FFFFFF] py-[3px] pr-[13px] border-r-[2px] border-[#FFFFFF]">{totalPirce} ₽</strong>
                    <div className="flex items-center space-x-[8px] p-2">
                        <SaveIcon />
                        <span className="font-bold text-[16px] leading-[19.49px] text-[#FFFFFF]">{saved.length}</span>
                    </div>
                </button> : null}
            </div>
        </header>
    )
}

export default Header