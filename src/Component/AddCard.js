import { React,useState } from 'react';
import {Card,Button,Form} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { PostData } from '../Redux/Action/Action';

function AddCard(){

        const [show, setShow] = useState(false);
        const dispatch =useDispatch()
        const addhandler=()=>{
          dispatch(PostData({product_Name,product_Material,category,product_Image,quantity,Promo_price,Orginal_price}))
        
        }

            const [product_Name,setProductName]= useState("")
            const [product_Material,setProductMaterial]= useState("")
            const [category,setCategory]= useState("")
            const [product_Image,setProductImage]= useState("")
            const [quantity,setQuantity]= useState("")
            const [Promo_price,setPromoPrice]= useState("")
            const [Orginal_price,setOriginalPrice]= useState("")

            const handleClose = () => {addhandler();setShow(false);}
            const handleShow = () => {setShow(true)}

            return (
                <>
                <Button variant="primary" style={{marginLeft:'2rem', marginRight:'2rem'}} onClick={handleShow}>add</Button>
                
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add product specs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Name</Form.Label>
        <Form.Control type="text" placeholder={"product_Name"} onChange={e=>setProductName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Material</Form.Label>
        <Form.Control type="text" placeholder={"product_Material"} onChange={e=>setProductMaterial(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>category</Form.Label>
        <Form.Control type="text" placeholder={"category"} onChange={e=>setCategory(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>product_Image</Form.Label>
        <Form.Control type="text" placeholder={"product_Image"} onChange={e=>setProductImage(e.target.value) }/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>quantity</Form.Label>
        <Form.Control type="email" placeholder={"quantity"} onChange={e=>setQuantity(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Promo_price</Form.Label>
        <Form.Control type="text" placeholder={"Promo_price"} onChange={e=>setPromoPrice(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Original_Price</Form.Label>
        <Form.Control type="text" placeholder={"Original_Price"} onChange={e=>setOriginalPrice(e.target.value)}/>
      </Form.Group>
      
    </Form>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save new product
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCard;