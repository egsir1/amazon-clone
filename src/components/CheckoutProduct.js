import Image from "next/image";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

function CheckoutProduct({ id, title, price, description, category, image }) {
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
    //Push item into redux
    dispatch(addToBasket(product));
  };

  const removeItemFromBasket = () => {
    //Remove item from redux
    dispatch(removeFromBasket({ id }));
  };
  return (
    <div className="grid grid-cols-5 mb-2">
      {/* Left */}
      <Image
        style={{ objectFit: "contain", marginTop: "0.5rem" }}
        src={image}
        height={200}
        width={200}
        alt="Product"
        priority
      />

      {/* Middle */}

      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p>$ {price}</p>
      </div>
      {/* Right add/remove buttons */}
      <div className="flex flex-col space-y-2  my-2 justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to Basket
        </button>
        <button onClick={removeItemFromBasket} className="button">
          Remove from Basket
        </button>
      </div>
    </div>
  );
}
export default CheckoutProduct;
