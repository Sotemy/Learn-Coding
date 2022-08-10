import React from 'react'
import axios from "axios"

export const useGetData = (url = "") => {

    const [value, setValue] = React.useState([])



    React.useEffect(()=>{
        const fetchData = async()=>{
            const response = await axios.get(url)
            setValue(response.data)
        }
        fetchData()
    }, [url])

    return value

}

export const usePostData = (url = "") => {

    const [value, setValue] = React.useState('')

    React.useEffect(()=>{
        const response = axios.post(url)
        setValue(response)
    }, [url])

    return [value]

}

