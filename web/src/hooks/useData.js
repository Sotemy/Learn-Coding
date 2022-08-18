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

    return value

}

export const usePostData = (url = "") => {

    const [value, setValue] = React.useState('')

    const fetchData = async(data)=>{
        const response = await fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: new URLSearchParams(
                data
            )
        })
        setValue(await response.json())
    }

    return [value, fetchData]

}

