import { fetchTableData } from "./routes/tableDataRoutes";
import { axiosInstance } from "../config";


export const fetchTableDataApi = async()=>{
const response = axiosInstance.get(fetchTableData)
return response
}