import { useSession } from "next-auth/react";
import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectItems, selectTotal } from "../slices/basketSlice";

function Checkout() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const { data: session } = useSession();
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left side */}

        <div className="flex-grow m-5 shadow-sm">
          <Image
            style={{
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            src="https://links.papareact.com/ikj"
            width={1020}
            height={250}
            alt="ADV"
          />
          <div className="flex flex-col p-5 space-10 bg-white">
            <h1 className=" border-b pb-4 text-center  text-3xl ">
              {" "}
              {items.length === 0
                ? "Your Amazon basket is empty"
                : "Shopping Basket"}
            </h1>

            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
              />
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="flex flex-col bg-white p-10  shadow-md">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="font-bold"> $ {total}</span>{" "}
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to check out" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
export default Checkout;
