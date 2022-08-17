import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Details from "../pages/Details"
import Header from "../components/Header"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<Details />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter