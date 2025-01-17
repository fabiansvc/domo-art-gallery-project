import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/404/NotFound";
import Home from "../pages/home/Home";
import World from "../pages/world/World";

const RoutesDomoGallery = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/domo-gallery" element={<World />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesDomoGallery;