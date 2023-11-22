import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import Footer from '../components/Footer';

function OrderDetails() {
    const [orders,setOrders] = useState ([])
    const auth =localStorage.getItem('authToken')
    const [newProducts, setNewProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [errors,setErrors] = useState('')
    const [isObject,setIsObject] = useState(true)    
    let {currentId,id} = useParams()
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
                const foundItem = res.data.message.find(item => item._id === currentId)
                if (foundItem) {
                  // Use the spread operator to create a new array with the found item
                  setOrders([foundItem]);
                }
                // setOrders(res.data.message)

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
              console.log(productId,'look is details');
              const response = await axios.get(
                `https://aphia-dev.onrender.com/api/products/${productId.product_id}`
              );
  
              const productDetails = response.data.message;
                  console.log(productDetails , " details of details");
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


    const handleBuyAgain = (productId) => {
      // Handle the redirection logic to the product page with the productId
      // Example: Redirect to "/products/:productId"
      return navigate(`/products/${productId}`)
    };
    console.log(orders,'this order');
    console.log(newProducts,'product..detail');
  return (
    <>
      {/* <h1>hello</h1> */}
      {orders.map((order) =>(
        <div >
        <div className="max-w-2xl mx-auto p-4 border rounded shadow-lg">
        {/* Order Information Section */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 bg-gray-500 rounded p-1">Order Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Order No  </p>
              <p className="font-semibold overflow-x-auto">{order._id}</p>
            </div>
            <div>
              <p className="font-semibold text-right">Order Date</p>
              <p className="text-right">{order.order_date.slice(0,10)}</p>
            </div>
          </div>
        </div>

        {/* Payment Information Section */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 bg-gray-500 rounded p-1">Payment Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Payment Method</p>
              <p>Bank Transfer</p>
            </div>
            <div>
              <p className="font-semibold">Total Amount</p>
              <p>₦{order.amount}</p>
            </div>
          </div>
        </div>

        {/* Delivery Information Section */}
        <div className="mb-4">
          <h2 className="text-lg font-bold mb-2 bg-gray-500 rounded p-1">Delivery Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-semibold">Shipping Address</p>
              <p>{order.street_address.charAt(0).toUpperCase()+order.street_address.slice(1)+' ,'+
              order.city.charAt(0).toUpperCase()+order.city.slice(1)+'.'}</p> 
            </div>
            <div>
              <p className="font-semibold">State</p>
              <p>{order.state.charAt(0).toUpperCase()+order.state.slice(1)}</p>
            </div>
          </div>
        </div>

        {/* Items Ordered Section */}
        <div>
          <h2 className="text-lg font-bold mb-2 bg-gray-500 rounded p-1">Items Ordered</h2>
          <div className='flex flex-col'>
            {order.products.map((item) => (
              <div key={item.product_id} className="flex border-b-4 py-2">
                {/* Display product details if available */}
                {newProducts.length > 0 && newProducts.some((product) => product.id === item.product_id) && (
                  <div >
                    <div className="grid grid-cols-4 gap-3">
                      <img
                        src={newProducts.find((product) => product.id === item.product_id).images}
                        alt="item-pic"
                        className="w-16 h-16 object-cover mr-5 images"
                      />
                      <div>
                        <p className="font-semibold">Product</p>
                        <p className='text-left'>{newProducts.find((product) => product.id === item.product_id).name}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Quantity</p>
                        <p className='text-center'>{item.quantity}</p>
                      </div>
                      <div>
                        <p className="font-semibold">Price</p>
                        <p>₦{newProducts.find((product) => product.id === item.product_id).price.toFixed(2)}</p>
                      </div>
                    </div>
                      <div className='flex justify-end'>
                        {/* Buy Again Button/Link */}
                        <button onClick={() => handleBuyAgain(item.product_id)} className="mt-2 bg-blue-500 text-white px-2 py-1 rounded">
                          Buy Again
                        </button>
                      </div>
                  <div>
                </div>
                  </div>
                )}
              </div>
            ))}
          <div className='flex justify-between '>
            <p className='font-bold'>Total:</p>
            <p className='font-semibold'>₦{order.amount}</p>
          </div>
          </div>
        </div>

      </div>
          {/* <p>{order.state.charAt(0).toUpperCase()+order.state.slice(1)}</p>  */}
    </div>
        
    ))}
    <Footer />
    </>
  )
}

export default OrderDetails