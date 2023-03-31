import React from 'react'
import {Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './products.css'

const BarsBtn = () => {
  return (
    <div>
        <Button variant="outline-success" className="bars"><Link to="/bar" className="btnlink">BARS</Link></Button>{' '}
    </div>
  )
}

export default BarsBtn
