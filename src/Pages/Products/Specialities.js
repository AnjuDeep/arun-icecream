import React from 'react'
import { Container,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './productStyle.css'

const Specialities = () => {
  return (
    <>
    <Container>
        <div className="leftBar">
        <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://arunicecreams.in/images/specialites/special-hero.jpg" />
      <Card.Body className="CardBody">
        <Card.Title>Specialities</Card.Title>
        <Card.Text>
        Looking for a treat that's got
        indulgence written on it? Our
        Speciality range is all you need
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/SpecFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
        </div>
        <div >
            <Image className="rightBar" src="https://arunicecreams.in/images/specialites/special-hero.jpg"></Image>
        </div>
    </Container>

    </>
  )
}

export default Specialities