import React, { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {

  const [posts, setPosts] = useState([

    {
    username:" Living my best life",
    caption: " Living my best life",
    imageUrl: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"

    },

    {
      username: "Darren",
      caption: " Living my best life",
      imageUrl: "https://mildaintrainings.com/wp-content/uploads/2017/11/react-logo.png"
  
      }

  ]);

  return (
    <div className="app">
<div className="app__header">
<img
className="app__headerImage"
src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
alt=""
/>
</div>

<h1> Hello Darren  </h1>

{
  posts.map(post => (

    < Post username={post.username} caption ={post.caption} imageUrl ={post.imageUrl} />

  ))
}


{/* Posts} */}

{/* Posts} */}


    </div>
  );
}

export default App;
