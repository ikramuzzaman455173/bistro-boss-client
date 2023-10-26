import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { FaTrashAlt, FaUserShield } from 'react-icons/fa'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../Hooks/UseAxiosSecures'

const AllUsers = () => {
  const [axiosSecure]=useAxiosSecure()
  const { data: users = [], refetch } = useQuery(['users'], async () => {
    const res = await axiosSecure.get(`/users`)
    return res.data
  })

  const handleMakeAdmin = (id) => {
    // console.log(`handleMakeAdmin`, id)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be Update The This User Role!",
      icon: 'warning',
      position:'center',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, User Role Update It!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/users/admin/${id}`, {
          method: "PATCH"
        })
          .then(response => response.json())
          .then(data => {
            // console.log(data);
            if (data.modifiedCount) {
              Swal.fire(
                'Updated',
                'User Role Has Been Updated',
                'success'
              ),
                refetch()
            }
          }).catch(error => console.log(`404 page not found ${error.message}`))
      }
    })
  }

  const handleDeleteUser = (id) => {
    // console.log(`handleDeleteUser`, id)

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be delete the user!",
      icon: 'warning',
      position:'center',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete the user!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/users/${id}`, {
          method: "DELETE"
        })
          .then(response => response.json())
          .then(data => {
            if (data.deletedCount > 0) {
              // console.log(data);
              Swal.fire(
                'Deleted',
                'User Has Been Deleted',
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
      <h3 className='text-3xl font-semibold'>total users:{users.length}</h3>


      <div className="w-full overflow-x-auto my-5">
        <table className="w-full text-left border border-separate rounded border-slate-200">
          <tbody>
            <tr>
              <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">No</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Email</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Roll</th>
              <th scope="col" className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Action</th>
            </tr>

            {users?.map((user, i) => {
              return (<tr key={user._id}>
                <th scope="row" className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{i + 1}</th>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{user.name}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 normal-case">{user.email}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-md my-5 bg-green-600 text-white">
                  <FaUserShield className='text-2xl' />
                </button>}</td>
                <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
                  <button onClick={() => handleDeleteUser(user._id)} className="btn btn-md my-5 bg-red-500 text-white">
                    <FaTrashAlt className='text-xl' />
                  </button>
                </td>
              </tr>)
            })}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default AllUsers
