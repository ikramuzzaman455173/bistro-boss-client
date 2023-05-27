import React from 'react'
import OrderImg from "../../assets/shop/order.jpg";
import Cover from '../SharedPage/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../Hooks/UseMenu';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import OrderTab from '../../Components/OrderTab';
const Order = () => {
  const { category } = useParams()
  const categories = ['salad','pizza','soup', 'dessert','drinks','offered']
  const initialIndex=categories.indexOf(category)
  const [menu] = UseMenu()
  const salad = menu.filter(item => item.category === 'salad')
  // console.log(salad);

  const pizza = menu.filter(item => item.category === 'pizza')
  // console.log(pizza);

  const soup = menu.filter(item => item.category === 'soup')
  // console.log(soup);

  const dessert = menu.filter(item => item.category === 'dessert')
  // console.log(dessert,'dessert');

  const drinks = menu.filter(item => item.category === 'drinks')
  const offered = menu.filter(item => item.category === 'offered')
  // console.log(offered);

  return (
    <div>
        <Helmet>
        <title>Bistro Boss || Order Page</title>
      </Helmet>
      <Cover img={OrderImg} title={"Order Food"} />
      <Tabs defaultIndex={initialIndex} onSelect={(index) => console.log(index)}>
        <TabList className='my-10'>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
          <Tab>Offered</Tab>
        </TabList>
        <TabPanel>
          {/* <div className='grid md:mx-0 mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {salad?.map((item) => <FoodCard item={item} key={item._id} />)}
          </div> */}
          <OrderTab items={salad}/>
        </TabPanel>

        <TabPanel>
          {/* <div className='grid md:mx-0 mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {pizza?.map((item) => <FoodCard item={item} key={item._id} />)}
          </div> */}
          <OrderTab items={pizza}/>
        </TabPanel>


        <TabPanel>
          {/* <div className='grid md:mx-0 mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {soup?.map((item) => <FoodCard item={item} key={item._id} />)}
          </div> */}
          <OrderTab items={soup}/>
        </TabPanel>

        <TabPanel>
          {/* <div className='grid md:mx-0 mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {dessert?.map((item) => <FoodCard item={item} key={item._id} />)}
          </div> */}
          <OrderTab items={dessert}/>
        </TabPanel>

        <TabPanel>
          {/* <div className='grid md:mx-0 mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {drinks?.map((item) => <FoodCard item={item} key={item._id} />)}
          </div> */}
          <OrderTab items={drinks}/>
        </TabPanel>

        <TabPanel>
          {/* <div className='grid md:mx-0 mx-auto gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {offered?.map((item) => <FoodCard item={item} key={item._id} />)}
          </div> */}
          <OrderTab items={offered}/>
        </TabPanel>


      </Tabs>
    </div>
  )
}

export default Order