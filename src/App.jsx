import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { FeaturesPage } from "./pages/Features"
import { ContactPage } from "./pages/Contact"

const App = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contato" element={<ContactPage />} />
             <Route path="/funcionalidades" element={<FeaturesPage />} />
        </Routes>
        </BrowserRouter>

      
    )
}

export default App