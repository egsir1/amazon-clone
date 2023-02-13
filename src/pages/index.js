import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import { HydrationProvider } from "react-hydration-provider";

export default function Home({ products }) {
  //console.log(products);
  return (
    <HydrationProvider>
      <div className="bg-gray-100">
        <Head>
          <title>amazon-clone</title>
        </Head>

        <Header />
        <main className="max-w-screen-2xl mx-auto ">
          {/* Banner with react-responsive-carousel gradient effect */}
          <Banner />

          {/* ProductFeed */}
          <ProductFeed products={products} />
        </main>
      </div>
    </HydrationProvider>
  );
}

//server-side rendering >>>> fetching the products
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
    },
  };
}
