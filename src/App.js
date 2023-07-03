import Cards from './Component/Cards'
import axios from 'axios'
import React,{useEffect, useState} from 'react';
import AddCard from './Component/AddCard';
import {Card} from 'react-bootstrap'
import GetData from './Redux/Action/Action';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetData())
  },[dispatch])
  const data = useSelector((state)=>state.data)
  return (
    
    <div className="App" style={{display:'flex'}}>
      <Card>
            <Card.Title>Add your new article</Card.Title>
            <Card.Body>
                <AddCard/>
            </Card.Body>
        </Card>
      {data.map((el)=>(<div key={el.id} ><Cards product={el} /></div>) )}
    </div>
  );
}

export default App;
