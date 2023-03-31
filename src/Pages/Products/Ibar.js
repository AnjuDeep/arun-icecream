import React from 'react'
import { Container,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './productStyle.css'
import './CardDesStyle.css'

const Ibar = () => {
  return (
    <>
    
    <Container>
        <div>
            <Image className="leftIbar" src="https://arunicecreams.in/images/ibar/iBar-Model-Image.jpg"></Image>
        </div>
        <div className="rightCups">
        <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://arunicecreams.in/images/ibar/iBar-Image.jpg" />
      <Card.Body className="CardBody">
        <Card.Title>IBar</Card.Title>
        <Card.Text>
        Ice cream bars rich in chocolate
        that come in a variety of
        indulgent flavours
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/IBarFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
        </div>
    </Container>
    </>
  )
}

export default Ibar