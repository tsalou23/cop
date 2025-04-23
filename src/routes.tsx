import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Lore from "./components/Lore";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/lore", // This should render the Lore component when navigating to /lore
        element: <Lore />,
    },
]);
