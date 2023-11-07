import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Orders() {
    const [order,setOrder] = useState ([])
    const auth =localStorage.getItem('authToken')
    console.log(auth);

    useEffect(() =>{
        axios.get('https://aphia-dev.onrender.com/api/orders',{
            headers:
            {
                authorization: auth
            }
        })
        .then(res => {
            console.log(res);
            setOrder(res.data)
    })
    
    },[])
  return (
    <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolor debitis. Est molestias magni neque. Vero hic ex neque dolores, ullam maiores? Soluta veritatis quaerat beatae! Eum magnam eos blanditiis.</p>
    </div>
  );
};

export default Orders