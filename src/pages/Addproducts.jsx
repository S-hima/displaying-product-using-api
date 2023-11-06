import axios from 'axios';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Addproducts = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");

  const handleClick = (e) => { 
    e.preventDefault()
    if(title&& category&& price&& rating){
      const formdata = new FormData();
      formdata.append("title",title);
      formdata.append("category",category);
      formdata.append("price",price);
      formdata.append("rating",rating);
      axios.post(" https://fakestoreapi.com/products",formdata)
      .then(() => {
        toast(" successfully submitted");
        setTitle(" ");
        setCategory(" ");
        setPrice(" ");
        setRating(" ");
      })
    

    }
    
  }
  return (
     <div className='flex gap-8 m-8'>
    
    <form action="" className='border-2 w-[50%] p-4 mt-4 ml-2 mb-4 bg-slate-100 '>
      <div className='container  '>

        <h1 className='text-2xl text-center font-bold mb-4 '>Addproduct</h1>
        <div className='grid grid-cols-2 gap-2'>
          <div>
            <label htmlFor="name" >Title</label>
            <input onChange={e => setTitle(e.target.value)} value={title} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='title' placeholder='title' required />
          </div>
          <div>
            <label htmlFor="name" >Category</label>
            <input onChange={e => setCategory(e.target.value)} value={category} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="text" name='category' placeholder='category' required />
          </div>
          <div>
            <label htmlFor="phone" >Price</label>
            <input onChange={e => setPrice(e.target.value)} value={price} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="number" name='price' placeholder='price' required />
          </div>
          <div >
            <label htmlFor="address" >Rating</label>
            <input onChange={e => setRating(e.target.value)} value={rating} className='px-3 py-2 border w-full focus:outline-none focus:ring-blue-500 rounded-md' type="number" name='rating' placeholder='rating' required />
          </div>
        </div>
       
        <div className='text-center'>
          <button type='submit' onClick={handleClick} className='bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-700 ' >
            Add product
          </button>
          <ToastContainer />
        </div>
      </div>
    </form >
</div>
  )
}

export default Addproducts