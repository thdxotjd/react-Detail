import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props){
    return(
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>가격</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {
                            props.state.map(function(a,i){
                                return(
                                    <tr key={i}>
                                        <td>{a.id}</td>
                                        <td>{a.name}</td>
                                        <td>{a.quan}</td>
                                        <td>
                                            <button onClick={ ()=>{props.dispatch({type : '수량증가' })} }>+</button>
                                            <button onClick={ ()=>{props.dispatch({type : '수량감소' })} }>-</button>
                                        </td>
                                    </tr>
                                )
                            })
                            
                        }
                    
                </tbody>
            </Table>
        </div>
    )
}
function Box(state){
    return{
        state: state
    }
}


export default connect(Box)(Cart);