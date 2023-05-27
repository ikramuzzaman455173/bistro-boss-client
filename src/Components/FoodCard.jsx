const FoodCard = ({item}) => {
  const {name, image, price, recipe} = item;
  return (
      <div className="card rounded w-96 bg-slate-500 text-white shadow m-5">
          <figure className="bg-red-500"><img src={image} className="w-full h-72 p-2 border-0 rounded-lg shadow-md" alt="Shoes" /></figure>
          <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
          <div className="card-body flex flex-col items-center">
              <h2 className="card-title">{name}</h2>
              <p>{recipe}</p>
              <div className="card-actions justify-end">
                  <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
              </div>
          </div>
      </div>
  );
};

export default FoodCard;