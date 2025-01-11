import {BrowserRouter, Route, Routes} from "react-router";
import {MainPage} from "./pages/MainPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
