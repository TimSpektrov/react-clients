import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home.tsx";
import { CreateClient } from "./pages/client/CreateClient.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="client">
          <Route path={"create"} element={<CreateClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
