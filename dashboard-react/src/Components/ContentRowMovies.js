import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect, useRef} from 'react';

function ContentRowTop (){
    
    const [product, setproduct] = useState([]);
    const [product1, setproduct1] = useState([]);
    const [product2, setproduct2] = useState([]);
    const [product4, setproduct4] = useState([]);
    useEffect(() => {
    // declare the async data fetching function
    fetch('http://localhost:3000/api/products').then((response) => 
            response.json()
        ).then(data => {
            setproduct1(data.data.products);
        }).catch(error => console.log(error))
       
        fetch('http://localhost:3000/api/products').then((response) => 
        response.json()
    ).then(data => {
        setproduct2(data.data.count);
        }).catch(error => console.log(error))
            
    fetch('http://localhost:3000/api/products/1').then((response) => 
    response.json()
).then(data => {
    setproduct4(data.data);
}).catch(error => console.log(error))
        
        fetch('http://localhost:3000/api/products').then((response) => 
            response.json()
        ).then(data => {
            setproduct(data.data.countByCategory);
        }).catch(error => console.log(error))
    
    }
     , []);
   
  let productInDataBase = {
    color:   "primary",
    titulo: "Movies in Data Base",
    valor: 21,
    icono: "fas fa-film",
} 

let amount ={
    color:   "success",
    titulo: "Total awards",
    valor: 79,
    icono: "fas fa-award",
}

let user = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}
let user2 = {
    color:   "warning",
    titulo: "Actors quantity",
    valor: 49,
    icono: "fas fa-user",
}
let cardProps = [productInDataBase,amount,user,user2];
const elementVariable = useRef(null)
//console.log(elementVariable.current)
/*
function ContentRowTop(){
   */ return (
       
<div>	
             <ul ref={elementVariable}>
             {product2}
              </ul>
                 <ul> 
             { product1.map((category) => <li key = {category.id}>{category.name} </li>) }
               </ul>  
             <ul>
             {product.Deportivas}
              </ul> 
        </div>
      
    )
}


export default ContentRowTop;