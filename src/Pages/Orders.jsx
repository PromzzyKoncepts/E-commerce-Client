import React, { useEffect, useState, } from 'react'
import axios from 'axios'
import '../stylesheets/orders.css'
import { Navigate } from "react-router-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";


import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import EarbudsIcon from "@mui/icons-material/Earbuds";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import MicrowaveIcon from "@mui/icons-material/Microwave";
import IceSkatingIcon from "@mui/icons-material/IceSkating";
import LaptopMacOutlinedIcon from '@mui/icons-material/LaptopMacOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import LogOutButton from '../components/LogOutButton';


function Orders() {
    const [orders,setOrders] = useState ([])
    const [isObject,setIsObject] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const [errors,setErrors] = useState('')
    const [newProducts, setNewProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [ordersPerPage] = useState(5); 
    const [isClicked,setIsClicked] = useState(false) 
    const [expandedOrderId, setExpandedOrderId] = useState(null);
    const auth =localStorage.getItem('authToken')
    const navigate = useNavigate()
    

    useEffect(() =>{
        setIsLoading(true)
        axios.get('https://aphia-dev.onrender.com/api/orders',{
            headers:
            {
                authorization: auth
            }
        })
        .then(res => {
          if(res.data.success === true){
            setIsLoading(false)
            setOrders(res.data.message)

          }else if(typeof res.data.message === 'string'){
              setIsObject(false)
              if(res.data.message ==='jwt expired'){
                setErrors('Please login again to view your Orders')
              }else{
                setErrors(res.data.message)
              }
          }
            
        })
        
    },[]);

    useEffect(() => {
      const fetchProductDetails = async () => {
        try {
          const productData = [];
  
          for (const order of orders) {
            for (const productId of order.products) {
              console.log(productId,'look is');
              const response = await axios.get(
                `https://aphia-dev.onrender.com/api/products/${productId.product_id}`
              );
  
              const productDetails = response.data.message;
                  console.log(productDetails , "kjgdjgluttdhc");
              productData.push({
                id: productDetails._id,
                name: productDetails.name,
                description: productDetails.description,
                price: productDetails.price,
                images: productDetails.images[0],
                // Add more properties as needed
              });
            }
          }
  
          setNewProducts(productData);
          setIsLoading(false);
        } catch (error) {
          console.error('Error fetching product details:', error);
          setIsLoading(false);
        }
      };
  
      fetchProductDetails();
    }, [orders]);

    const toggleDetails = (_id) => {
        navigate(`/orders/${_id}`)
        // setExpandedOrderId((prevId) => (prevId === _id ? null : _id));
    };

      const logOut = () =>{
        // <Navigate to="/logout" />
        setIsClicked(true)
      }
    // Get current orders for the current page
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(orders.length / ordersPerPage)) {
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
    <>
      {isLoading
        ?
        <div className='p-8 w-10/12 mx-auto flex items-center justify-center h-[70vh]'>
            <p className=' animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 '></p>
        </div>
        :
        <div className="container mx-auto my-8 p-8 bg-gray-100 rounded-lg shadow-md">
          <nav className="text-center mb-8">
            <h1 className="text-sm font-bold flex items-center justify-between mb-2">
                My Orders
                <div className='h-4'>
                  <span className="ml-2">
                    Completed
                    <span
                      className="h-4 w-4 inline-block rounded-full"
                      style={{ backgroundColor: 'green' }}
                    ></span>{' '}
                  </span>
                  <span className="ml-2">
                    Pending
                    <span
                      className="h-4 w-4 inline-block rounded-full"
                      style={{ backgroundColor: '#f59e0b' }}
                    ></span>{' '}
                  </span>

                </div>
            </h1>
          </nav>
          {isObject ? (
              <div >
                {currentOrders.map((order) => (
                  <div key={order._id} className={`mb-4 p-4 rounded-lg shadow-md ${
                    expandedOrderId === order._id ? 'text-white bg-blue-500' : ' bg-white'
                  }`}>
                    <div className='flex-col justify-between items-center mb-2 '>
                      <div className='flex justify-between items-center border-b-2'>
                        <h3 className="text-sm font-bold">Order Date: <span className='text-x1'>{order.order_date.slice(0,10)}</span></h3> 
                        <button
                          className="text-white bg-amber-500 py-1 px-2 rounded-md mb-2"
                          onClick={() => toggleDetails(order._id)}
                        >
                          Show Details
                        </button>
                      </div>


                      <div className=' flex justify-between items-center border-b-2 py-2 rounded'>
                          {order.products.map((item) => (
                            <ul>
                              <li key={item.product_id}>
                                {/* Display product details if available */}
                                {newProducts.length > 0 && newProducts.some((product) => product.id === item.product_id) && (
                                <div className="flex">
                                  <img
                                    src={newProducts.find((product) => product.id === item.product_id).images}
                                    alt="item-pic"
                                    className="w-16 h-16 object-cover mr-5 images"
                                  />
                                </div>
                              )}
                              </li>
                            </ul>
                          ))}
                          {order.completed ? <span className="h-4 w-4 inline-block rounded-full" style={{ backgroundColor: 'green' }}></span>
                            : 
                            <span className="h-4 w-4 inline-block rounded-full" style={{ backgroundColor: '#f59e0b' }}></span>
                          }
                      </div>
                      
                      <div className='flex justify-between items-center'>
                        <p className = "font-semibold"><span className='font-bold'>Total:</span>₦{order.amount}</p>
                        <p className = "font-semibold"><span className='font-bold'>Order ref:</span> {order.order_ref}</p>
                      </div>
                      
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
                      {Array.from({ length: Math.ceil(orders.length / ordersPerPage) }, (_, i) => (
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
                      disabled={currentPage === Math.ceil(orders.length / ordersPerPage)}
                      >
                      Next
                      </button>
                  </div>
              </div>
              ) : (
              <>
                <p className="text-center text-white text-2xl font-bold bg-green-600 rounded-lg">{errors}</p>
                {isClicked?<LogOutButton />:
                <div className='flex justify-center'>
                  <button onClick={logOut} className="text-white bg-amber-500 py-1 px-2 rounded-md mb-2 ml">Login here</button>
                </div>
                }
                <div className="rounded item1 col-span-2 bg-slate-200">
                  <h3 className=" bg-slate-300 p-3 rounded "> Shop Categories Here <ArrowDownwardOutlinedIcon /> </h3>
                  <div className="navlink flex flex-col gap-2 items-left justify-center">
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/laptops"
                      >
                        <LaptopMacOutlinedIcon /> Laptops
                      </NavLink>
                    </div>
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline phones text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/devices"
                      >
                        <PhoneIphoneIcon />
                        Phone & Tablets
                      </NavLink>
                    </div>
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/shoes"
                      >
                        <IceSkatingIcon /> Shoes
                      </NavLink>
                    </div>
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/electronics"
                      >
                        <MicrowaveIcon /> Electronics
                      </NavLink>
                    </div>
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/fashion/male"
                      >
                        <MaleIcon /> Male wears
                      </NavLink>
                    </div>
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/fashion/female"
                      >
                        <FemaleIcon /> Female wears
                      </NavLink>
                    </div>
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/accessories"
                      >
                        <EarbudsIcon /> Accessories
                      </NavLink>
                    </div>
                    <div className="hover:border-r-2 hover:border-amber-500 hover:bg-slate-300">
                      <NavLink
                        className="p-3 no-underline text-[#3a3a3a] text-lg gap-2 flex items-center "
                        to="/others"
                      >
                        <DevicesOtherIcon /> Other Categories
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
          )}
        </div>
      }
    </>
  );
};

export default Orders