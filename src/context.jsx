import { createContext, useContext, useState } from "react";

export const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export const useDefaultAppContext = () => {
    const [submitted, setSubmitted] = useState(false)
    const [success, setSuccess] = useState(false)

    return {submitted, setSubmitted, success, setSuccess}
}