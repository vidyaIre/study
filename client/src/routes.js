import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";

const isAuthenticated = () => {
    
    return true;
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/pagges/LoginPage" />;
}

// Fallback Route Component
const FallbackRoute = () => {
    return isAuthenticated() ? <Navigate to="/" /> : <Navigate to="/pagges/LoginPage" />;
}

const routes = createBrowserRouter([
    // authentication routes
    {
        path: "/pagges/LoginPage",
        element: <LoginPage />,
    },
    // protected routes
    {
        path: "/",
        element: <ProtectedRoute element={<Home />} />,
    },
    // fallback routes
    {
        path: "*",
        element: <FallbackRoute />,
    },
]);

// ... existing code ...
export default routes;