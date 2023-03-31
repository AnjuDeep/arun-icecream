import React from 'react'
import { Container,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './productStyle.css'
import './CardDesStyle.css'

const Bar = () => {
  return (
    <>
    <Container>
        <div className="leftBar">
        <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://arunicecreams.in/images/bars/Bars-Image.jpg" />
      <Card.Body className="CardBody">
        <Card.Title>Bars</Card.Title>
        <Card.Text>
        Everyone loves a good ice cream bar.
        Well, with our range we have something
        for everybody.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/BarFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
        </div>
        <div >
            <Image className="rightBar" src="https://arunicecreams.in/images/bars/Bar-Model-Image.jpg"></Image>
        </div>
    </Container>

    </>
  )
}

export default Bar