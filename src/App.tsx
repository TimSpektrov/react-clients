import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home.tsx";
import { CreateClient } from "./pages/client/CreateClient.tsx";
import { Layout } from "./shared/Layout.tsx";
import { CLIENTS_URL, CREATE_URL } from "./app/routing.ts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={CLIENTS_URL}>
            <Route path={CREATE_URL} element={<CreateClient />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
