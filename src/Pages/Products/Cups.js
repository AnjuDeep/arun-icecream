import React from 'react'
import { Container,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './productStyle.css'
import './CardDesStyle.css'

const Cups = () => {
  return (
    <>
    
    <Container>
        <div>
            <Image className="leftCups" src="https://arunicecreams.in/images/cups/Cups-Image.jpg"></Image>
        </div>
        <div className="rightCups">
        <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://arunicecreams.in/images/cups/Cups-Image.jpg" />
      <Card.Body className="CardBody">
        <Card.Title>Cups</Card.Title>
        <Card.Text>
        Your favourite flavours in big,
        medium and small cups to suit
        your taste and needs. It's the
        classic way to enjoy ice cream.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/CupsFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
        </div>
    </Container>
    </>
  )
}

export default Cups