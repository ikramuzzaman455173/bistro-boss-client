import React from 'react'
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../Hooks/UseAxiosSecures';
import { toast } from 'react-toastify';
const imageHostingToken=import.meta.env.VITE_IMAGE_UPLOAD_APIKEY
const AddItem = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`
  const [axiosSecure] = useAxiosSecure()
  // const onSubmit = data => console.log(data);
  const onSubmit = data => {
    const formData = new FormData()
    formData.append('image', data.image[0])
    fetch(imageHostingUrl, {
      method: 'POST',
      body:formData
    })
      .then(res => res.json())
      .then(imageResponse => {
        console.log(imageResponse);
        if (imageResponse.success) {
          const imgURL = imageResponse.data.display_url
          const { name, category, price, recipe } = data || {}
          const newItem={name, category, price:parseFloat(price).toFixed(2), recipe ,image:imgURL}
          console.log(newItem, imgURL);
          axiosSecure.post('/menu', newItem)
          .then(data => {
            if (data.data.insertedId) {
              console.log(data.data,'menuItem');
              toast('New Menu Item Added Successfully!', { autoClose: 2000 })
              reset()
                  }
                }).catch(error => {
                  console.log(`Error:`,error.message);
                })
        }
      }).catch(err => {
      console.log(err.message);
    })
  }


  console.log(errors);
  console.log(imageHostingToken,'imgToken');
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto border-2 p-4 rounded-md border-slate-300">
        <div className="flex flex-wrap mb-4">
          <div className="w-full pr-4 mb-4 md:mb-0">
            <label htmlFor="first_name" className="block text-gray-700 font-bold mb-2">Recipe Name</label>
            <input type="text" placeholder='Recipe Name' {...register("name", {required: true, maxLength: 100})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <div className="flex flex-wrap mb-4">
          <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Category</label>
            <select {...register("category", { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option >Choose Menu Item</option>
              <option value="salad">salad</option>
              <option value="pizza">pizza</option>
              <option value="soup">soup</option>
              <option value="dessert">dessert</option>
              <option value="drinks">drinks</option>
              <option value="offered">offered</option>
            </select>
          </div>

          <div className="w-full md:w-1/2 pl-4">
            <label className="block text-gray-700 font-bold mb-2">price</label>
            <input type="number"  name="phone" {...register("price", { required: true })} step="any" placeholder='price' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Recipe Details</label>
          <textarea placeholder='recipe details...' {...register("recipe", { required: true })} rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "></textarea>
        </div>
        <div className="w-full md:w-1/2 pl-4 my-5">
            <label className="block text-gray-700 font-bold mb-2">Add Item Image</label>
            <input type="file" {...register("image", { required: true })} className="file-input w-full max-w-xs" />
          </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline capitalize">add item</button>
      </form>
    </div>
  )
}

export default AddItem