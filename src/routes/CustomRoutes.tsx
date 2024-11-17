import { Route, Routes } from "react-router-dom"
import { Home, SavePage } from "../pages"

const CustomRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/savepage" element={<SavePage/>} />
    </Routes>
  )
}

export default CustomRoutes