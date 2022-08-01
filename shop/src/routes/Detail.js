import React from "react";
import { useParams } from "react-router-dom";
import {useEdffect, useState} from "react";
import styled from 'styled-components'




// function Detail(props) {

//     useEffect(()=>{
//       console.log('hi')
//       setTimeout(()=>{     }, 2000)
//     }) //useEffect 는 html rendering 후 실행이 되는 것이다. //어려운연산, 서버에서 데이터 가져오는 것 

//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-md-6">
            
//           </div>
//         </div>
//         이진선 
//         글쓰는 디자이너 
//           <p>{props.shoes[id].title}</p>
//       </div>
//     );
//   }
// export default Detail;