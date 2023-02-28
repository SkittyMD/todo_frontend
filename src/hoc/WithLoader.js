import React, { useEffect, useRef, useState } from "react";
import Loader from "../components/UI/Loader/Loader";
const WithLoader = (WrappedComponent, axiosHandler) => {

    return function WithLoader(props) {
        const [loader, setLoader] = useState(false)
        const ic = useRef(null)

        axiosHandler.interceptors.request.use(req => {
            setLoader(true)
            return req
        }, err => {
            setLoader(false)
            throw err
        })

        if (!ic.current) {
            ic.current = axiosHandler.interceptors.response.use(res => {
                setLoader(false)
                return res
            }, err => {
                setLoader(false)
                throw err
            })
        }

        useEffect(() => {
            return () => axiosHandler.interceptors.response.eject(ic.current)
        }, [])

        return (
            <>
                <Loader
                    display={loader}
                />
                <WrappedComponent {...props} />
            </>
        )
    }
}


export default WithLoader