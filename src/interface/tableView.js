import { fetchTableDataApi } from "../apis/tableDataApi"

export const getTableData = async () => {
    let result = {
        successflag : false,
        data: [],
        message: ""
    }
    try {
        const response = await fetchTableDataApi()
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


}