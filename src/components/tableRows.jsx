import React from 'react'
import { Row,Col } from 'react-bootstrap'
const TableRows = ({ tableData }) => {
    return (

        <>
            {
                (tableData.length > 0) ?
                    <>
                        {


                            tableData.map((data, index) => {
                                return (
                                    <Row className='border' key={index}>
                                        <Col className='border-end'>{data.id}</Col>
                                        <Col className='border-end'>{data.title}</Col>
                                        <Col>{data.body}</Col>
                                    </Row>
                                )
                            })
                        }
                    </>
                    :
                    null
            
        }

        </>
    )
}

export default TableRows