import React, { useEffect, useState } from 'react'; //꼭 써야됨
import { useHistory, useParams } from 'react-router';
import styled from 'styled-components';
import './Detail.scss';

//css를 미리 입혀놓은 컴포넌트 -> className 작명 필요없음
let 박스 = styled.div`  
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}

`;






function Detail(props){ //props로 받지 않고 app.js에서 해당 데이터를 복사해서 이 안에 넣어도 됨 
                        //but 중요한 데이터는 App.js 안에 넣어두는게 국룰임

    let history = useHistory(); //history 란 object를 만들수 있음-> 방문기록저장되어있음
    let { id }  = useParams();
     /* ㄴex) let {id,id2,id3} =useParms(); */

     let [alert,alert변경] = useState(true);
      let [값,값변경] =useState(''); // 초기값 '' 넣어주기


    useEffect(()=>{ //컴포넌트가 mount,update이 될때 특정코드를 실행할수있음
    //useEffect는 여러개 만들어도 상관없지만 순차적으로 진행된다
     
     let 타이머 = setTimeout(()=>{ alert변경(false) },2000);
     //타이머는 꼭 사용하고 종료 해주어야한다
     // return ()=>{ clearTimeout(타이머) }
     // 아래 return을 이런식으로 사용하면됨
     console.log('안녕');
      
      return function 어쩌구(){//컴포넌트(여기서는 Detail)가 사라질때 코드를 실행시킬수 있음

     } 

    },[alert]);  //alert라는 state가 변경이 될때만 실행이된다 더 추가하려면 -> [a,b,c,d]
    // 빈 []을 넣으면 <Detail> 등장시 한번 실행하고 끝남
   
   
    return(
        <div className ="container">
        <박스>
        <제목 className="red">디브 박스</제목>
        </박스>
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
        
        { 값 }
        <input onChange={(e)=>{ 값변경(e.target.value) }}/>  {/* 이벤트 추가하려면 e  */}
        {//if 대신 3항 연산자
        alert == true
        ?(
          <div className="my-alertred">
         <p>재고가 얼마 남지 않았습니다</p>
         </div>
        )
        : null // 아무것도 남기고 싶지않을때 null       
        }
        
        <div className="row">
          <div className="col-md-6">
            <img src ={"/images/"+props.상품[id].id+".JPG"} width="100%"/>
          </div>
          <div className="col-md-6 mt-4">
            <h4 className="pt-5">{props.상품[id].title}</h4>
            <p>{props.상품[id].content}</p>
            <p>{props.상품[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
            <p></p>           
            <button className="btn btn-danger" onClick={ ()=>{
                history.goBack();   /* 특정경로로 이동시키려면 history.push('/') */
            } }>뒤로가기</button>
          </div>
        </div>
      </div>
    )
}

export default Detail;