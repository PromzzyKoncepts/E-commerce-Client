import React, { useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ReviewForm = () => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [token, setToken] = useState('');
  let {productid} = useParams()

  
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      comment: comment,
      rating: rating,
    };
        const token = localStorage.getItem('authToken');
      axios.post(`https://aphia-dev.onrender.com/api/reviews/${productid}/create`, data, {
        headers: {
          authorization:  token,
        },
      })
        .then((response) => {
          console.log('Response:', response.data);
  
          if (response.data && response.data.message === 'Review added successfully') {
            setMessage('Review added successfully');}
           else if (response.data && response.data.message === 'Unauthorized. Please log in') {
            setMessage('Unauthorized. Please log in');}
          
          else if(response.data && response.data.message === 'You have already reviewed this product'){
            setMessage('You have already reviewed this product!');
          }
          
          else {
            console.error('Unexpected response:', response.data);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };
  



     return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-md shadow-xl">
      <h2 className="text-2xl font-semibold mb-4">Product Review</h2>
      <form onSubmit={handleSubmit}>
      {message && <div className="text-red-500 text-sm text-center mb-3">{message}</div>}

        <label htmlFor="comment" className="block mb-2 text-sm font-medium text-gray-600">
          Comment:
        </label>
        <textarea
          id="comment"
          name="comment"
          rows="4"
          cols="50"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border border-amber-300 rounded-md focus:outline-none focus:border-amber-500"
        ></textarea>
        <br />

        <label htmlFor="rating" className="block mb-2 text-sm font-medium text-gray-600">
          Rating:
        </label>
        <Box component="fieldset" mb={3} borderColor="transparent">
          <Rating
            name="rating"
            value={rating}
            onChange={(event, newValue) => setRating(newValue)}
          />
        </Box>
        <br />

        <button
  type="submit"
  variant="contained"
  color="primary"
  className="p-2 mt-4 w-full text-white bg-amber-500 text-lg from-neutral-900 tracking-wider hover:bg-amber-400 hover:text-amber focus:outline-none focus:ring focus:border-amber-300"
>
  Submit Review
</button>

      </form>
    </div>
  );
     };

export default ReviewForm;




