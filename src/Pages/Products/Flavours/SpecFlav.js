import React, { useState,useEffect } from 'react'
import { Container,Card} from 'react-bootstrap'

const SpecFlav = () => {
    const [specs,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/specialities/')
        .then((response) => response.json())
        .then(specs => setPosts(specs));
    },[])

   
  return( 
  <div>
      <Container>
      <h1 className='bg-dark text-white text-center'>SPECIALITIES FLAVOURS</h1>
      {specs.map((spec)=>(
        <div className='d-inline-flex' style={{ textAlign: 'center'}} key={spec.id}>
        <Card className="shadow p-3 mb-3 bg-body-tertiary rounded" style={{ width: '23.2rem', height:'24rem'}}>
        <Card.Img variant="top" src={spec.spec_image} />
        <Card.Body>
          <Card.Title>{spec.title}</Card.Title>
          <Card.Text>
            {spec.description}
          </Card.Text>
          <h5>Price: ₹ {spec.price}</h5>
        </Card.Body>
        </Card>
        </div>
      ))}
      </Container>
    </div>
  )

}

export default SpecFlav