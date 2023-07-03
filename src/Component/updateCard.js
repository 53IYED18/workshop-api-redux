import { useState } from 'react';
import {Button,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { EditData } from '../Redux/Action/Action';

function UpdateCard({product,id}) {
  const dispatch =useDispatch()
  const [show, setShow] = useState(false);

  const updatehandler=()=>{
    dispatch(EditData(id,{product_Name,product_Material,category,product_Image,quantity,Promo_price,Orginal_price}))
  
  }

  const [product_Name,setProductName]= useState(product.product_Name)
  const [product_Material,setProductMaterial]= useState(product.product_Material)
  const [category,setCategory]= useState(product.category)
  const [product_Image,setProductImage]= useState(product.product_Image)
  const [quantity,setQuantity]= useState(product.quantity)
  const [Promo_price,setPromoPrice]= useState(product.Promo_price)
  const [Orginal_price,setOriginalPrice]= useState(product.Orginal_price)

  const handleClose = () => {updatehandler();setShow(false);}
  const handleShow = () => {setShow(true);console.log(id)}

  return (
    <>
      <Button variant="primary" style={{marginLeft:'2rem', marginRight:'2rem'}} onClick={handleShow}>update</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update your product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Name</Form.Label>
        <Form.Control type="text" placeholder={product_Name} onChange={e=>setProductName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Material</Form.Label>
        <Form.Control type="text" placeholder={product_Material} onChange={e=>setProductMaterial(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder={category} onChange={e=>setCategory(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Image</Form.Label>
        <Form.Control type="text" placeholder={product_Image} onChange={e=>setProductImage(e.target.value) }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="email" placeholder={quantity} onChange={e=>setQuantity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Promo_price</Form.Label>
        <Form.Control type="text" placeholder={Promo_price} onChange={e=>setPromoPrice(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Original_Price</Form.Label>
        <Form.Control type="text" placeholder={Orginal_price} onChange={e=>setOriginalPrice(e.target.value)}/>
      </Form.Group>
      
    </Form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateCard;