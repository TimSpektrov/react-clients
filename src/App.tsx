import { BrowserRouter, Route, Routes } from "react-router";
import { Clients } from "./pages/client/Clients.tsx";
import { CreateClient } from "./pages/client/CreateClient.tsx";
import { Layout } from "./shared/Layout.tsx";
import {
  AUTH_URL,
  CLIENTS_URL,
  CREATE_URL,
  EDIT_URL,
  REGISTRATION_URL,
} from "./app/routing.ts";
import { ClientProfile } from "./shared/ClientProfile.tsx";
import { NotFound } from "./pages/notFound/NotFound.tsx";
import { EditClient } from "./pages/client/EditClient.tsx";
import { LogIn } from "./pages/auth/LogIn.tsx";
import { Registration } from "./pages/auth/Registration.tsx";
import { Home } from "./pages/home/Home.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={`${AUTH_URL}/${REGISTRATION_URL}`}
            element={<Registration />}
          />
          <Route path={AUTH_URL} element={<LogIn />} />
          <Route path={CLIENTS_URL}>
            <Route index element={<Clients />} />
            <Route path={CREATE_URL} element={<CreateClient />} />
            <Route path={`:id/${EDIT_URL}`} element={<EditClient />} />
            <Route path=":id" element={<ClientProfile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
