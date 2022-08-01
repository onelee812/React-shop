import logo from './logo.svg';
import './App.css';
import bg from './img/bg.png';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import monitor from './img/monitor.png';
import camera from './img/camera.png';
import politics from './img/politics.png';
import { useState} from "react";
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import Detail from './routes/Detail.js';
import axios from 'axios';
 

function App(){


  let [shoes, setShoes] = useState(data) 
  let navigate = useNavigate(); //페이지 이동을 도와주는 함수 


  return (
    <div className="App">
     
       <Navbar bg="light" variant="dar">
        <Container>
          <Navbar.Brand href="#menu">Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#brunch">Brunch</Nav.Link>
            <Nav.Link href="#search">Search</Nav.Link>

            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path = "/" element={
        <>
          <div className="main-bg" style={{backgroundImage: 'url('+ bg + ')'}}></div>
          <div className="keyword"></div>
          <div className = 'container'>
            <div className = "row">

            <Card shoes={shoes[0]} i={camera}></Card>
            <Card shoes={shoes[1]} i={politics}></Card>
            <Card shoes={shoes[2]} i={monitor}></Card>  
            </div>
          </div>  
          <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              console.log(result.data)
              console.log({shoes})
              let copy = [...result.data];
              setShoes(copy);
            })
            .catch(()=>{
              console.log('실패')
            })
            
          }}>더보기</button> 

          </>
        }/>
        {/* <Route path = "/detail/:id" element={<Detail shoes={shoes}></Detail>}/>  */}
      </Routes>
        
    </div>
  );
}

function Card(props) {
  return (
    <div className="card">   
    <img src ={props.i} width='50' height='50'/>
    <div>{props.shoes.price}</div>
    <div>{props.shoes.content}</div>
  </div>
  )
}

export default App;
