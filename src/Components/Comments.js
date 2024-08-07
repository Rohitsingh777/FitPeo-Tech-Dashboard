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
          comment: "This dining website is a fantastic resource for finding new restaurants! The user interface is clean and intuitive, making it easy to search for cuisines and locations. The restaurant profiles are detailed and informative, including menus, photos, and customer reviews. I'll definitely be using this site again!",
          userImage: 'https://example.com/user1.jpg', 

        },
        {
          username: 'Jane Smith',
          rating: 3,
          comment: "While the website has a good selection of restaurants, I found the search filters to be limited. I couldn't narrow down my search based on specific dietary restrictions or price range. Additionally, some restaurant profiles lacked essential information like opening hours.",
          userImage: 'https://images.pexels.com/photos/27364883/pexels-photo-27364883/free-photo-of-retratos-de-um-jovem-dancarino-e-influencer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        },
        {
          username: 'Bob Johnson',
          rating: 5,
          comment: "The website has great potential, but it could be improved by adding a feature to save favorite restaurants for easy access later. Additionally, incorporating real-time restaurant availability and online ordering options would enhance the user experience significantly.",
          userImage: 'https://images.pexels.com/photos/2209524/pexels-photo-2209524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
        },
      ];
  return (
   <div className=' h-full w-full  '>
        <div className='text-2xl text-white pb-2' >Customer's Feedback</div>
        <div className=' md:h-72  md:overflow-y-auto  pb-2'> 
        {comments.map((comment, index) => (
        <div key={index} className=' border-black  border-b-2 pb-2'>
            <div className=' flex flex-row  items-center  py-3'>
            <Avatar alt="User Avatar" src={comment.userImage || ''} /> 
          <span className=' text-white pl-2'>{comment.username}</span>
          
            </div>
          <Rating name="read-only" value={comment.rating} readOnly />
          <p className=' text-yellow-100 text-sm '>{comment.comment}</p>

        </div>
      ))}
      </div>
    </div>
  );
};

export default CommentSection;