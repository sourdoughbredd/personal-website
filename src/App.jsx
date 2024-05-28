import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

// Components/Pages
import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

// App Layout Component with context providers
const Layout = () => {
  return (
    <>
      <Header />
      <div id="app-main-content-container">
        <Outlet />
      </div>
    </>
  );
};

function App() {
  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "projects", element: <Projects /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
