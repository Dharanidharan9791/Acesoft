import React from 'react'
import { Button } from 'react-bootstrap'

const ResetButton = ({handleReset}) => {
    return (
        <Button className='mb-4 mt-4' variant='danger' onClick={()=>handleReset("hi")}>Reset</Button>
    )
}

export default ResetButton