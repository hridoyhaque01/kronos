import { RouterProvider } from "react-router-dom";

import "./App.css";
import useGetAuthCheck from "./hooks/useGetAuthCheck";
import { routes } from "./routes/Router";

function App() {
  const Router = routes;
  const isLoading = useGetAuthCheck();
  return isLoading ? (
    <div>Auth checking...</div>
  ) : (
    <div>
      <RouterProvider router={Router}></RouterProvider>
    </div>
  );
}

export default App;
