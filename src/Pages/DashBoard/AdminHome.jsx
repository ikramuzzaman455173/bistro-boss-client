import React from 'react'
import UseAuth from '../../Hooks/UseAuth'
import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from '../../Hooks/UseAxiosSecures'
import { FaCreditCard, FaUsers, FaShuttleVan } from 'react-icons/fa'
import { SiCodechef } from 'react-icons/si'
import AdminPaymentTriangleChart from './AdminPaymentTriangleChart'
import AdminPaymentPieChart from './AdminPaymentPieChart'
const AdminHome = () => {
  const { user } = UseAuth()
  const [axiosSecure] = useAxiosSecure()
  const { data: stats = {} } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats')
      return res.data
    }
  })

  console.log('stats', stats);
  const { data: chartData = [] } = useQuery({
    queryKey: ['chart-data'],
    queryFn: async () => {
      const res = await axiosSecure.get('/order-stats')
      // console.log('order-stats',res.data);
      return res.data
    }
  })

  return (
    <div>
      <h3 className="text-3xl text-orange-500">Hi Welcome back <span className='text-slate-600'>{user.displayName}</span></h3>
      <div className='flex justify-between mt-10'>
        <div className=' bg-gradient-to-r from-[#BB34F5] via-[#BB34F5] paymet-box'>
          <div className='text-3xl font-bold'><FaCreditCard /></div>
          <div className='flex flex-col font-medium text-xl'>
            <h3>${stats.revenue}</h3>
            <h3>revenu</h3>
          </div>
        </div>


        <div className=' bg-gradient-to-r from-[#D3A256] via-#D3A256] paymet-box'>
          <div className='text-3xl font-bold'><FaUsers /></div>
          <div className='flex flex-col font-medium text-xl'>
            <h3>{stats.users}</h3>
            <h3>customers</h3>
          </div>
        </div>


        <div className=' bg-gradient-to-r from-[#FE4880] via-[#FE4880] paymet-box'>
          <div className='text-3xl font-bold'><SiCodechef /></div>
          <div className='flex flex-col font-medium text-xl'>
            <h3>{stats.products}</h3>
            <h3>products</h3>
          </div>
        </div>


        <div className=' bg-gradient-to-r from-[#6AAEFF] via-[#6AAEFF] paymet-box'>
          <div className='text-3xl font-bold'><FaShuttleVan /></div>
          <div className='flex flex-col font-medium text-xl'>
            <h3>{stats.orders}</h3>
            <h3>orders</h3>
          </div>
        </div>




      </div>

      <div className="flex my-10">
        <div className="w-1/2">
          <AdminPaymentTriangleChart chartData={chartData} />
        </div>

        <div className="w-1/2">
          <AdminPaymentPieChart chartData={chartData} />
        </div>

      </div>
      </div>

  )
}

export default AdminHome
