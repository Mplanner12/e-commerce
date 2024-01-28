"use client";
import SideMenu from "@/app/components/SideMenu";
import React, { useState, useEffect } from "react";
import { db } from "@/app/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

interface FavoritePageSideNavProps {
  navOpen: boolean;
}

// type ProductType = {
//   name?: string,
//   category?: string,
//   description?: string,
//   image?: string,
//   price?: string
// }

async function getDataFromDb() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const data: { id: string }[] = [];
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() });
  });
  return data;
}

const Favoritepage = ({ navOpen }: FavoritePageSideNavProps) => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    async function fetchData() {
      const data = await getDataFromDb();
      // console.log(data);
      setProducts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <SideMenu navOpen />

      <main className="flex-col justify-center mt-[5rem] w-full">
        <h1 className="font-bold text-center text-black">My Favorites</h1>
        <div className="w-full flex-col justify-center items-center">
          {products.map(
            (product: {
              id: string;
              name?: string;
              category?: string;
              description?: string;
              image?: string;
              price?: string;
            }) => (
              <div className="p-2 rounded-md bg-gray-600 m-4" key={product.id}>
                {product.name}
              </div>
            )
          )}
        </div>
      </main>
    </div>
  );
};

export default Favoritepage;
