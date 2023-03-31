import React from 'react'
import {Button} from 'react-bootstrap'
import './products.css'
import { Link } from 'react-router-dom'

const IconeBtn = () => {
  return (
    <div>
        <Button variant="outline-success" className="icone"><Link to="/icone" className="btnlink">ICONE </Link></Button>{' '}
    </div>
  )
}

export default IconeBtn