import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'; // './'가 없으면 보통 라이브러리 import 
          //HashRouter도 사용가능 주소에 '#'이 들어간다 -> 라우팅 안전하게 할 수 있게 도와준다





ReactDOM.render(
  <React.StrictMode> 
    <BrowserRouter>
    <App />
    </BrowserRouter>   {/* BrowserRouter로 감싸기 */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
