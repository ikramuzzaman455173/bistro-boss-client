import React from 'react'
import UseMenu from '../../Hooks/UseMenu'
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../Hooks/UseAxiosSecures';
import Swal from 'sweetalert2';

const ManageItems = () => {
  const [menu, ,refetch] = UseMenu()
  const [axiosSecure]=useAxiosSecure()
  console.log(menu, 'menu');

    const handleDeleteMenuItem = (id) => {
      console.log(`handleDeleteMenuItem`, id)
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be delete the this menu item!",
        icon: 'warning',
        position:'center',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete the item!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/menu/${id}`)
            .then(res => {
              if (res.data.deletedCount > 0) {
                // console.log(data);
                Swal.fire(
                  'Deleted',
                  'Menu item has been deleted',
                  'success'
                  ),
                  refetch()
              }
            }).catch(error => console.log(`404 page not found ${error.message}`))
        }
      })
    }
  return (
    <div>
      <h3 className='text-3xl font-bold text-center'>total menu items is:{menu.length||0}</h3>
      <div className="container mx-auto py-6 px-4">
        <div className="flex flex-col">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="manage-item-table-th">
                      ID
                    </th>
                    <th className="manage-item-table-th">
                      item image
                    </th>
                    <th className="manage-item-table-th">
                      item name
                    </th>
                    <th className="manage-item-table-th">
                      price
                    </th>
                    <th className="manage-item-table-th">
                      action
                    </th>
                    <th className="manage-item-table-th">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {menu.map((item, i) => (
                    <tr key={item._id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i + 1}</td>
                      <td className="manage-item-table-td">
                        <img src={item.image} alt="menu image" className='w-3/4 h-32 rounded-md border-0' />
                      </td>
                      <td className="manage-item-table-td">{item.name}</td>
                      <td className="manage-item-table-td">${item.price}</td>
                      <td className="manage-item-table-td">
                        <button className="mr-2">
                          <FaEdit className='text-slate-500 active:text-green-600 text-xl' />
                        </button></td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button>
                          <FaTrashAlt onClick={()=>handleDeleteMenuItem(item._id)} className='text-red-500 active:text-red-600 text-xl' />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageItems
