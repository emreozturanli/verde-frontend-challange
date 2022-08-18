import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Details from "../pages/Details"
import Header from "../components/Header"
import NewPost from "../pages/NewPost"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:postId" element={<Details />} />
                <Route path="/newpost" element={<NewPost />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter