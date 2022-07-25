import { useEffect } from "react"
import useAuthStorage from "../hooks/useAuthStorage"
import { useApolloClient } from "@apollo/client";
import { useNavigate } from 'react-router-dom';

const SignOut = () => {
    const authStorage = useAuthStorage()
    const apollo = useApolloClient();
    const navigate = useNavigate()
    
    useEffect(async () => {
        await authStorage.removeAccessToken()
        apollo.resetStore()
        navigate('/')
    },[])

    return null
}

export default SignOut