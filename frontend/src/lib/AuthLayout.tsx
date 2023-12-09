import { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../store/ReduxHooks"
import checkAuthentication from "../store/service/authCheck"
import AuthLoader from "../components/Loader/AuthLoader"


interface AuthLayoutProps {
    children: React.ReactNode
}


const AuthLayout = ({ children }: AuthLayoutProps) => {

    const dispatch = useAppDispatch()

    const isAuthenticated = useAppSelector(state => state.auth.isAuthenticated)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let subscription = true;

        if (subscription) {
            dispatch(checkAuthentication())
                .then(() => {
                    setLoading(false);
                }).catch((error) => {

                    console.error('Authentication check error:', error);
                    setLoading(false);
                });
        }
        return () => { subscription = false };
    }, [isAuthenticated])


  

    if(loading)
    {
        return <AuthLoader/>
    }


    return (
        <>{children}</>
    )
}

export default AuthLayout