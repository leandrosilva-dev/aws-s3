import axios from "axios"
import { useEffect, useState } from "react"

export default function useFetch(url : any){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async function(){
            try{
                setLoading(true)
                const response = await axios.get(url)
                setData(response.data)
            }catch(err : any){
                setError(err)
            }finally{
                setLoading(false)
            }
        })()
    }, [url])

    return {data, error, loading}
}