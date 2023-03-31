import React,{useState} from 'react'
import { Container,Card} from 'react-bootstrap'
import {barFlavdata} from './BarFlav.data'

const BarFlav = () => {
  const [items]=useState(barFlavdata)
//   const decQty = (id) => {
//       const newItem = items.map((item)=>
//       item.id===id && item.qty > 1 ?{...item,qty:item.qty-1}:item
//       );
//       setItems(newItem)
//   }
//   const incQty = (id) => {
//     const newItem = items.map((item)=>
//     item.id===id?{...item,qty:item.qty+1}:item
//     );
//     setItems(newItem)
// }
  return (
    <div>
      <Container>
      <h1 className='bg-dark text-white text-center'>BAR FLAVOURS</h1>
      {items.map((item)=>(
        <div className='d-inline-flex' style={{ textAlign: 'center'}} key={item.id}>
      <Card className="shadow p-3 mb-3 bg-body-tertiary rounded" style={{ width: '23.2rem'}}>
      <Card.Img variant="top" src={require(`./assets/BarFlavour/${item.image}.jpg`)} />
      <Card.Body>
        <Card.Title>{item.flavour}</Card.Title>
        <Card.Text>
        {item.desc}
        </Card.Text>
        <h5>Price: ₹ {item.price}</h5>
        {/* <div>
          <p>
            Qty:
            <Button onClick={()=>decQty(item.id)} className='m-1'>-</Button>{item.qty}
            <Button onClick={()=>incQty(item.id)} className='m-1'>+</Button>
          </p>
        </div>
        <Button variant="primary">Add to Cart</Button> */}
      </Card.Body>
      </Card>
      </div>
      ))}
      </Container>
    </div>
  )
}

export default BarFlav