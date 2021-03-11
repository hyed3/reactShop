import React from 'react'; //꼭 써야됨
import { useHistory, useParams } from 'react-router';


function Detail(props){ //props로 받지 않고 app.js에서 해당 데이터를 복사해서 이 안에 넣어도 됨 
                        //but 중요한 데이터는 App.js 안에 넣어두는게 국룰임

    let history = useHistory(); //history 란 object를 만들수 있음-> 방문기록저장되어있음
    let { id }  = useParams();
     /* ㄴex) let {id,id2,id3} =useParms(); */

    return(
        <div className ="container">
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