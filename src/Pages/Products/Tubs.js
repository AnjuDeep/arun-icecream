import React from 'react'
import { Container,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './productStyle.css'

const Tubs = () => {
  return (
    <>
    <Container>
        <div className="leftBar">
        <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://arunicecreams.in/images/tubs/tubs-hero-new.jpg" />
      <Card.Body className="CardBody">
        <Card.Title>Tubs</Card.Title>
        <Card.Text>
        Our range of tubs lets you share
        your favourite ice cream flavours
        with friends and family. You can also
        indulge with a whole tub to yourself!
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/TubFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
        </div>
        <div >
            <Image className="rightBar" src="https://arunicecreams.in/images/tubs/tubs-poster.jpg"></Image>
        </div>
    </Container>
    </>
  )
}

export default Tubs