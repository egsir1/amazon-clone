// import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
// import { useState } from "react";
import { addToBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function Product({ id, title, price, description, category, image }) {
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  //const [hasPrime] = useState(Math.random() < 0.5);
  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    //Sending the product as an action to the REDUX store... the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <div className="absolute top-2 right-2 bag text-xs  object-contain italic text-gray-400">
        {category}
      </div>

      <Image
        src={image}
        alt="product"
        height={200}
        width={200}
        priority
        style={{ width: "auto", objectFit: "contain" }}
      />

      <h4 className="my-3">{title}</h4>
      {/* <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon
              key={Math.random()}
              className=" text-yellow-500 w-6 h-5 yellow-500"
            />
          ))}
      </div> */}

      <div className="text-xs my-2 line-clamp-2">{description}</div>

      <div className="mb-5">${price}</div>

      {/* {hasPrime && (
        <div className="flex items-center space-x-2 mt-5">
          <img className="w-12 h-auto" src="https://links.papareact.com/fdw" />
          <div className="text-xs text-gray-500">FREE Next-day Delivery</div>
        </div>
      )} */}
      <button onClick={addItemToBasket} className="mt-auto button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
