import React, { useState,useEffect } from 'react'
import { Container,Card} from 'react-bootstrap'

const IBarFlav = () => {
    const [ibars,setPosts] = useState([])

    useEffect(()=>{
        fetch('http://127.0.0.1:8000/api/ibars/')
        .then((response) => response.json())
        .then(ibars => setPosts(ibars));
    },[])

   
  return( 
  <div>
      <Container>
      <h1 className='bg-dark text-white text-center'>IBAR FLAVOURS</h1>
      {ibars.map((ibar)=>(
        <div className='d-inline-flex' style={{ textAlign: 'center'}} key={ibar.id}>
        <Card className="shadow p-3 mb-3 bg-body-tertiary rounded" style={{ width: '23.2rem'}}>
        <Card.Img variant="top" src={ibar.ibar_image} />
        <Card.Body>
          <Card.Title>{ibar.title}</Card.Title>
          <Card.Text>
            {ibar.description}
          </Card.Text>
          <h5>Price: ₹ {ibar.price}</h5>
        </Card.Body>
        </Card>
        </div>
      ))}
      </Container>
    </div>
  )

}

export default IBarFlav