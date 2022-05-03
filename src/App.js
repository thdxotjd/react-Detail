import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import { Navbar,Nav,Form,FormControl,Button } from 'react-bootstrap';
import beans from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './detail.js';
import styled from 'styled-components';
import axios from 'axios';
import Cart from './Cart.js';

function App() {
  
  let [bean,bean변경] = useState(beans);
  let [재고,재고변경] = useState([10,11,12]);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">CoffeeShop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link ><Link to="/">Home</Link></Nav.Link>
          <Nav.Link ><Link to="/detail/0">Detail</Link></Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

    <Switch>

    <Route exact path="/">
      <div>
        <div className="jumbotron">
          <h2>Hello , Coffee beans</h2>
        </div>
        <div className="container">
          <div className="row">
            {
              bean.map(function(a,i){
                return(
                <Product bean={bean[i]} key={i}/>)
              })
            }
          </div>
        </div>
        <button className="but-axios" onClick={()=>{
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            bean변경( [...beans,...result.data]);
          })
          .catch(()=>{
            console.log('실패했습니다');
          })

        }}>더보기</button>
      </div>
    </Route>

    <Route path="/detail/:id">
      <div>
         <Detail bean={bean} 재고={재고} 재고변경={재고변경}/>
      </div>
    </Route>

    <Route path="/keep">
      <div>
        <Cart/>
      </div>
    </Route>

    <Route path="/:id">
      <div>
        잘못된 입력입니다.
      </div>
    </Route>

    
        
    </Switch>
    
    </div>
    
    
  );
  
}

function Product(props) {
  return(
    <div className="col-md-4">
      <img src='img/bean.JPG' width="350"/>
      상품명:{props.bean.title}<br/>
      원산지:{props.bean.content}<br/>
      가격:{props.bean.price}
    </div>
  )
}

export default App;
