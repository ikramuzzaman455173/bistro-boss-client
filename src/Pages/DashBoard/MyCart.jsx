import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useCart from '../../Hooks/UseCart';
import { Link } from 'react-router-dom';

const MyCart = () => {
  const [cart,refetch] = useCart()
  // console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0)
  // console.log(total);

  const handleDeleteCartItem = (id) => {
    // console.log(`handleDeleteCartItem`, id)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/carts/${id}`, {
          method: "DELETE",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify()
        })
          .then(response => response.json())
          .then(data => {
            if (data.deletedCount > 0)
              // console.log(data)
            Swal.fire(
              'Deleted!',
              'Your menu item been deleted.',
              'success'
            )
            refetch()
          }).catch(error => console.log(`404 page not found ${error.message}`))

      }
    })

  }
  return (
    <div className='w-full relative  md:px-20 px-auto'>
      <div className='uppercase flex font-medium justify-evenly h-[60px] items-center w-full'>
        <h2>Total Cart Item:{cart?.length || 0}</h2>
        <h2>Total Price Is: ${total || 0}</h2>
        <Link to="/dashboard/payment" className='bg-[#d1a054] btn-sm text-white font-bold py-2 px-5j border-0 rounded-sm'>pay</Link>
      </div>

      {/* ====product tables===== */}
      <div className="flex justify-center">
        <table className="table w-full my-5">
          {/* head */}
          <thead>
            <tr>
              <th>sl</th>
              <th>item image</th>
              <th>item name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((row, i) => {
              return (
                <tr key={row._id}>
                  <th>{i + 1}</th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={row.image} alt={row.name} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{row.name}</td>
                  <td>${row.price}</td>
                  <th>
                    <button onClick={() => handleDeleteCartItem(row._id)} className="btn btn-md bg-red-500 text-white">
                      <FaTrashAlt className='text-xl' />
                    </button>
                  </th>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyCart
