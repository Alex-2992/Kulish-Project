import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function UserItem({ user }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (

        <div>
        {UserItem.name-UserItem.email} 
        
        <Button onClick={() => navigate(`/users/${user.id}`)}>View Profile</Button>

        <Button onClick={() => dispatch({ type: 'DELETE_USER', payload: user.id })}>Delete</Button>

        </div>
    )
}