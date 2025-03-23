import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

const isAuthenticated = () => {
    const token = localStorage.getItem('@token');
    const user = localStorage.getItem('@user');
    if (token && user) return true;
    return false;
};

// Protected Route Component
const ProtectedRoute = ({ element }) => {
    return isAuthenticated() ? element : <Navigate to="/pages/LoginPage" />;
}

// Fallback Route Component
const FallbackRoute = () => {
    return isAuthenticated() ? <Navigate to="/" /> : <Navigate to="/pages/LoginPage" />;
}

const routes = createBrowserRouter([
    // authentication routes
    {
        path: "/pages/LoginPage",
        element: <LoginPage />,
    },
    // protected routes
    {
        path: "/",
        element: <ProtectedRoute element={<HomePage />} />,
    },
    // fallback routes
    {
        path: "*",
        element: <FallbackRoute />,
    },
]);

// ... existing code ...x`
export default routes;