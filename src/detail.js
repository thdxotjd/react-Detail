import React, {useEffect, useState} from 'react';
import {useHistory,useParams} from 'react-router-dom';
import { Navbar,Nav} from 'react-bootstrap';
import './detail.scss';
import {CSSTransition} from "react-transition-group";

    function Detail(props) {

        let [alert,alert변경] = useState(true);
        let [탭,탭변경] = useState(0);
        let [스위치,스위치변경] = useState(false);
        useEffect(()=>{
            let 타이머 = setTimeout(()=>{ 
                alert변경(false)      
             },2000);
            return ()=>{clearTimeout(타이머)}
        },[]);

        let History = useHistory(); 
        let {id} = useParams();
        let find = props.bean.find(function(bean){
            return bean.id == id
          });
        


        return(            
            <div className="container">
                <div className="headText">Detail</div>
                {
                    alert === true?
                    <div className="alert">재고가 얼마 남지 않았습니다.</div>:
                    null
                }
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{find.title}</h4>
                        <p>{find.content}</p>
                        <p>{find.price}</p>
                        <Count 재고={props.재고} 재고변경={props.재고변경}/>
                        <button className="btn btn-danger" onClick={()=>{props.재고변경([9,10,11])}}>주문하기</button>
                        <button className="btn btn-danger" onClick={()=>{History.goBack();}}>뒤로가기</button>                       
                    </div>
                </div>
                    <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                                <Nav.Item>
                                    <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 탭변경(0) }}>Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 탭변경(1)} }>Option 2</Nav.Link>
                                </Nav.Item>
                    </Nav>
                    <CSSTransition in={스위치} classNames="wow" timeout={500}>
                    <TabContent 탭={탭} 스위치변경={스위치변경}/>  
                    </CSSTransition>
            </div>
            
        )
        
        
}

function TabContent(props){

    useEffect(()=>{
        props.스위치변경(true);
    })

    if(props.탭 === 0){
       return <div>0번째입니다</div>
    } else if(props.탭 === 1){
       return <div>1번쨰입니다</div>
    }
}

function Count(props){
    return(
        <div>
            <p>재고 : {props.재고[0]}</p> 
        </div>
    )
}

export default Detail;