import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  //"https://links.papareact.com/f90"
  return (
    <header>
      {/* top nav */}
      <div className=" items-center main clone bg-amazon_blue flex  flex-grow-1 py-2">
        <div className=" mt-2 imageLogo flex items-center flex-grow-1 sm:flex-grow-0 ">
          <Image
            onClick={() => router.replace("/")}
            style={{ borderRadius: "10px", objectFit: "contain" }}
            src="/assets/amazon-clone.png"
            width={150}
            height={40}
            alt="pic"
            className="cursor-pointer imgclone margin-1"
          />
        </div>

        {/* Search */}

        <div className="bg-yellow-400 hidden sm:flex  h-10  items-center rounded-md flex-grow cursor-pointer mt-2  ">
          <input
            type="text"
            className="p-2 w-6 flex-grow flex-shrink focus:outline-none px-4"
          />
          <SearchIcon className=" search h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white flex items-center  text-xs space-x-2 mx-2 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="cursor-pointer link "
          >
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <div className="font-extrabold  md:text-sm ">Account & Lists</div>
          </div>
          <div className="cursor-pointer link ">
            <p>Returns</p>
            <div className="font-extrabold md:text-sm">& Orders</div>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className=" link cart relative flex items-center"
          >
            {items.length > 0 && (
              <span className="absolute top-0 right-0 items-center text-center  md:right-10  text-black font-bold rounded-full  h-4 w-4 circle bg-yellow-400 ">
                {items.length}
              </span>
            )}
            <ShoppingCartIcon className="h-10" />
            <div className=" hidden md:inline font-extrabold md:text-sm ">
              Basket
            </div>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <div className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </div>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
};

export default Header;
