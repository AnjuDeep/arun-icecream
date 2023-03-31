import React from 'react'
import { Container,Image,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './productStyle.css'

const Icone = () => {
  return (
    <>
    <Container>
        <div className="leftBar">
        <Card className="Card" style={{ width: '18rem'}}>
      <Card.Img className="cardImg" variant="top" src="https://arunicecreams.in/images/icone/iCone-icecream.jpg" />
      <Card.Body className="CardBody">
        <Card.Title>Icones</Card.Title>
        <Card.Text>
        A range of crunchy cones
        with a host of delightful flavours
        to keep your palate engaged!
        Available in different sizes to
        satisfy your level of craving.
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#" ><Link to="/IconeFlav" className="flav">FLAVOURS</Link></Card.Link>
      </Card.Body>
    </Card>
        </div>
        <div >
            <Image className="rightBar" src="https://arunicecreams.in/images/icone/iCone-girl.jpg"></Image>
        </div>
    </Container>

    </>
  )
}

export default Icone