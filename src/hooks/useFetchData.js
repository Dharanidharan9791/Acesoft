import React, { useEffect, useState } from 'react'
import { fetchTableDataApi } from '../apis/tableDataApi'


const useFetchData = (url) => {
    const [data, setData] = useState( {
        successflag : false,
        data: [],
        message: ""
    })
    useEffect(() => {
        (async () => {
            let result = {
                successflag : false,
                data: [],
                message: ""
            }
            try {
                const response = await fetchTableDataApi(url)
                if (response.status == 200) {
                    result.successflag = true
                    result.data = response.data
                    result.message = "Successfully Fetched !!"
                    return result
                }
        
        
            } catch (error) {
                result.successflag = false
                result.data = []
                result.message = "An Error Occured !!"
                return result
        
            }
            setData(result)
        })()
    }, [])
return [data]
}

export const getTableData = async () => {
   
   


}
export default useFetchData