import React, { useState,useEffect } from 'react'
import { Container,Card} from 'react-bootstrap'

const CupsFlav = () => {
    const [cups,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/cups/')
        .then((response) => response.json())
        .then(cups => setPosts(cups));
    },[])

   
  return( 
  <div>
      <Container>
      <h1 className='bg-dark text-white text-center'>CUPS FLAVOURS</h1>
      {cups.map((cup)=>(
        <div className='d-inline-flex' style={{ textAlign: 'center'}} key={cup.id}>
        <Card className="shadow p-3 mb-3 bg-body-tertiary rounded" style={{ width: '23.2rem'}}>
        <Card.Img variant="top" src={cup.cup_image} />
        <Card.Body>
          <Card.Title>{cup.title}</Card.Title>
          <Card.Text>
            {cup.description}
          </Card.Text>
          <h5>Price: ₹ {cup.price}</h5>
        </Card.Body>
        </Card>
        </div>
      ))}
      </Container>
    </div>
  )

}

export default CupsFlav