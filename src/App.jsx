import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Root from "./routes/Root";
import Counter from "./routes/Counter";
import Notfound from "./routes/Notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/counter",
    element: <Counter />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
