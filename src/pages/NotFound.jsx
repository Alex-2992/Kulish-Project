import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function NotFound() {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const navigate = useNavigate();

    return (
        <div>
            <h2>404</h2>
            <Button onClick={() => navigate(isAuth ? "/dashboard" : "/login")}></Button>


        </div>
    );

}