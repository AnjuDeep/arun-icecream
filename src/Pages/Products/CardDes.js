import React from 'react'
import { Card,Container } from 'react-bootstrap'
import './CardDesStyle.css'
import { Link } from 'react-router-dom'

const CardDes = () => {
  return (
    <>
    <Container>
      <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://arunicecreams.in/images/bars/Bars-Image.jpg" />
      <Card.Body className="CardBody">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/BarFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
    </Container>
    </>
  )
}

export default CardDes