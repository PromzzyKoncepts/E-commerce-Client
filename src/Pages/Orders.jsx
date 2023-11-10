import React, { useEffect, useState } from 'react'
import axios from 'axios'
import shoes from '../assets/shoes.jpg'
import clothes from '../assets/clothings.jpg'


function Orders() {
    const [orders,setOrders] = useState ([])
    const [isObject,setIsObject] = useState(true)
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5);  
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const auth =localStorage.getItem('authToken')
    
    
    const temOrders = [
        {
            _id : 1,
            street_address: "zik avenue",
            city: "awka",
            state: "anambra",
            phone_number: "08109210257",
            order_date: "2023-11-02T15:12:44.576Z",
            total : 8000,
            completed : true,
            items : [
                {
                    name : 'Shoes',
                    img : shoes,
                    price : 2000
                }
            ]
        },
        {
            _id : 2,
            street_address: "zik avenue",
            city: "awka",
            state: "anambra",
            phone_number: "08109210257",
            order_date: "2023-11-02T15:12:44.576Z",
            total : 8000,
            completed : false,
            items : [
                {
                    name : 'Shoes',
                    img : shoes,
                    price : 2000
                }
            ]
        },
        {
            _id : 3,
            street_address: "zik avenue",
            city: "awka",
            state: "anambra",
            phone_number: "08109210257",
            order_date: "2023-11-02T15:12:44.576Z",
            total : 8000,
            completed : false,
            items : [
                {
                    name : 'Shoes',
                    img : shoes,
                    price : 2000
                }
            ]
        },
        {
            _id : 4,
            street_address: "zik avenue",
            city: "awka",
            state: "anambra",
            phone_number: "08109210257",
            order_date: "2023-11-02T15:12:44.576Z",
            total : 8000,
            completed : false,
            items : [
                {
                    name : 'Shoes',
                    img : shoes,
                    price : 2000
                },
                {
                    name : 'Tops',
                    img : clothes,
                    price : 2000
                }
            ]
        },
        {
            _id : 5,
            street_address: "zik avenue",
            city: "awka",
            state: "anambra",
            phone_number: "08109210257",
            order_date: "2023-11-02T15:12:44.576Z",
            total : 8000,
            completed : true,
            items : [
                {
                    name : 'Shoes',
                    img : shoes,
                    price : 2000
                },
                {
                    name : 'Tops',
                    img : clothes,
                    price : 2000
                }
            ]
        },
        {
            _id : 6,
            street_address: "zik avenue",
            city: "awka",
            state: "anambra",
            phone_number: "08109210257",
            order_date: "2023-11-02T15:12:44.576Z",
            total : 8000,
            completed : false,
            items : [
                {
                    name : 'Shoes',
                    img : shoes,
                    price : 2000
                },
                {
                    name : 'Tops',
                    img : clothes,
                    price : 2000
                }
            ]
        },
        {
            _id : 7,
            street_address: "zik avenue",
            city: "awka",
            state: "anambra",
            phone_number: "08109210257",
            order_date: "2023-11-02T15:12:44.576Z",
            total : 8000,
            completed : false,
            items : [
                {
                    name : 'Shoes',
                    img : shoes,
                    price : 2000
                },
                {
                    name : 'Tops',
                    img : clothes,
                    price : 2000
                }
            ]
        }
    ];
    useEffect(() =>{
        axios.get('https://aphia-dev.onrender.com/api/orders',{
            headers:
            {
                authorization: auth
            }
        })
        .then(res => {
            setOrders(res.data.message)
            // if(typeof res.data.message === 'string'){
            //     setIsObject(false)
            // }
        })
        
    },[]);

    const toggleDetails = (_id) => {
        setExpandedOrderId((prevId) => (prevId === _id ? null : _id));
    };

    // Get current orders for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = temOrders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(temOrders.length / ordersPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
    console.log(isObject);
  return (
    <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
      <nav className="text-center mb-8">
      <h1 className="text-3xl font-bold flex items-center justify-between mb-2">
          Your Orders
          <div className='h-4'>
            <span className="ml-2">
              <span
                className="h-4 w-4 inline-block rounded-full"
                style={{ backgroundColor: 'green' }}
              ></span>{' '}
              Completed
            </span>
            <span className="ml-2">
              <span
                className="h-4 w-4 inline-block rounded-full"
                style={{ backgroundColor: 'yellow' }}
              ></span>{' '}
              Pending
            </span>

          </div>
        </h1>
      </nav>
      {isObject ? (
        <div >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-bold">Order Number</h2>
            <h2 className="text-xl font-bold">Order Amount</h2>
            <h2 className="text-xl font-bold ">Status</h2>
            <h2 className="text-xl font-bold">Order Details</h2>
          </div>
          {currentOrders.map((order) => (
            <div key={order._id} className="mb-4 p-4 bg-white rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">Order #{order._id}</h3> 

                <h3 className="text-xl font-semibold ">{order.items.length}</h3>
                {order.completed ? <span className="h-4 w-4 inline-block rounded-full" style={{ backgroundColor: 'green' }}></span>
                  : <span className="h-4 w-4 inline-block rounded-full" style={{ backgroundColor: 'yellow' }}></span>
                }
                <button
                  className="text-white bg-amber-500 py-2 px-4 rounded-md"
                  onClick={() => toggleDetails(order._id)}
                >
                  Show Details
                </button>
              </div>
                <div className={`transition-max-height ${expandedOrderId === order._id ? 'h-auto' : 'h-0'} overflow-hidden`}>
                  {<ul>
                    {order.items.map((item) => (
                      <li key={item.name} className="flex justify-between items-center border-b py-2">
                        <img src={item.img} alt="item-pic" className="w-16 h-16 object-cover"/>
                        <span className="ml-4" >${item.price}</span>
                      </li>
                    ))}
                  </ul>}
                  <p className="mt-2 text-gray-600">Order Total: ${order.total}</p>
                </div>
              
            </div>
          ))}

            <div className="flex justify-center">
                <button
                className="mx-1 text-blue-500 font-bold"
                onClick={prevPage}
                disabled={currentPage === 1}
                >
                Prev
                </button>
                {Array.from({ length: Math.ceil(temOrders.length / ordersPerPage) }, (_, i) => (
                <button
                    key={i}
                    className={`mx-1 ${currentPage === i + 1 ? 'text-blue-500 font-bold' : 'text-gray-600'}`}
                    onClick={() => paginate(i + 1)}
                >
                    {i + 1}
                </button>
                ))}
                <button
                className="mx-1 text-blue-500 font-bold"
                onClick={nextPage}
                disabled={currentPage === Math.ceil(temOrders.length / ordersPerPage)}
                >
                Next
                </button>
            </div>
        </div>
      ) : (
        <p className="text-center text-gray-600">No orders available.</p>
      )}
    </div>
  );
};

export default Orders