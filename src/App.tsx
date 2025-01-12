import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/home/Home.tsx";
import { CreateClient } from "./pages/client/CreateClient.tsx";
import { Layout } from "./shared/Layout.tsx";
import { CLIENTS_URL, CREATE_URL } from "./app/routing.ts";
import { ClientProfile } from "./shared/ClientProfile.tsx";
import { NotFound } from "./pages/notFound/NotFound.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={CLIENTS_URL}>
            <Route index element={<Home />} />
            <Route path={CREATE_URL} element={<CreateClient />} />
            <Route path=":id" element={<ClientProfile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
