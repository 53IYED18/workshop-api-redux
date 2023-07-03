import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import UpdateCard from './updateCard';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { DeleteData } from '../Redux/Action/Action';

function Cards({product}) {
  const dispatch = useDispatch();
  const deletehandler=()=>{
      dispatch(DeleteData(product.id))
  }
 
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.product_Image} style={{height:'10rem',width:'18rem'}}/>
      <Card.Body>
        <Card.Title>Title: {product.product_Name}</Card.Title>
        <Card.Text>Category: {product.category}</Card.Text>
        <Card.Text>Material: {product.product_Material}</Card.Text>
        <Card.Text>Promo price: ${product.Promo_price}</Card.Text>
        <Card.Text>Original price: ${product.Orginal_price}</Card.Text>
        <UpdateCard product={product} id={product.id} />
        <Button variant="secondary" onClick={deletehandler} >delete</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;