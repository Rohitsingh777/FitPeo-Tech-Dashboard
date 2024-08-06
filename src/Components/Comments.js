import React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import { Minimize } from '@mui/icons-material';

const CommentSection = () => {


    const comments = [
        {
          username: 'John Doe',
          rating: 4,
          comment: 'This is a great product!',
          userImage: 'https://example.com/user1.jpg', 

        },
        {
          username: 'Jane Smith',
          rating: 3,
          comment: 'Product could be improved.',
          userImage: 'https://images.pexels.com/photos/27364883/pexels-photo-27364883/free-photo-of-retratos-de-um-jovem-dancarino-e-influencer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        },
        {
          username: 'Bob Johnson',
          rating: 5,
          comment: 'Excellent product!',
          userImage: 'https://images.pexels.com/photos/2209524/pexels-photo-2209524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        },
      ];
  return (
   <div>
        <div className='  text-2xl text-white pb-2' >Customer's Feedback</div>
      {comments.map((comment, index) => (
        <div key={index} className=' border-black  border-b-2 pb-2'>
            <div className=' flex flex-row  items-center  py-3'>
            <Avatar alt="User Avatar" src={comment.userImage || ''} /> 
          <span className=' text-white pl-2'>{comment.username}</span>
          
            </div>
          <Rating name="read-only" value={comment.rating} readOnly />
          <p className=' text-yellow-100 '>{comment.comment}</p>

        </div>
      ))}
    </div>
  );
};

export default CommentSection;