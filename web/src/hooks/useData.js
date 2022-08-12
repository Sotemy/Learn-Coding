import React from 'react'

export const useGetData = (url = "") => {

    const [value, setValue] = React.useState([])



    React.useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(url)
            setValue(await response.json())
        }
        fetchData()
    }, [url])
    console.log(value)

    return value

}

export const usePostData = (url = "") => {

    const [value, setValue] = React.useState('')

    React.useEffect(()=>{
        const fetchData = async()=>{
            const response = await fetch(url, {
                method: "post",
            })
            setValue(await response.json())
        }
        fetchData()
    }, [url])

    return [value]

}

