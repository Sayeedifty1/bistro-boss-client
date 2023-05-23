
const FoodCard = ({item}) => {
    const {name, price, recipe, image} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt={name} /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 py-1 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title ">{name}!</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 text-yellow-600 hover:text-yellow-500">ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;