  /* eslint-disable*/ //eslint warning 무시하기 

import { Navbar,Nav,NavDropdown,Button,Jumbotron} from 'react-bootstrap';
import React, { useState } from 'react';
import Data from './data.js';
import './App.css';
import {Link,Route,Switch} from 'react-router-dom';
          //html 태그 , 컴포넌트라고 생각해도 됨
import Detail from './Detail.js';
import axios from 'axios';

function App() {

  let [상품,상품변경]=useState(Data); //import 꼭 해야됨



  return (
    <div className="App">
     <Navbar bg="light" expand="lg" className="">  {/* 원래 className이 없었지만 css를 위해 추가 */}
     <Navbar.Brand href="#home">React-Shop</Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">   {/*  ml-auto: 오른쪽정렬 */}

      {/* <Nav.Link ><Link to="/">Home</Link></Nav.Link>  -> <a>태그 안에 <a>태그라 콘솔창에 에러*/}    {/* Link 이용하여 페이지 이동하기 */}
      <Nav.Link as = {Link} to="/">Home</Nav.Link>
      <Nav.Link as = {Link} to="/detail">Detail</Nav.Link>

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


<Switch> {/* //이 안에 있는 ROUTER 중 하나만 실행되게 함 */}

<Route exact path="/">  {/* // '/detail' 경로로 접속해도 보이는 이유 : 매칭되는것들은 다 보여줘서 */}
      {/* 매칭 되는것만 보려면 exact 추가 */}
      
              
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


  <div className="container"> {/* bootstrap 문법, container: 좌우여백을 적당히 주겠다 */}
      <div className="row"> {/* bootstrap 문법, row : 칼럼을 12조각으로 나누겠다 */}

      {
        상품.map(function(a,i){  //()=>{ } 이렇게 써도됨, i만 쓰면 안된다 데이터를 담는 a 도 꼭서야됨
          return <Content 상품={a} i={i} key={i}/>  //a= 상품[i], 반복문은 key={i}를 꼭 사용해야한다!
        })
      }
      
      {/* <Content 상품={상품[0]} />  // <컴포넌트 보낼이름={전송할state} />  */}
    
       
        {/* <div className="col-md-4">  //bootstrap 문법, col-4: 한개의 div를 4조각 크기로 쓰겠다 
                                        // bootstrap 문법, 가운데 md는 모바일 환경
        <img src="/images/lovecat.jpg" width="100%"/>
        <h4>{ 상품[0].title }</h4>
        <p>{ 상품[0].content} & { 상품[0].price }</p>
        </div> */}        
      </div>

      <button className="btn btn-primary" onClick={()=>{
        //axios.get(); //서버에게 get 요청을 함
        axios.get('https://codingapple1.github.io/shop/data2.json')
        .then((결과)=>{       
        console.log(결과.data);
        상품변경([...상품,...결과.data]);

        })//데이터 요청을 성공했을때, 데이터 내용을 알고 싶으면 파라미터 추가해서 확인하면 된다
        .catch()//데이터 요청을 실패했을때

      }}>더보기</button>
    </div>
  </Route>

   


  <Route path="/detail/:id/"> {/* 콜론 뒤에 맘대로 작명, 여러개 사용가능 (/:id/:id) */}
  <Detail 상품={상품}/>
  </Route>

  <Route path="/:id">  {/* :id = 모든 문자를 의미 */}
  <div>아무거나 적었을때 이거 보여주셈</div>
  </Route>


  

</Switch>

{/* // 이렇게도 사용가능 :  <Route path="/hi" component={ 컴포넌트 명}></Route> */}
    
      
    
   

    </div>
  );

}

function Content(props){
  return (
    <div className="col-md-4">
        <img src={ "/images/"+props.i+".jpg" } width="100%"/>  {/* src=""에 데이터 바인딩을 하려면 {} 쳐주기 */}
        <h4>{props.상품.title}</h4>
        <p>{props.상품.content}& {props.상품.price}</p>
        </div> 
  )
} //content end



export default App;
