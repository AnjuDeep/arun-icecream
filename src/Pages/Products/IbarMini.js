import React from 'react'
import { Container,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './CardDesStyle.css'
import './productStyle.css'

const IbarMini = () => {
  return (
    <>
    
    <Container>
        <div>
            <Image className="leftIbar" src="https://arunicecreams.in/images/ibar-mini/ibar-mini-bg.jpg"></Image>
        </div>
        <div className="rightCups">
        <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmGtnKFvIbs7dFy6mXexxowxM2SZZrFnP5Lg&usqp=CAU" />
      <Card.Body className="CardBody">
        <Card.Title>IBar Mini</Card.Title>
        <Card.Text>
        Perfect for a quick bit
        of indulgence.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/IBarMiniFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
        </div>
    </Container>
    </>
  )
}

export default IbarMini