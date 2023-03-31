import React from 'react'
import {Button} from 'react-bootstrap'
import './products.css'
import { Link } from 'react-router-dom'


const IbarMiniBtn = () => {
  return (
    <div>
        <Button variant="outline-success" className="ibar"><Link to="/ibarMini"  className="btnlink">IBAR MINI</Link></Button>{' '}
    </div>
  )
}

export default IbarMiniBtn