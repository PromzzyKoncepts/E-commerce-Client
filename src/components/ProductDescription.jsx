import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { itemAdded } from "../redux/features/cartSlice";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { Star } from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";

const ProductDescription = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  const [src, setSrc] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://aphia-dev.onrender.com/api/products/${id}`)
      .then((res) => {
        setIsLoading(false);
        setData(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://aphia-dev.onrender.com/api/products/${id}`)
      .then((res) => {
        setIsLoading(false);
        setImages(res.data.message.images);
      });
  }, []);
  const handleImage = (e) => {
    images.forEach((url) => {
      if (url === e.target.src) {
        setSrc(url);
      }
    });
  };

  // let formattedDate = '';
  // reviews.forEach((review) => {
  //   formattedDate = formatDistanceToNow(new Date(review.date), { addSuffix: true });
  // });

  // useEffect(() => {
  //   setIsLoading(true);

  //   // Fetch reviews data from API
  //   axios
  //     .get(`https://aphia-dev.onrender.com/api/reviews/${id}`)
  //     .then((res) => {
  //       console.log(res)
  //       setIsLoading(false);
  //       setReviews(res.data.message);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="p-8 w-10/12 mx-auto flex items-center justify-center h-[70vh]">
          <p className=" animate-spin h-5 w-5 border-2 border-zinc-800 border-x-transparent rounded-full p-4 "></p>
        </div>
      ) : (
        <div>
          <main className="p-6 w-10/12 mx-auto bg-slate-50 my-3 relative flex ">
            <aside className="w-1/3 bg-slate-50">
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="main flex-1 h-[90%] items-center justify-center">
                  <img src={src || images[0]} alt="" />
                </div>
                <div className="buttom flex gap-4 ">
                  {images.map((src) => (
                    <div className="h-[4rem]" key={src}>
                      <img
                        src={src}
                        alt=""
                        className="h-full w-full"
                        onClick={(e) => handleImage(e)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </aside>
            <section className="w-2/3 p-2">
              <h2 className="font-mono font-medium text-base md:text-lg ">
                {data.name}
              </h2>
              <h3 className="font-extrabold text-lg">₦ {data.price}</h3>
              <p className="my-2">{data.description}</p>
              <div className="add">
                <button
                  className="uppercase bg-orange-500 text-white hover:bg-orange-700 block w-full rounded py-2"
                  onClick={() => dispatch(itemAdded(data))}
                >
                  <AddShoppingCartIcon />
                  add to cart
                </button>
              </div>
            </section>
          </main>
          {/* <div className="reviews mt-4 w-10/12 mx-auto mt-5">
            <h3 className="font-extrabold text-lg mb-2">Reviews</h3>
            {reviews.length !== 0 ? (

            reviews?.map((review) => (
              <div key={review.id} className="review mb-4">
                <div className="flex justify-between items-center mb-1">
                  <div className="flex-col items-center">
                    <p className="font-bold">{review.by}</p>
                    <Rating
                      value={review.rating}
                      readOnly
                      precision={0.5}
                      icon={<Star />}
                    />
                  </div>
                  <p className="text-gray-500">
                    {formatDistanceToNow(new Date(review.edited), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))
            ) : <p>No reviews yet!</p>}
          </div> */}
        </div>
      )}
    </>
  );
};

export default ProductDescription;
