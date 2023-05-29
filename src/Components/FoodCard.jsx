import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../Hooks/UseCart";
const FoodCard = ({ item }) => {
    const {_id, name, image, price, recipe } = item;
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch]=useCart()
    const handleAddToCart = (item) => {
        // console.log(`handleAddToCart`, item);
        // const {_id,name,image,price}=item||{}
        const cartItem={menuItemId:_id,name,image,price,email:user.email,}
        if (user && user.email) {
            fetch(`http://localhost:4000/carts`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Menu Added A Shopping Cart 🛒',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        console.log(data);
                    }
                }).catch(error => console.log(`404 page not found ${error.message}`))
        }
        else {
            Swal.fire({
                title: 'Please lgoin to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText:'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div className="card rounded w-96 bg-slate-500 text-white shadow m-5">
            <figure className="bg-red-500"><img src={image} className="w-full h-72 p-2 border-0 rounded-lg shadow-md" alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;