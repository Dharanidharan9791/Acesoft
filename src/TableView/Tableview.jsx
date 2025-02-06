import React, { useEffect, useState } from 'react'
import { Row, Col, Button } from "react-bootstrap"
import { getTableData } from '../interface/tableView'
import TableRows from '../components/tableRows'
const Tableview = () => {

    const [tableData, setTableData] = useState([])
    const [apiSuccessStatus, setApiSuccessStatus] = useState({ flag: true, message: "" })
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch()
    }, [])
    const fetch = async () => {
        setLoading(true)
        const response = await getTableData()
        setTableData(response.data)
        setApiSuccessStatus({ flag: response.successflag, message: response.message })
        console.log('response', response)
        setLoading(false)

    }
    return (

        <div className='p-5'>
            <div className='d-flex justify-content-end me-5 mb-5'>
                <Button onClick={() => fetch()}>Refresh</Button>
            </div>
            {
                !loading ?
                apiSuccessStatus.flag ?
                    <div className='tableBoady'>
                        <Row className='border p-2 fw-bold fs-6'>
                            <Col className='border-end'>ID</Col>
                            <Col className='border-end'>Title</Col>
                            <Col>Description</Col>
                        </Row>
                     <TableRows tableData={tableData}/>
                    </div>
                    :
                    <h3>{apiSuccessStatus.message}</h3>
                    :
                    <div>
                        <h3>Loading...</h3>
                    </div>
            }



        </div>
    )
}

export default Tableview