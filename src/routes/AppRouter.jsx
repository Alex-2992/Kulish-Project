import { Routes, Route,  Navigate } from "react-router-dom";
import Login from "../pages/login";
import UserProfile from "../pages/UserProfile";
import Dashboard from "../pages/DashboardPage";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";


export default function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />

            <Route path="/login" element={<Login />}> </Route>
            <Route 
            path="/dashboard" 
            element={
                <ProtectedRoute>
                <Dashboard />
                </ProtectedRoute>
            }
            />
            <Route 
            path="/users/:id"
             element={
                <ProtectedRoute>
                    <UserProfile />
                </ProtectedRoute>
                }
                />
                <Route path="*" element={<NotFound />} ></Route>
        </Routes>
    );
}