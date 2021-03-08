import { Navbar,Nav,NavDropdown,Button,Jumbotron} from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import './App.css';

function App() {

  let [상품,상품변경]=useState(Data); //import 꼭 해야됨



  return (
    <div className="App">
     <Navbar bg="light" expand="lg" className="">  {/* 원래 className이 없었지만 css를 위해 추가 */}
     <Navbar.Brand href="#home">React-Shop</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ml-auto">   {/*  mr-auto: 왼쪽정렬 */}
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>    
  </Navbar.Collapse>
</Navbar>

              {/* 대문만들것 */}

  <Jumbotron className="background">
  <h1>React-Shop은 덩이사진이 무료!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Jumbotron>

    <duv className="container"> {/* bootstrap 문법, container: 좌우여백을 적당히 주겠다 */}
      <div className="row"> {/* bootstrap 문법, row : 칼럼을 12조각으로 나누겠다 */}
        <div className="col-md-4"> {/* bootstrap 문법, col-4: 한개의 div를 4조각 크기로 쓰겠다  */}
        <img src="/images/lovecat.jpg" width="100%"/>
        <h4>{ 상품[0].title }</h4>
        <p>{ 상품[0].content} & { 상품[0].price }</p>
        </div>
        <div className="col-md-4">
        <img src="/images/bae.jpg" width="100%"/>
        <h4>{ 상품[1].title }</h4>
        <p>{ 상품[1].content} & { 상품[1].price}</p>
        </div> {/* bootstrap 문법, 가운데 md는 모바일 환경*/}
        <div className="col-md-4">
        <img src="/images/cute.jpg" width="100%"/>
        <h4>{ 상품[2].title}</h4>
        <p>{ 상품[2].content} & {상품[2].price}</p>
        </div>

      </div>

    </duv>

    </div>
  );
}

export default App;
